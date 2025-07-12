import { useState, type ChangeEvent } from "react";
import { formatCpf } from "../helpers/utils";

export function useLoginForm() {
  const [inputCpf, setInputCpf] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInputCpf(e: ChangeEvent<HTMLInputElement>) {
    setInputCpf(formatCpf(e.target.value));
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const cpfLimpo = inputCpf.replace(/\D/g, "");

    const formData = {
      cpf: cpfLimpo,
      senha: password,
    };

    if (cpfLimpo.length !== 11) {
      alert("Digite um CPF válido!");
      setIsLoading(false);
      return;
    }

    // ToDo: aqui eu tenho que fazer o fetch pro meu backend e guardar o token
    setTimeout(() => {
      console.log(formData);
      setIsLoading(false);
    }, 3000);
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
