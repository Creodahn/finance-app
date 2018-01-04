module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: [
    'ember'
  ],
  "extends": [
    "eslint:recommended",
    'plugin:ember/recommended'
  ],
  overrides: [
    // node files
    {
      files: [
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    },
    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ],
  "globals": {
    "-Promise": true,
    "$": true,
    "CKEDITOR": true,
    "document": true,
    "DS": true,
    "Ember": true,
    "jsPDF": true,
    "L": true,
    "module": true,
    "moment": true,
    "window": true,
    "process": true,
    "require": true,
    "__dirname": true,
    "visit": true,
    "andThen": true,
    "currentPath": true,
    "currentURL": true,
    "fillIn": true,
    "click": true,
    "pauseTest": true,
    "resumeTest": true,
    "Chart": true,
    "filestack": true,
    Mirage: true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "brace-style": "error",
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "comma-style": "error",
    "dot-notation": [
      "error", {
        "allowKeywords": true
      }
    ],
    "indent": [
      "error",
      2, {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3
        }
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": false,
        "overrides": {
          "case": {
            "after": true
          },
          "const": {
            "after": true
          },
          "else": {
            "after": true
          },
          "from": {
            "after": true
          },
          "import": {
            "after": true
          },
          "return": {
            "after": true
          }
        }
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_layers"
        ],
        "allowAfterThis": true
      }
    ],
    "no-unneeded-ternary": "error",
    "no-useless-call": "error",
    "no-useless-escape": "error",
    "no-var": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-shorthand": [
      "error",
      "properties", {
        "avoidQuotes": true
      }
    ],
    "one-var": [
      "error",
      "always"
    ],
    "prefer-const": [
      "error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-template": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "spaced-comment": [
      "error",
      "always", {
        "block": {
          "balanced": true
        }
      }
    ],
    "vars-on-top": "error",
    "yoda": "error"
  }
};
