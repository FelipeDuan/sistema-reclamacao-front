import { LoginForm } from "../components/core/login-form";
import { Card } from "../components/ui/card";
import { Text } from "../components/ui/text";

export function PageLogin() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-8 bg-[url(src/assets/BgWhite.svg)]">
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
