module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "import"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "type",
          "object",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "max-classes-per-file": "off",
    "no-useless-constructor": "off",
    "class-methods-use-this": "off",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "eqeqeq": "off",
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "no-console": "off",
    "max-len": [
      "warn",
      180,
      2,
      {
        "ignorePattern": "^(import|export)",
        "ignoreUrls": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "enum",
        "format": [
          "UPPER_CASE",
          "PascalCase"
        ]
      },
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^[A-Z]",
          "match": true
        }
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.mts",
        "*.cts",
        "*.tsx"
      ],
      "rules": {}
    }
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}