import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        React: "readonly",
        NodeJS: "readonly",
        getComputedStyle: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "react-hooks/exhaustive-deps": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-irregular-whitespace": "warn",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: [
      "tailwind.config.js",
      "next.config.mjs",
      "postcss.config.js",
      ".next/**/*",
    ],
  },
];
