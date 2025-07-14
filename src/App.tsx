import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { PageLogin } from "./pages/page-login";
import { ProtectedRoute } from "./components/core/protected-route";
import { PageRegister } from "./pages/page-register";
import { PageHome } from "./pages/page-home";

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
      </Routes>
    </BrowserRouter>
  );
}
