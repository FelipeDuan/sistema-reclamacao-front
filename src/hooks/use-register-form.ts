import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { formatCpf } from "../helpers/utils";
import { BASE_URL, handleApiError, publicFetch } from "../helpers/api";

export function useRegisterForm() {
  const [userName, setUserName] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleRegisterName(e: ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  function handleRegisterCpf(e: ChangeEvent<HTMLInputElement>) {
    setUserCpf(formatCpf(e.target.value));
  }

  function handleRegisterPassword(e: ChangeEvent<HTMLInputElement>) {
    setUserPassword(e.target.value);
  }

  async function handleRegisterSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cpfLimpo = userCpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
      alert("Digite um CPF válido!");
      return;
    }

    setIsLoading(true);

    try {
      const formData = {
        nome: userName,
        cpf: cpfLimpo,
        senha: userPassword,
      };
      console.log(formData);

      // ToDo: depois tenho investigar o pq de ele sempre voltar pra registrar
      const data = await publicFetch({
        url: `${BASE_URL}/auth/registrar`,
        options: {
          method: "POST",
          body: JSON.stringify(formData),
        },
      });

      if (data && data.status === "true") {
        alert(
          data.message ||
            "Cadastro realizado com sucesso! Faça login para acessar."
        );
        navigate("/login", { replace: true });
        return;
      }

      // ToDo: esse alerta não está aparecendo, depois investigar o porquê
      alert(
        data.message ||
          "Não foi possível realizar cadastro. Tente credenciais válidas!"
      );
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao fazer o cadastro."));
    } finally {
      setIsLoading(false);
    }
  }

  return {
    userName,
    userCpf,
    userPassword,
    isLoading,
    handleRegisterName,
    handleRegisterCpf,
    handleRegisterPassword,
    handleRegisterSubmit,
  };
}
