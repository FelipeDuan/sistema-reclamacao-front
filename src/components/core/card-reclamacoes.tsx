import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Text } from "../ui/text";

interface CardReclamacaoProps {
  titulo: string;
  descricao: string;
  dataCriacao: string;
  status: string;
}

export function CardReclamacoes({
  titulo,
  descricao,
  dataCriacao,
  status,
}: CardReclamacaoProps) {
  // ToDo: esse componente tá muito feio, mas depois eu refatoro

  const date = new Date(dataCriacao);
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
          >
            Ver detalhes
            <ArrowRight className="w-3 h-3 " />
          </Text>
        </div>
      </div>
    </Card>
  );
}
