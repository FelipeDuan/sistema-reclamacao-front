import { useEffect } from "react";
import { Card } from "../ui/card";
import { Text } from "../ui/text";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useEditReclamacao } from "../../hooks/use-edit-reclamacao";

export function EditReclamacaoForm() {
  const {
    id,
    titulo,
    descricao,
    fetchReclamacao,
    handleEditDescricao,
    handleEditTitulo,
    handleSubmit,
  } = useEditReclamacao();

  useEffect(() => {
    fetchReclamacao();
  }, [id]);

  return (
    <Card className="p-6 max-w-5xl mx-auto w-full flex flex-col gap-6">
      <Text variant="subheading">Editar Reclamação</Text>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label required>Título</Label>
          <Input
            value={titulo}
            onChange={handleEditTitulo}
            placeholder="Título"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label required>Descrição</Label>
          <Textarea
            value={descricao}
            onChange={handleEditDescricao}
            placeholder="Descrição"
            className="h-40"
          />
        </div>

        <Button type="submit" variant="primary">
          Salvar alterações
        </Button>
      </form>
    </Card>
  );
}
