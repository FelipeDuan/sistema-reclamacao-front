import { useEffect, useState } from "react";
import { authFetch, BASE_URL, handleApiError } from "../../helpers/api";
import { useNavigate, useParams } from "react-router";
import { Card } from "../ui/card";
import { Text } from "../ui/text";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function EditReclamacaoForm() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReclamacao() {
      try {
        const data = await authFetch({
          url: `${BASE_URL}/api/reclamacoes/${id}`,
        });
        setTitulo(data.titulo);
        setDescricao(data.descricao);
      } catch (error: any) {
        alert(handleApiError(error, "Erro ao carregar reclamação."));
      }
    }

    fetchReclamacao();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await authFetch({
        url: `${BASE_URL}/api/reclamacoes/${id}`,
        options: {
          method: "PUT",
          body: JSON.stringify({ titulo, descricao }),
        },
      });

      alert("Reclamação atualizada com sucesso!");
      navigate(`/reclamacao/${id}`, { replace: true });
    } catch (error: any) {
      alert(handleApiError(error, "Erro ao atualizar reclamação."));
    }
  }

  return (
    <Card className="p-6 max-w-5xl mx-auto w-full flex flex-col gap-6">
      <Text variant="subheading">Editar Reclamação</Text>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label required>Título</Label>
          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label required>Descrição</Label>
          <Textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
