module.exports = {
  collectCoverageFrom: ["<rootDir>/src/{ctrl,gameObj}/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "<rootDir>/tests/__coverage__/",
  displayName: "react-lamorte",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  testMatch: ["<rootDir>/tests/**/*.[jt]s?(x)"],
  testPathIgnorePatterns: [
    "<rootDir>/tests/setup.js",
    "<rootDir>/tests/__snapshots__",
    "<rootDir>/tests/__coverage__",
  ],
  transform: {
    ".*\\.js": "<rootDir>/node_modules/babel-jest",
  },
  verbose: true,
};
