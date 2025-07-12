import { Check, Eye, Megaphone, Trash, X } from "lucide-react";
import { Icon } from "./components/ui/icon";
import { Text } from "./components/ui/text";
import { Badge } from "./components/ui/badge";

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
      </div>
    </>
  );
}
