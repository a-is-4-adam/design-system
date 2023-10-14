import { expect, test } from "vitest";
import { buildMediaQueryString } from "./breakpoints";

test("min only value", () => {
  expect(buildMediaQueryString({ min: 100 })).toMatchInlineSnapshot(
    '"(min-width: 100px)"'
  );
});

test("max only value", () => {
  expect(buildMediaQueryString({ max: 100 })).toMatchInlineSnapshot(
    '"(max-width: 100px)"'
  );
});

test("min and max value", () => {
  expect(buildMediaQueryString({ min: 20, max: 100 })).toMatchInlineSnapshot(
    '"(min-width: 20px) and (max-width: 100px)"'
  );
});

test("min equal to zero", () => {
  expect(buildMediaQueryString({ min: 0, max: 100 })).toMatchInlineSnapshot(
    '"(max-width: 100px)"'
  );
});

test("max equal to zero", () => {
  expect(buildMediaQueryString({ min: 100, max: 0 })).toMatchInlineSnapshot(
    '"(min-width: 100px)"'
  );
});

test("return an empty string when both values are zero", () => {
  expect(buildMediaQueryString({ min: 0, max: 0 })).toMatchInlineSnapshot('""');
});

test("return an empty string when no values are supplied", () => {
  expect(buildMediaQueryString({})).toMatchInlineSnapshot('""');
});
