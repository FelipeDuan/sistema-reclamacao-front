import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { PageLogin } from "./pages/page-login";
import { PageComponents } from "./pages/page-components";
import { ProtectedRoute } from "./components/core/protected-route";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PageLogin />} />

        <Route
          index
          element={
            <ProtectedRoute>
              <PageComponents />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
