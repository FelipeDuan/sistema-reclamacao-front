import { Plus } from "lucide-react";
import { Header } from "../components/layout/header";
import { Button } from "../components/ui/button";
import { Text } from "../components/ui/text";
import { Input } from "../components/ui/input";
import { ListaReclamacoes } from "../components/core/lista-reclamacoes";
import { useNavigate } from "react-router";

export function PageHome() {
  const navigate = useNavigate();

  function handleRedirectToReclamacaoForm() {
    navigate("/reclamacao/criar");
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">
          <Text variant={"subheading"}>Minhas Reclamações</Text>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
            <Input placeholder="Pesquisar em minhas reclamações..." />
            <Button
              icon={Plus}
              size="sm"
              onClick={handleRedirectToReclamacaoForm}
            >
              Nova Reclamação
            </Button>
          </div>

          <ListaReclamacoes />
        </div>
      </div>
    </>
  );
}
