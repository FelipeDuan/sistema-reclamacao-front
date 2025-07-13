import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { formatCpf } from "../helpers/utils";

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

      // ToDo: depois tenho que lembrar de colocar o fetch pro back aqui
      console.log(formData);
    } catch (error: any) {
      alert(error.message || "Erro ao fazer o login.");
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
