// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    settings: {
        "import/resolver": {
            node: { extensions: [".js", ".mjs", ".cjs"] },
            typescript: {},
        },
    },
    extends: [
        "prettier",
        "xo",
        'plugin:unicorn/all',
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    rules: {
        /**
         * Override some ESLint rules
         */
        'capitalized-comments': 'off',
        'prefer-template': 'error',
        'no-console': 'error',
        'newline-before-return': 'error',

        /**
         * Override some Import plugin rules
         */
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/newline-after-import': 'error',

        /**
         * Override some Unicorn rules
         */
        'unicorn/filename-case': 'off',
    },
    overrides: [
        {
            files: '**/*.ts',
            extends: [
                "prettier",
                "xo",
                "xo-typescript",
                'plugin:unicorn/all',
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
            ],
        },
    ],
};