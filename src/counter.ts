import { sum } from "./sum.ts";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(sum(counter, 2)));
  setCounter(0);
}
