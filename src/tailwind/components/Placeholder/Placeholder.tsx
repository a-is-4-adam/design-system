import { tv, VariantProps } from "tailwind-variants";

const placeholder = tv({
  base: "h-[50px] w-full rounded border-2 border-solid border-stone-350 bg-stone-250",
  variants: {
    width: {
      full: "w-full",
      "1/2": "w-1/2",
    },
  },
});

type PlaceholderProps = {
  width?: VariantProps<typeof placeholder>["width"];
};

export function Placeholder({ width = "full" }: PlaceholderProps) {
  return (
    <div
      className={placeholder({
        width,
      })}
    />
  );
}
