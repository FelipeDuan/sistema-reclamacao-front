import { LoginForm } from "../components/core/login-form";
import { Card } from "../components/ui/card";
import { Text } from "../components/ui/text";
import BgWhite from "../assets/BgWhite.svg";

export function PageLogin() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgWhite})` }}
        className="flex min-h-screen items-center justify-center p-8"
      >
        <Card className="flex flex-col gap-10 p-8">
          <Text variant={"heading"} align={"center"}>
            Fazer Login
          </Text>

          <LoginForm />
        </Card>
      </div>
    </>
  );
}
