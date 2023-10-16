import { alignHorizontal, alignVertical, space } from "../tokens";

function buildMapFromToken<
  Tokens extends Record<string, string>,
  T extends (key: keyof Tokens) => unknown
>(tokens: Tokens, transform: T) {
  return (Object.keys(tokens) as Array<keyof Tokens>).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: transform(curr),
    };
  }, {} as { [K in keyof Tokens]: ReturnType<T> });
}

export const gap = buildMapFromToken(space, (key) => `gap-${key}`);

const twAlignHorizontal = {
  left: "start",
  right: "end",
  center: "center",
} as const;

const twAlignVertical = {
  top: "start",
  bottom: "end",
  center: "center",
} as const;

export const justify = buildMapFromToken(
  alignHorizontal,
  (key) => `justify-${twAlignHorizontal[key]}`
);

export const items = buildMapFromToken(
  alignVertical,
  (key) => `items-${twAlignVertical[key]}`
);
