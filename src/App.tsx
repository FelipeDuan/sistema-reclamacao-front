import { Check, Megaphone, Trash } from "lucide-react";
import { Icon } from "./components/ui/icon";
import { Text } from "./components/ui/text";

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

        <div className="flex flex-col gap-2">
          <Icon svg={Megaphone} color={"primary"} />
          <Icon svg={Check} color={"sucess"} />
          <Icon svg={Trash} color={"danger"} />
        </div>
      </div>
    </>
  );
}
