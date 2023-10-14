export const BREAKPOINTS = new Map([
  ["mobile", 0],
  ["tablet", 768],
  ["desktop", 1024],
]);

type BuildMediaQueryStringArgs = {
  min?: number;
  max?: number;
};

export function buildMediaQueryString({
  min = 0,
  max = 0,
}: BuildMediaQueryStringArgs) {
  let query = "";

  if (min > 0) {
    query += `(min-width: ${min}px)`;
  }

  if (min > 0 && max > 0) {
    query += " and ";
  }

  if (max > 0) {
    query += `(max-width: ${max}px)`;
  }

  return query;
}
