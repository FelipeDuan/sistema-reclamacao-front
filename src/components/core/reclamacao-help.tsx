import { CheckCircle, Phone, Mail } from "lucide-react";
import { Card } from "../ui/card";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";

export function ReclamacaoHelp() {
  function handleContactSupport() {
    alert("O suporte foi contactado.");
  }

  return (
    <Card className="flex flex-col justify-between p-6">
      <div className="flex flex-col gap-4">
        <Text variant={"subheading"}>Deixe aqui sua reclamação!</Text>

        <div className="flex items-center gap-4">
          <Icon svg={CheckCircle} size={"sm"} color={"primary"} />

          <div className="flex flex-col">
            <Text variant={"bodyBold"}>Seja específico</Text>

            <Text variant={"small"} color={"muted"}>
              De forma clara, inclua o máximo de informações possível.
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Icon svg={CheckCircle} size={"sm"} color={"primary"} />

          <div className="flex flex-col">
            <Text variant={"bodyBold"}>Descreva o que aconteceu</Text>

            <Text variant={"small"} color={"muted"}>
              Conte-nos detalhadamente o que causou sua insatisfação.
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Icon svg={CheckCircle} size={"sm"} color={"primary"} />

          <div className="flex flex-col">
            <Text variant={"bodyBold"}>Matenha o foco</Text>

            <Text variant={"small"} color={"muted"}>
              Evite incluir outros problemas numa mesma reclamação.
            </Text>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-gray-300 bg-gray-100/60 flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-3">
          <Icon svg={Phone} size={"sm"} color={"primary"} />
          <Text variant="bodyBold">Fale com o suporte</Text>
        </div>

        <Text variant="small" color="muted">
          Se não conseguir solucionar seu caso, nossa equipe de suporte pode
          ajudar.
        </Text>

        <Text
          color="primary"
          className="flex items-center gap-2 cursor-pointer hover:underline transition-all"
          onClick={handleContactSupport}
        >
          Enviar mensagem
          <Icon svg={Mail} size="smaller" color="primary" />
        </Text>
      </div>
    </Card>
  );
}
