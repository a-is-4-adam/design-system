import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { BREAKPOINTS, buildMediaQueryString } from "./breakpoints";

export const space = {
  "0": "0",
  "1": "4px",
  "2": "8px",
  "3": "12px",
};

export const align = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
  stretch: "stretch",
};

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
    alignItems: align,
    display: ["flex"],
    flexDirection: ["column"],
    justifyContent: align,
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
