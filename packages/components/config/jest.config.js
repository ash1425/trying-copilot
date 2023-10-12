module.exports = {
  rootDir: "../",
  setupFilesAfterEnv: ["<rootDir>/src/jest-config/setupTests.js"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js|jsx)",
    "**/?(*.)+(spec|test).+(ts|tsx|js|jsx)",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$":
      "<rootDir>/src/jest-config/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg|jpg|jpeg|png|ico|webp)$":
      "<rootDir>/src/jest-config/__mocks__/fileMock.js",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/html-report",
        filename: "report.html",
      },
    ],
  ],
  collectCoverageFrom: [
    "src/**/*.{js,ts,jsx,tsx}",
    "!src/types/*.{js,jsx,ts,tsx}",
    "!src/index.tsx",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
