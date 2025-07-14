import { useEffect, useState } from "react";
import { type Reclamacao } from "../../models/reclamacao";
import { authFetch, BASE_URL } from "../../helpers/api";
import { CardReclamacoes } from "./card-reclamacoes";

interface ListaReclamacoesProps {
  searchReclamacao: string;
}

export function ListaReclamacoes({ searchReclamacao }: ListaReclamacoesProps) {
  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);
  const filteredReclamacoes = reclamacoes.filter((rec) =>
    rec.titulo.toLowerCase().includes(searchReclamacao.toLowerCase())
  );

  useEffect(() => {
    async function fetchReclamacoes() {
      try {
        const data = await authFetch({ url: `${BASE_URL}/api/reclamacoes` });
        setReclamacoes(data);
      } catch (error) {
        console.log("Deu erro nessa parada aqui", error);
      }
    }

    fetchReclamacoes();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {filteredReclamacoes.map((rec) => (
          <CardReclamacoes
            key={rec.id}
            id={rec.id}
            titulo={rec.titulo}
            descricao={rec.descricao}
            status={rec.status}
            dataCriacao={rec.dataCriacao}
          />
        ))}
      </div>
    </>
  );
}
