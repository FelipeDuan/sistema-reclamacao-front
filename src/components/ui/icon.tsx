import { cva, cx, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    },
    color: {
      default: "text-gray-900",
      muted: "text-gray-500",
      primary: "text-blue-600",
      danger: "text-red-600",
      success: "text-green-600",
    },
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    animate: false,
  },
});

interface IconProps
  extends Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  svg: SvgComponent,
  size,
  color,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={cx(iconVariants({ size, color, animate }), className)}
      {...props}
    />
  );
}
