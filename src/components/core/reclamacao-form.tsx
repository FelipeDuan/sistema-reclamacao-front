import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState, type ChangeEvent } from "react";
import { authFetch, BASE_URL } from "../../helpers/api";
import { useNavigate } from "react-router";

export function ReclamacaoForm() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleTitulo(e: ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }

  function handleDescricao(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescricao(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = {
        titulo,
        descricao,
      };

      const data = await authFetch({
        url: `${BASE_URL}/api/reclamacoes`,
        options: {
          method: "POST",
          body: JSON.stringify(formData),
        },
      });

      if (data && data.id) {
        setTitulo("");
        setDescricao("");
        setIsLoading(false);
        alert("Reclamação criada com sucesso!");
        navigate("/", { replace: true });
        return;
      }

      alert("Não foi possível criar reclamação");
    } catch (error: any) {
      alert(error.message || "Erro ao criar nova reclamação.");
    } finally {
      setIsLoading(false);
    }
  }

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
