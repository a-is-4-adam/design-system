export type AsChildProps<Base, Comp> = (
  | {
      asChild: true;
    }
  | ({
      asChild?: never;
    } & Comp)
) &
  Base;
