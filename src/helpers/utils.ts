export type VariantType = "primary" | "success" | "danger" | "secondary";
export type ColorType = "primary" | "success" | "danger" | "muted";

export function getColorFromVariant(variant: VariantType): ColorType {
  const colorMap: Record<VariantType, ColorType> = {
    primary: "primary",
    success: "success",
    danger: "danger",
    secondary: "muted",
  };

  return colorMap[variant as VariantType] ?? "primary";
}

export function getButtonContentColor(
  variant?: VariantType
): "white" | "default" {
  switch (variant) {
    case "primary":
    case "danger":
    case "success":
      return "white";
    case "secondary":
    default:
      return "default";
  }
}

export function formatCpf(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
