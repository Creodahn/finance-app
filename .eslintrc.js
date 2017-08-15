module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true,
    "phantomjs": true,
    "qunit": true
  },
  "extends": "eslint:recommended",
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
    "filestack": true
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
