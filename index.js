const baseExtends = [
    'plugin:unicorn/all',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
]

const baseRules = {
    /**
     * Override some ESLint rules
     */
    'capitalized-comments': 'off',
    'prefer-template': 'error',
    'no-console': 'error',
    'newline-before-return': 'error',
    'object-curly-spacing': [
        'error',
        'always'
    ],

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
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    settings: {
        "import/resolver": {
            node: {extensions: [".js", ".mjs", ".cjs"]},
            typescript: {},
        },
    },
    extends: [
        "prettier",
        "xo",
        ...baseExtends,
    ],
    rules: baseRules,
    overrides: [
        {
            files: '**/*.ts',
            extends: [
                "prettier",
                "xo",
                "xo-typescript",
                ...baseExtends,
            ],
            rules: {
                ...baseRules,
                '@typescript-eslint/object-curly-spacing': [
                    'error',
                    'always'
                ],
            }
        },
    ],
};