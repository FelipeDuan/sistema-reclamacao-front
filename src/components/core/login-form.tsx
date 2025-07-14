import { useLoginForm } from "../../hooks/use-login-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Text } from "../ui/text";
import { useNavigate } from "react-router";

export function LoginForm() {
  const {
    inputCpf,
    password,
    isLoading,
    handleInputCpf,
    handlePassword,
    handleSubmit,
  } = useLoginForm();
  const navigate = useNavigate();

  function handleRedirectToRegisterForm() {
    navigate("/registrar");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Label htmlFor="cpf" required>
          Número de CPF
        </Label>
        <Input
          id="cpf"
          value={inputCpf}
          onChange={handleInputCpf}
          placeholder="Digite seu CPF"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="senha" required>
          Senha
        </Label>
        <Input
          id="senha"
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Digite sua senha"
          required
        />
      </div>

      <div className="flex justify-start items-center gap-2">
        <input type="checkbox" className="size-4 cursor-pointer" />
        <Text variant={"small"} color={"muted"}>
          Lembrar de Mim
        </Text>
      </div>

      <Button className="mt-2" loading={isLoading}>
        Entrar no Sistema
      </Button>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        <Text className={"capitalize"} variant={"small"} color={"muted"}>
          Ainda não possui uma conta?
        </Text>
        <Text
          variant={"small"}
          color={"primary"}
          className={"hover:underline cursor-pointer"}
          onClick={handleRedirectToRegisterForm}
        >
          Criar conta
        </Text>
      </div>
    </form>
  );
}
