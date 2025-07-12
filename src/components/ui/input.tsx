import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const inputVariants = cva(
  `w-full border border-gray-300 rounded-md outline-none placeholder-gray-400
   focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all`,
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

interface InputProps
  extends VariantProps<typeof inputVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export function Input({
  type = "text",
  size,
  disabled,
  className,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={cx(
          inputVariants({ size, disabled }),
          textVariants(),
          className
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
}
