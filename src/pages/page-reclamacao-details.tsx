import { Header } from "../components/layout/header";
import { useEffect } from "react";
import { Card } from "../components/ui/card";
import { Text } from "../components/ui/text";
import { Check, CheckCircle, Clock, Pencil, Trash } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useReclamacaoDetails } from "../hooks/use-reclamacao-details";

export function PageReclamacaoDetails() {
  const {
    id,
    fetchReclamacao,
    reclamacao,
    formattedDate,
    handleConcludReclamacao,
    handleDeleteReclamacao,
    handleEditReclamacao,
  } = useReclamacaoDetails();

  useEffect(() => {
    fetchReclamacao();
  }, [id]);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-4">
          <Card className="p-6 flex flex-col gap-8">
            <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-2 sm:gap-8">
              <Text variant={"subheading"}>{reclamacao?.titulo}</Text>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
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
              <div className="flex flex-col sm:flex-row flex-wrap justify-end items-stretch gap-2 sm:gap-4">
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
