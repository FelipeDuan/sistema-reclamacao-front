import { ReclamacaoForm } from "../components/core/reclamacao-form";
import { Header } from "../components/layout/header";
import { Card } from "../components/ui/card";
import { Text } from "../components/ui/text";

export function PageCreateReclamacao() {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">
          <Text variant={"subheading"}>Criar Reclamação</Text>

          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
            <Card>
              <ReclamacaoForm />
            </Card>
            <Card>Olá</Card>
          </div>
        </div>
      </div>
    </>
  );
}
