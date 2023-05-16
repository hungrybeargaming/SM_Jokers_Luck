module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    globals: {
        "HoneyPot": "readonly",
    },
    plugins: ["prettier"],
    rules: {
        "prefer-destructuring": [
            "error",
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "dot-notation": "error",
        quotes: ["error", "double"],

        "import/no-cycle": "off",
        "no-lonely-if": "off",
        "no-plusplus": "off",
        "no-useless-constructor": "off", // warn , off, error
        "no-empty-function": "off",
        "no-underscore-dangle": "error",
        "no-use-before-define": "off",
        "no-unused-vars": "error",
        "no-debugger": "error",
        "no-param-reassign": ["error"],
        "operator-linebreak": ["error", "after"],
        "default-param-last": ["error"],
        "eol-last": ["error", "always"],
        "guard-for-in": "off",
        "arrow-body-style": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "no-restricted-syntax": "off",
        "no-confusing-arrow": ["error", { allowParens: true }],
        "no-duplicate-imports": ["error", { includeExports: true }],
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "max-len": ["error", { code: 300 }],
        "no-trailing-spaces": ["error", { ignoreComments: true }],
        "id-length": ["error", { min: 0, max: 50 }],
        "prefer-const": [
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: false,
            },
        ],
        "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
        "new-cap": ["error", { newIsCap: true }],
        "object-shorthand": ["off"],

        // "no-confusing-arrow": ["error", { allowParens: false }],
    },
};
