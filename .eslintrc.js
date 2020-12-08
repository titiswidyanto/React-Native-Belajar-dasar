module.exports = {
  root: true,
  // extends: '@react-native-community',
  extends: [
    '@react-native-community',
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  rules: {
    "prettier/prettier": ["error",{
      "endOfLine": "auto"}
    ],
    'no-unused-vars': ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "single"],
    "react-native/no-inline-styles": "off",
    // "prettier/prettier": "error",
  },
  
};
