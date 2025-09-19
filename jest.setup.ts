// import "@testing-library/jest-dom";
// import { config } from "dotenv";

// config();


import "@testing-library/jest-dom";

if (typeof structuredClone === "undefined") {
  // Node.js で structuredClone が未定義の場合にポリフィル
  global.structuredClone = <T>(obj: T) => JSON.parse(JSON.stringify(obj));
}
