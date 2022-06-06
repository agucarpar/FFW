module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": ["warn", "never"],
    indent: [
      "warn",
      2,
      {
        ignoredNodes: ["ConditionalExpression"],
        flatTernaryExpressions: true,
        VariableDeclarator: 2,
        ImportDeclaration: 1,
        ignoreComments: true,
      },
    ],
    "object-curly-spacing": ["warn", "always "],
    "array-bracket-spacing": ["warn", "always"],
    "template-curly-spacing": ["warn", "always"],
    quotes: [
      "warn",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "padded-blocks": "warn",
    "no-multiple-empty-lines": ["warn"],
    "no-use-before-define": [
      "warn",
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    "space-before-function-paren": ["warn", "always"],
    semi: [0, "never"],
    "space-in-parens": ["warn", "always"],
    "eol-last": ["warn"],
    "brace-style": ["warn", "stroustrup"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "no-case-declarations": [1],
    "no-shadow": [
      "error",
      {
        hoist: "functions",
      },
    ],
    camelcase: [
      "error",
      {
        properties: "always",
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: false,
      },
    ],
    "no-lonely-if": "error",
  },
}
