module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  ignorePatterns: ["lib"],
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "n/no-unsupported-features/es-syntax": ["warn", { ignores: ["modules"] }],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "object-shorthand": ["warn", "always"],
  },
};
