module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
};
