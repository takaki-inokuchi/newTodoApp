// import "@testing-library/jest-dom";
// import { config } from "dotenv";

// config();


import "@testing-library/jest-dom";

if (typeof structuredClone === "undefined") {
  // Node.js で structuredClone が未定義の場合にポリフィル
  global.structuredClone = <T>(obj: T) => JSON.parse(JSON.stringify(obj));
}
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),       // 古いブラウザ互換
    removeListener: jest.fn(),    // 古いブラウザ互換
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});