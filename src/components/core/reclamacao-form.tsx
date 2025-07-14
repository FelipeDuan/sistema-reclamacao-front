import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useCreateReclamacao } from "../../hooks/use-create-reclamacao";
import { Text } from "../ui/text";
import { Card } from "../ui/card";

export function ReclamacaoForm() {
  const {
    titulo,
    descricao,
    isLoading,
    handleTitulo,
    handleDescricao,
    handleSubmit,
  } = useCreateReclamacao();

  return (
    <>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <Text variant={"subheading"}>Criar Reclamação</Text>
          <div className="flex flex-col gap-2">
            <Label required>Título</Label>
            <Input
              placeholder="Insira o título"
              value={titulo}
              onChange={handleTitulo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label required>Descrição</Label>
            <Textarea
              value={descricao}
              onChange={handleDescricao}
              placeholder="Insira a descrição"
              className="h-48 overflow-y-auto"
            />
          </div>

          <Button loading={isLoading} icon={Plus}>
            Criar Reclamação
          </Button>
        </form>
      </Card>
    </>
  );
}
