import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";
import { Sprinkles, sprinkles } from "../../sprinkles.css";
import { clsx } from "clsx";

type AsChildProps<Base, Comp> = (
  | {
      asChild: true;
    }
  | ({
      asChild?: never;
    } & Comp)
) &
  Base;

type StackProps = AsChildProps<
  {
    alignVertical?: Sprinkles["justifyContent"];
    alignHorizontal?: Sprinkles["justifyContent"];
    className?: string;
    space: Sprinkles["gap"];
    style?: React.CSSProperties;
  },
  React.ComponentPropsWithoutRef<"div">
>;

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
      className={clsx(
        sprinkles({
          alignItems: alignHorizontal,
          display: "flex",
          flexDirection: "column",
          gap: space,
          height: alignVertical ? "full" : undefined,
          justifyContent: alignVertical,
        }),
        className
      )}
      {...props}
    />
  );
}
