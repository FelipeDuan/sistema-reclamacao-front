import {
  Check,
  CheckIcon,
  Eye,
  Loader,
  Megaphone,
  PencilIcon,
  Trash,
  TrashIcon,
  X,
} from "lucide-react";
import { Icon } from "./components/ui/icon";
import { Text } from "./components/ui/text";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card } from "./components/ui/card";
import { Label } from "./components/ui/label";

export default function App() {
  return (
    <>
      <div className="space-y-4">
        <h1>Testando componentes</h1>

        <div className="flex flex-col gap-2">
          <Text variant="heading" color="primary">
            Texto título
          </Text>
          <Text variant="subheading" color="danger">
            Texto subtítulo
          </Text>
          <Text variant="bodyBold">Texto padrão em negrito</Text>
          <Text>Texto padrão</Text>
          <Text variant="small" color="muted">
            Texto pequeno
          </Text>
        </div>

        <div className="flex gap-2">
          <Icon svg={Loader} animate />
          <Icon svg={Megaphone} color={"primary"} />
          <Icon svg={Check} color={"success"} />
          <Icon svg={Trash} color={"danger"} size={"sm"} />
          <Icon svg={Trash} color={"danger"} />
          <Icon svg={Check} color={"success"} size={"lg"} />
        </div>

        <div className="flex gap-2">
          <Badge>Padrão</Badge>
          <Badge variant={"secondary"}>Secondary</Badge>
          <Badge variant={"danger"}>Danger</Badge>
          <Badge variant={"success"}>Sucess</Badge>
          <Badge icon={Megaphone}>Padrão</Badge>
          <Badge icon={Eye} variant={"secondary"}>
            Secondary
          </Badge>
          <Badge icon={X} variant={"danger"}>
            Danger
          </Badge>
          <Badge icon={Check} variant={"success"}>
            Sucess
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button>Salvar</Button>

          <Button variant="primary" icon={CheckIcon}>
            Confirmar
          </Button>

          <Button variant="success">Aprovar</Button>

          <Button variant="success" icon={CheckIcon}>
            Concluído
          </Button>

          <Button variant="danger">Excluir</Button>

          <Button variant="danger" icon={TrashIcon}>
            Deletar
          </Button>

          <Button variant="secondary">Cancelar</Button>

          <Button variant="secondary" icon={PencilIcon}>
            Editar
          </Button>

          <Button variant="primary" loading>
            Salvando
          </Button>

          <Button variant="primary" disabled>
            Desabilitado
          </Button>
        </div>

        <div className="flex gap-2">
          <Input placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" size={"sm"} />
        </div>

        <div className="flex gap-2">
          <Card>Alguma Coisa, testando Card</Card>
        </div>

        <div className="flex gap-2">
          <Label required>Número de CPF</Label>
        </div>
      </div>
    </>
  );
}
