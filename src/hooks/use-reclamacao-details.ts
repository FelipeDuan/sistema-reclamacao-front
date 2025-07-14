import { useState } from "react";
import type { Reclamacao } from "../models/reclamacao";
import { useNavigate, useParams } from "react-router";
import { authFetch, BASE_URL, handleApiError } from "../helpers/api";

export function useReclamacaoDetails() {
  const { id } = useParams();
  const [reclamacao, setReclamacao] = useState<Reclamacao>();
  const navigate = useNavigate();

  async function fetchReclamacao() {
    try {
      const data = await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}`,
      });

      setReclamacao(data);
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao buscar detalhes da reclamação."));
    }
  }

  function handleEditReclamacao() {
    navigate(`/reclamacao/${id}/editar`);
  }

  async function handleDeleteReclamacao() {
    try {
      await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}`,
        options: {
          method: "DELETE",
        },
      });

      alert("Reclamação deletada com sucesso!");
      navigate("/", { replace: true });
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao excluir reclamação."));
    }
  }

  async function handleConcludReclamacao() {
    try {
      await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}/status`,
        options: {
          method: "PUT",
        },
      });

      await fetchReclamacao();
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao atualizar o status da reclamação."));
    }
  }

  const date = new Date(`${reclamacao?.dataCriacao}`);
  const formattedDate =
    date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }) +
    " " +
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return {
    id,
    reclamacao,
    formattedDate,
    fetchReclamacao,
    handleEditReclamacao,
    handleConcludReclamacao,
    handleDeleteReclamacao,
  };
}
