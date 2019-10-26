module.exports = {
    extends: [
        require.resolve('arui-presets-lint/eslint')
    ],
    rules: {
        'sort-class-members/sort-class-members': 'off',
        'arrow-body-style': 'off',
        'quote-props': 'off',
        'max-len': 'warn',
        'no-undef': ['error', { 'typeof': true }],
        'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement'],
        'no-continue': 'off',
        'operator-linebreak': 'off',
        'no-restricted-globals': 'off',
        'import/no-unresolved': 'off',
        'react/no-deprecated': 'error',
        'react/no-danger': 'warn',
        'react/jsx-no-undef': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-unsafe': ['warn', { "checkAliases": true }],
        'jsx-control-statements/jsx-use-if-tag': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-did-mount-set-state': 'off',
        'import/extensions': ['error', {
            'tsx': 'never',
            'pdf': 'always',
            'svg': 'always',
            'json': 'always',
            'css': 'never',
            'pcss': 'ignorePackages',
            'png': 'ignorePackages'
        }],
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always-and-inside-groups'
        }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
        'react/destructuring-assignment': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'packages']
            }
        }
    },
    env: {
        jest: true
    }
};
