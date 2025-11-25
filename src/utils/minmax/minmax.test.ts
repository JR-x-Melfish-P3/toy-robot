import minmax from "./minmax";
// import { describe, test, expect } from "vitest";

// const minmax = (value, min, max) => {
//   if (value < min) {
//     return min;
//   }

//   if (value > max) {
//     return max;
//   }

//   return 0;
// };

// export default minmax;

// const describe = (desc, callback) => {
//   console.log(desc);
//   callback();
// };

// const test = (msg, callback) => {
//   try {
//     callback();
//     console.log(`Pass ${msg}`);
//   } catch (error) {
//     console.error(`Fail ${msg}`);
//   }
// };

// const expect = (received) => {
//   return {
//     toBe: (expected) => {
//       if (received === expected) {
//         return;
//       }

//       throw new Error(`Expected ${expected}, but got ${received}`);
//     },
//   };
// };

// minmax
// 1. returns given value when within min and max
// 2. returns min value when given value is less than min
// 3. returns max value when given value is greater than max

// const result = minmax(5, 0, 10);
// if (result !== 5) {
//   throw new Error(`Expected 5, but got ${result}`);
// } else {
//   console.log("returns given value when within min and max - passed");
// }

// const result2 = minmax(-5, 0, 10);
// if (result2 !== 0) {
//   throw new Error(`Expected 0, but got ${result2}`);
// } else {
//   console.log("returns min value when given value is less than min - passed");
// }

// const result3 = minmax(15, 0, 10);
// if (result3 !== 10) {
//   throw new Error(`Expected 10, but got ${result3}`);
// } else {
//   console.log(
//     "returns max value when given value is greater than max - passed"
//   );
// }

describe("minmax", () => {
  test("returns given value when within min and max", () => {
    const result = minmax(5, 0, 10);

    expect(result).toBe(5);
  });

  test("returns min value when given value is less than min", () => {
    const result = minmax(-5, 0, 10);

    expect(result).toBe(0);
  });

  test("returns max value when given value is greater than max", () => {
    const result = minmax(15, 0, 10);

    expect(result).toBe(10);
  });
});
