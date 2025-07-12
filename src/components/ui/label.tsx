import { cx, type VariantProps } from "class-variance-authority";
import { Text, textVariants } from "./text";

interface LabelProps
  extends VariantProps<typeof textVariants>,
    Omit<React.ComponentProps<"label">, "color"> {
  required?: boolean;
}

export function Label({
  required,
  variant = "body",
  color = "default",
  align,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={cx(textVariants({ variant, color, align }), className)}
      {...props}
    >
      {children}
      {required && (
        <Text as="span" color={"danger"}>
          {" "}
          *
        </Text>
      )}
    </label>
  );
}
