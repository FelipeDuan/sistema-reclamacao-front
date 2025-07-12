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
      </div>
    </>
  );
}
