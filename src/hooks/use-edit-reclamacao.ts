import { useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { authFetch, BASE_URL, handleApiError } from "../helpers/api";

export function useEditReclamacao() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  async function fetchReclamacao() {
    try {
      const data = await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}`,
      });
      setTitulo(data.titulo);
      setDescricao(data.descricao);
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao carregar reclamação."));
    }
  }

  function handleEditTitulo(e: ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }

  function handleEditDescricao(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescricao(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}`,
        options: {
          method: "PUT",
          body: JSON.stringify({ titulo, descricao }),
        },
      });

      alert("Reclamação atualizada com sucesso!");
      navigate(`/reclamacao/${id}`, { replace: true });
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao atualizar reclamação."));
    }
  }

  return {
    id,
    titulo,
    descricao,
    fetchReclamacao,
    handleEditTitulo,
    handleEditDescricao,
    handleSubmit,
  };
}
