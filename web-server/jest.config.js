module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverageFrom: [
    "src/engine/valuation-engine/**/*.ts",
    "!src/engine/valuation-engine/__tests__/**",
  ],
  coverageDirectory: "coverage",
};
