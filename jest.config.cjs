module.exports = {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'json', 'cjs'],
  testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testTimeout: 30000
};
