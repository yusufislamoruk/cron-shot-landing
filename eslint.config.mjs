import nextPlugin from "@next/eslint-plugin-next";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
    // Next.js core-web-vitals flat config
    nextPlugin.configs["core-web-vitals"],
    // React Hooks rules
    {
        plugins: {
            "react-hooks": reactHooksPlugin,
        },
        rules: reactHooksPlugin.configs.recommended.rules,
    },
    // Ignore build artifacts
    {
        ignores: [".next/**", "node_modules/**", "out/**"],
    },
];

export default eslintConfig;
