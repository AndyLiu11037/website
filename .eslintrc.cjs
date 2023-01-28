module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [".eslintrc.cjs", "node_modules/*", "dist/*"],
};
