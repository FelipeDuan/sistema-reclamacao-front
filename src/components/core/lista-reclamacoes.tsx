import { useEffect, useState } from "react";
import { type Reclamacao } from "../../models/reclamacao";
import { authFetch, BASE_URL } from "../../helpers/api";
import { CardReclamacoes } from "./card-reclamacoes";

export function ListaReclamacoes() {
  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);

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
        {reclamacoes.map((rec) => (
          <CardReclamacoes
            key={rec.id}
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
