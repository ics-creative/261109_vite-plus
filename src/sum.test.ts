import { expect, test } from "vite-plus/test";
import { sum } from "./sum.ts";

test("1 + 2 は 3 になる", () => {
  expect(sum(1, 2)).toBe(3);
});
