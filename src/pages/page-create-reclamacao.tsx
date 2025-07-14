import { ReclamacaoForm } from "../components/core/reclamacao-form";
import { ReclamacaoHelp } from "../components/core/reclamacao-help";
import { Header } from "../components/layout/header";

export function PageCreateReclamacao() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
            <ReclamacaoForm />

            <ReclamacaoHelp />
          </div>
        </div>
      </div>
    </>
  );
}
