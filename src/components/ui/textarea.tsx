import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const textareaVariants = cva(
  `w-full border border-gray-300 rounded-md outline-none placeholder-gray-400
   focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm`,
  {
    variants: {
      size: {
        sm: "py-2 px-2",
        md: "py-2 px-4",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface TextareaProps
  extends VariantProps<typeof textareaVariants>,
    Omit<React.ComponentProps<"textarea">, "size" | "disabled"> {}

export function Textarea({
  size,
  disabled,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className="relative w-full">
      <textarea
        className={cx(
          textareaVariants({ size, disabled }),
          textVariants(),
          className
        )}
        {...props}
      />
    </div>
  );
}
