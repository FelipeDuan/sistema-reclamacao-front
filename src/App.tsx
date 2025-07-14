import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { PageLogin } from "./pages/page-login";
import { ProtectedRoute } from "./components/core/protected-route";
import { PageRegister } from "./pages/page-register";
import { PageHome } from "./pages/page-home";
import { PageCreateReclamacao } from "./pages/page-create-reclamacao";
import { PageReclamacaoDetails } from "./pages/page-reclamacao-details";
import { PageEditReclamacao } from "./pages/page-edit-reclamacao";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/registrar" element={<PageRegister />} />

        <Route
          index
          element={
            <ProtectedRoute>
              <PageHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reclamacao/:id"
          element={
            <ProtectedRoute>
              <PageReclamacaoDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reclamacao/:id/editar"
          element={
            <ProtectedRoute>
              <PageEditReclamacao />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reclamacao/criar"
          element={
            <ProtectedRoute>
              <PageCreateReclamacao />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
