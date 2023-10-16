import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { BREAKPOINTS, buildMediaQueryString } from "../breakpoints";
import { alignHorizontal, alignVertical, space } from "../tokens";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": buildMediaQueryString({ min: BREAKPOINTS.get("tablet") }),
    },
    desktop: {
      "@media": buildMediaQueryString({ min: BREAKPOINTS.get("desktop") }),
    },
  },
  defaultCondition: "mobile",
  properties: {
    gap: space,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    alignItems: alignVertical,
    display: ["flex"],
    flexDirection: ["column"],
    justifyContent: alignHorizontal,
    height: {
      full: "100%",
    },
    width: {
      "1/2": "50%",
      full: "100%",
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
