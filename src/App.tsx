import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { PageLogin } from "./pages/page-login";
import { ProtectedRoute } from "./components/core/protected-route";
import { PageRegister } from "./pages/page-register";
import { PageHome } from "./pages/page-home";
import { PageCreateReclamacao } from "./pages/page-create-reclamacao";
import { PageReclamacaoDetails } from "./pages/page-reclamacao-details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PageLogin />} />
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
          path="/reclamacao"
          element={
            <ProtectedRoute>
              <PageReclamacaoDetails />
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
