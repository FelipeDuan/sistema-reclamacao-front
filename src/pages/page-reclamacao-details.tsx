import { useNavigate, useParams } from "react-router";
import { Header } from "../components/layout/header";
import { useEffect, useState } from "react";
import { authFetch, BASE_URL, handleApiError } from "../helpers/api";
import type { Reclamacao } from "../models/reclamacao";
import { Card } from "../components/ui/card";
import { Text } from "../components/ui/text";
import { Check, CheckCircle, Clock, Pencil, Trash } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export function PageReclamacaoDetails() {
  const { id } = useParams();
  const [reclamacao, setReclamacao] = useState<Reclamacao>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchReclamacao();
  }, [id]);

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

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-4">
          <Card className="p-6 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <Text variant={"subheading"}>{reclamacao?.titulo}</Text>
              <div className="flex items-center justify-center gap-8">
                <Text color={"muted"}>{formattedDate}</Text>
                {reclamacao?.status === "PENDENTE" ? (
                  <Badge icon={Clock} size={"sm"}>
                    Pendente
                  </Badge>
                ) : (
                  <Badge icon={CheckCircle} variant={"success"} size={"sm"}>
                    Resolvido
                  </Badge>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />
            <Text>{reclamacao?.descricao}</Text>

            {reclamacao?.status === "PENDENTE" && (
              <div className="flex justify-end items-center gap-4">
                <Button
                  onClick={handleConcludReclamacao}
                  icon={Check}
                  variant="secondary"
                >
                  Marcar como Resolvido
                </Button>

                <Button
                  onClick={handleEditReclamacao}
                  icon={Pencil}
                  variant="secondary"
                >
                  Editar
                </Button>

                <Button
                  onClick={handleDeleteReclamacao}
                  icon={Trash}
                  variant="danger"
                >
                  Excluir
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
