module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
    curly: 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    'vue/multi-word-component-names': 'warn', // FIXME
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        selfClosingTag: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/no-multiple-template-root': 0,
    'vue/component-name-in-template-casing': 2,
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
  },
  env: {
    node: true,
    browser: true,
  },
}
