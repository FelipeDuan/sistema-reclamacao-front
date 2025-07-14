import { cva, cx, type VariantProps } from "class-variance-authority";
import { Text } from "./text";
import { Icon } from "./icon";
import { getColorFromVariant } from "../../helpers/utils";

export const badgeVariants = cva(
  `inline-flex items-center justify-center rounded-md gap-1 shadow-sm`,
  {
    variants: {
      variant: {
        primary: "bg-blue-100",
        secondary: "bg-gray-100",
        success: "bg-green-100",
        danger: "bg-red-100",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
  icon?: React.FC<React.ComponentProps<"svg">>;
}

export function Badge({
  icon,
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  const textColor = getColorFromVariant(variant ?? "primary");
  const iconColor = getColorFromVariant(variant ?? "primary");

  return (
    <div className={cx(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <Icon svg={icon} color={iconColor} size={"smaller"} />}
      <Text variant="body" color={textColor}>
        {children}
      </Text>
    </div>
  );
}
