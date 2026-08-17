import parser from "jsonc-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["!**/*"],
}, ...compat.extends("@react-native-community"), {
    rules: {
        "prettier/prettier": ["error", {
            singleQuote: true,
        }],
    },
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {},
}, {
    files: ["**/*.ts"],
    ignores: ["./src/migrations/**"],

    rules: {
        "no-restricted-imports": ["error", "@nx/workspace"],
    },
}, {
    files: [
        "./package.json",
        "./generators.json",
        "./executors.json",
        "./migrations.json",
    ],

    languageOptions: {
        parser: parser,
    },

    rules: {
        "@nx/nx-plugin-checks": "error",
    },
}, {
    files: ["./package.json"],

    languageOptions: {
        parser: parser,
    },

    rules: {
        "@nx/dependency-checks": ["error", {
            buildTargets: ["build-base"],

            ignoredDependencies: [
                "nx",
                "@nx/jest",
                "typescript",
                "eslint",
                "@angular-devkit/core",
                "@typescript-eslint/eslint-plugin",
            ],
        }],
    },
}];