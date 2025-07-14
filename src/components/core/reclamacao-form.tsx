import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useCreateReclamacao } from "../../hooks/use-create-reclamacao";

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
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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
    </>
  );
}
