import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useRegisterForm } from "../../hooks/use-register-form";

export function RegisterForm() {
  const {
    isLoading,
    userName,
    userCpf,
    userPassword,
    handleRegisterCpf,
    handleRegisterName,
    handleRegisterPassword,
    handleRegisterSubmit,
  } = useRegisterForm();

  return (
    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome" required>
          Nome
        </Label>
        <Input
          id="nome"
          value={userName}
          onChange={handleRegisterName}
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cpf" required>
          CPF
        </Label>
        <Input
          id="cpf"
          value={userCpf}
          onChange={handleRegisterCpf}
          placeholder="Digite seu cpf"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="senha">Senha</Label>
        <Input
          id="senha"
          type="password"
          value={userPassword}
          onChange={handleRegisterPassword}
          placeholder="Digite sua senha"
          required
        />
      </div>

      <Button className="mt-2" loading={isLoading}>
        Criar Conta
      </Button>
    </form>
  );
}
