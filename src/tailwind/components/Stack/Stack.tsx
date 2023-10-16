import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { justify, gap, items } from "../../variants";
import { AsChildProps } from "../../../types";

const stack = tv({
  base: "flex flex-col",
  variants: {
    space: gap,
    alignHorizontal: justify,
    alignVertical: items,
  },
});

type StackProps = AsChildProps<
  {
    alignVertical?: VariantProps<typeof stack>["alignVertical"];
    alignHorizontal?: VariantProps<typeof stack>["alignHorizontal"];
    className?: string;
    space: VariantProps<typeof stack>["space"];
    style?: React.CSSProperties;
  },
  React.ComponentPropsWithoutRef<"div">
>;

const invertDirectionMap = {
  top: "left",
  bottom: "right",
  left: "top",
  right: "bottom",
  center: "center",
} as const;

export function Stack({
  asChild,
  alignVertical,
  alignHorizontal,
  className,
  space,
  ...props
}: PropsWithChildren<StackProps>) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={stack({
        space,
        alignVertical: alignHorizontal
          ? invertDirectionMap[alignHorizontal]
          : undefined,
        alignHorizontal: alignVertical
          ? invertDirectionMap[alignVertical]
          : undefined,
        class: `${alignVertical ? "h-full" : ""} ${className}`,
      })}
      {...props}
    />
  );
}
