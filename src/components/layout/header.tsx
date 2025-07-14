import { Bell, Settings } from "lucide-react";
import { Icon } from "../ui/icon";
import { Text } from "../ui/text";

export function Header() {
  return (
    <>
      <header className="bg-white border-b border-gray-300 p-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Text variant={"heading"}>
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
                <Text variant={"small"}>Felipe Duan</Text>
                <Text variant={"smaller"} color={"muted"}>
                  Usuário
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
