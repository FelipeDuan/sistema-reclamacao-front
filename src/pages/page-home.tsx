import { Plus } from "lucide-react";
import { Header } from "../components/layout/header";
import { Button } from "../components/ui/button";
import { Text } from "../components/ui/text";
import { Input } from "../components/ui/input";

export function PageHome() {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Text variant={"subheading"}>Minhas Reclamações</Text>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
              <Input placeholder="Pesquisar em minhas reclamações..." />
              <Button icon={Plus} size="sm">
                Nova Reclamação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
