import { useEffect } from "react";
import { useNavigate } from "react-router";
import { verifyToken } from "../../helpers/api";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    async function check() {
      const isValid = await verifyToken();

      if (!isValid) {
        alert("Seu token está inválido! Por favor, faça login novamente.");
        navigate("/", { replace: true });
      }

      // ToDo: seria uma boa eu implementar um toast depois, lembrar disso aqui mais tarde.
    }

    check();
  }, [navigate]);

  return <>{children}</>;
}
