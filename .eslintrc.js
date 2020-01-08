module.exports = {
   env: {
      browser: true,
      es6: true
   },
   extends: [
      'standard',
      'plugin:react/recommended'
   ],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   plugins: [
      'react',
      '@typescript-eslint',
      'react-hooks',
      // 'blueprint-html-components'
   ],
   rules: {
      'indent': ['warn', 3],
      'no-warning-comments': 'warn',
      'no-tabs': 'error',
      'eol-last': 'warn',
      'no-multiple-empty-lines': 'off',
      'no-unused-vars': 'warn',
      'padded-blocks': ['off', 'always', { allowSingleLineBlocks: true }],
      'react/prop-types': 'off',
      'no-trailing-spaces': 'warn',
      'no-unused-vars': 0,
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 0,
      'prefer-const': 'warn',
      'comma-dangle': 'warn',
      'object-curly-spacing': 'warn',
      'curly': 0,
      'no-debugger': 'warn',
      'array-bracket-spacing': 'warn'
   },
   
   // settings: {
   //    react: {
   //       version: 'detect'
   //    }
   // }
}

