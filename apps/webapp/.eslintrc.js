module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    '../../.eslintrc.js',
  ],
  ignorePatterns: ['postcss.config.js', 'tailwind.config.js'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
