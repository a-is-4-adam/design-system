import clsx from "clsx";
import { Sprinkles, sprinkles } from "../../sprinkles.css";
import { placeholderStyles } from "./Placeholder.css";

type PlacehoderProps = {
  width?: Sprinkles["width"];
};

export function Placeholder({ width = "full" }: PlacehoderProps) {
  return (
    <div
      className={clsx(
        sprinkles({
          width,
        }),
        placeholderStyles
      )}
    />
  );
}
