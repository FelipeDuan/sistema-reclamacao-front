import { useState } from "react";
import type { Reclamacao } from "../models/reclamacao";
import { useNavigate, useParams } from "react-router";
import { authFetch, BASE_URL, handleApiError } from "../helpers/api";
import { formatDate } from "../helpers/utils";

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

  const formattedDate = formatDate(`${reclamacao?.dataCriacao}`);

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
