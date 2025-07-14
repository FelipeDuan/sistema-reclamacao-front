import { Bell, Settings } from "lucide-react";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { authFetch, BASE_URL, TOKEN_KEY } from "../../helpers/api";
import { Button } from "../ui/button";

export function Header() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  async function getUserName() {
    try {
      const data = await authFetch({ url: `${BASE_URL}/api/usuario/me` });

      setUserName(data.nome);
    } catch (error: any) {
      alert("Não foi possível pegar o seu nome de usuário!");
    }
  }

  useEffect(() => {
    getUserName();
  }, []);

  function handleRedirectToHome() {
    navigate("/home", { replace: true });
  }

  function handleLogout() {
    alert("Você está efetuando o Logout!");
    localStorage.removeItem(TOKEN_KEY);
    navigate("/", { replace: true });
  }

  return (
    <>
      <header className="bg-white border-b border-gray-300 p-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Text
              as="button"
              variant={"heading"}
              onClick={handleRedirectToHome}
              className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              Reclame{" "}
              <Text color={"primary"} variant={"heading"}>
                .
              </Text>
            </Text>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <Icon svg={Bell} color={"muted"} size={"sm"} />
              <Icon svg={Settings} color={"muted"} size={"sm"} />
            </div>

            <div className="w-px h-6 bg-gray-300 hidden sm:flex" />

            <div className="hidden sm:flex items-center gap-4">
              <div className="size-7 bg-gray-300 rounded-md animate-pulse" />

              <div className="flex flex-col">
                <Text variant={"small"}>{userName}</Text>
                <Text variant={"smaller"} color={"muted"}>
                  Usuário
                </Text>
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300 hidden sm:flex" />

            <Button onClick={handleLogout} variant={"danger"} size={"sm"}>
              Fazer Logout
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
