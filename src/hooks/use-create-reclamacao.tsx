import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { authFetch, BASE_URL } from "../helpers/api";

export function useCreateReclamacao() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleTitulo(e: ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }

  function handleDescricao(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescricao(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = {
        titulo,
        descricao,
      };

      const data = await authFetch({
        url: `${BASE_URL}/api/reclamacoes`,
        options: {
          method: "POST",
          body: JSON.stringify(formData),
        },
      });

      if (data && data.id) {
        setTitulo("");
        setDescricao("");
        setIsLoading(false);
        alert("Reclamação criada com sucesso!");
        navigate("/", { replace: true });
        return;
      }

      alert("Não foi possível criar reclamação");
    } catch (error: any) {
      alert(error.message || "Erro ao criar nova reclamação.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    titulo,
    descricao,
    isLoading,
    handleTitulo,
    handleDescricao,
    handleSubmit,
  };
}
