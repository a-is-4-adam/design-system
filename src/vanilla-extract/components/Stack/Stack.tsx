import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";
import {
  Sprinkles,
  mapUnresponsiveValue,
  sprinkles,
} from "../../sprinkles.css";
import { clsx } from "clsx";
import { alignHorizontal, alignVertical } from "../../../tokens";

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
    alignVertical?: Sprinkles["alignItems"];
    alignHorizontal?: Sprinkles["justifyContent"];
    className?: string;
    space: Sprinkles["gap"];
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
      className={clsx(
        sprinkles({
          alignItems: alignHorizontal
            ? invertDirectionMap[alignHorizontal]
            : undefined,
          display: "flex",
          flexDirection: "column",
          gap: space,
          height: alignVertical ? "full" : undefined,
          justifyContent: alignVertical
            ? invertDirectionMap[alignVertical]
            : undefined,
        }),
        className
      )}
      {...props}
    />
  );
}
