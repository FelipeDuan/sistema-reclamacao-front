import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Text } from "../ui/text";
import { useNavigate } from "react-router";
import { formatDate } from "../../helpers/utils";

interface CardReclamacaoProps {
  id: string;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  status: string;
}

export function CardReclamacoes({
  id,
  titulo,
  descricao,
  dataCriacao,
  status,
}: CardReclamacaoProps) {
  // ToDo: esse componente tá muito feio, mas depois eu refatoro

  const navigate = useNavigate();
  const formattedDate = formatDate(dataCriacao);

  function handleRedirectToReclamacaoDetails() {
    navigate(`/reclamacao/${id}`);
  }

  return (
    <Card className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Text variant={"bodyBold"}>{titulo}</Text>
        {status === "PENDENTE" ? (
          <Badge icon={Clock} size={"sm"}>
            Pendente
          </Badge>
        ) : (
          <Badge icon={CheckCircle} variant={"success"} size={"sm"}>
            Resolvido
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Text variant={"small"} color={"muted"}>
          {descricao.length < 70 ? descricao : `${descricao.slice(0, 70)}...`}
        </Text>

        <div className="flex items-center justify-between">
          <Text variant={"smaller"} color={"muted"}>
            Criada em {formattedDate}
          </Text>

          <Text
            as="button"
            variant={"smaller"}
            color={"primary"}
            className="flex items-center justify-center gap-1 cursor-pointer font-bold hover:text-blue-700 transition"
            onClick={handleRedirectToReclamacaoDetails}
          >
            Ver detalhes
            <ArrowRight className="w-3 h-3 " />
          </Text>
        </div>
      </div>
    </Card>
  );
}
