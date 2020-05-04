module.exports = {
    // extends: ['airbnb', 'airbnb/hooks'],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "modules": true
        }
    },
    parser: '@typescript-eslint/parser',
    rules: {
        'import/extensions': 'off',
        'max-len': [1, 120, 4],
        'import/no-unresolved': 'off', // ?
        'import/prefer-default-export': 'off', // ?
        'react/prefer-stateless-function': 'off', // ?
        'react/destructuring-assignment': 'off', // ?
        'arrow-body-style': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
        // 'no-unused-vars': [
        //     'error',
        //     {
        //         varsIgnorePattern: 'ReactNode'
        //     }
        // ]
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
          }],
        '@typescript-eslint/no-var-requires': 'off', // ?
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
    },
    env: {
        browser: true,
        jest: true,
        node: true,
        es6: true
    }
};
