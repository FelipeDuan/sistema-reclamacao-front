import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { Text } from "./text";
import { Icon } from "./icon";
import { getButtonContentColor } from "../../helpers/utils";
import { Loader } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md cursor-pointer font-medium transition-colors gap-1 shadow",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "bg-gray-200 hover:bg-gray-300",
        success: "bg-green-600 hover:bg-green-700",
        danger: "bg-red-600 hover:bg-red-700",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.FC<React.ComponentProps<"svg">>;
  loading?: boolean;
}

export function Button({
  icon,
  variant,
  size,
  disabled,
  className,
  children,
  loading,
  ...props
}: ButtonProps) {
  const contentColor = getButtonContentColor(variant ?? "primary");
  const textColor = contentColor === "white" ? "text-white" : "text-gray-900";

  return (
    <button
      disabled={disabled || loading}
      className={cx(buttonVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {icon && !loading && <Icon svg={icon} className={textColor} size="sm" />}
      {loading && <Icon svg={Loader} className={textColor} size="sm" animate />}
      <Text variant="bodyBold" className={textColor}>
        {loading ? "Carregando..." : children}
      </Text>
    </button>
  );
}
