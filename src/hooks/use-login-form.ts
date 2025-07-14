import { useState, type ChangeEvent } from "react";
import { formatCpf } from "../helpers/utils";
import { BASE_URL, publicFetch, TOKEN_KEY } from "../helpers/api";
import { useNavigate } from "react-router";

export function useLoginForm() {
  const [inputCpf, setInputCpf] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleInputCpf(e: ChangeEvent<HTMLInputElement>) {
    setInputCpf(formatCpf(e.target.value));
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cpfLimpo = inputCpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
      alert("Digite um CPF válido!");
      return;
    }

    setIsLoading(true);

    try {
      const formData = {
        cpf: cpfLimpo,
        senha: password,
      };

      // ToDo: aqui eu tenho que fazer o fetch pro meu backend e guardar o token
      const data = await publicFetch({
        url: `${BASE_URL}/auth/login`,
        options: {
          method: "POST",
          body: JSON.stringify(formData),
        },
      });

      if (data && data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
        navigate("/", { replace: true });
        return;
      }

      alert("Token não recebido. Verifique suas credenciais!");
    } catch (error: any) {
      alert(error.message || "Erro ao fazer o login.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    inputCpf,
    password,
    isLoading,
    handleInputCpf,
    handlePassword,
    handleSubmit,
  };
}
