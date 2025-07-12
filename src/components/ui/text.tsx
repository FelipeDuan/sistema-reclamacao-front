import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      heading: "text-2xl font-bold",
      subheading: "text-xl font-semibold",
      body: "text-base font-normal",
      bodyBold: "text-base font-semibold",
      small: "text-sm font-normal",
    },
    color: {
      default: "text-gray-900",
      muted: "text-gray-500",
      primary: "text-blue-600",
      danger: "text-red-600",
      sucess: "text-green-600",
    },
    align: {
      left: "text-left",
      center: "text-center",
      rigth: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    align: "left",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: String;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  color,
  align,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: cx(textVariants({ variant, color, align }), className),
      ...props,
    },
    children
  );
}
