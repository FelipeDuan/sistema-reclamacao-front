export type VariantType = "primary" | "success" | "danger" | "secondary";
export type ColorType = "primary" | "success" | "danger" | "muted";

export function getColorFromVariant(variant?: VariantType): ColorType {
  const colorMap: Record<VariantType, ColorType> = {
    primary: "primary",
    success: "success",
    danger: "danger",
    secondary: "muted",
  };

  return colorMap[variant as VariantType] ?? "primary";
}
