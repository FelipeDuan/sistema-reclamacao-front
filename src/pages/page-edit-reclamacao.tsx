import { EditReclamacaoForm } from "../components/core/edit-reclamacao-form";
import { Header } from "../components/layout/header";

export function PageEditReclamacao() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <EditReclamacaoForm />
        </div>
      </div>
    </>
  );
}
