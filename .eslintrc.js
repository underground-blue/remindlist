module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"amd": true,
		"node": true
	},
	"globals": {
		"APIURL": true
	},
	"extends": [
		"eslint:recommended"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true
		},
		"sourceType": "module"
	},
	"rules": {
		// eslint https://eslint.org/docs/rules/
		// Possible Errors
		"for-direction": ["error"],
		"getter-return": ["error"],
		"no-console": ["warn"],

		// Best Practices
		"array-callback-return": ["error"],
		"array-callback-return": ["error"],
		"consistent-return": ["warn"],
		"curly": [
			"error",
			"multi-line"
		],
		"dot-location": [
			"error",
			"property"
		],
		"no-eq-null": ["error"],
		"no-eval": ["error"],
		"no-floating-decimal": ["error"],
		"no-implicit-globals": ["error"],
		"no-implied-eval": ["error"],
		"no-lone-blocks": ["error"],
		"no-loop-func": ["error"],
		"no-magic-numbers": [
			"error",
			{
				"ignore": [-1, 0, 1]
			}
		],
		"no-multi-str": ["error"],
		"no-new": ["error"],
		"no-new-func": ["error"],
		"no-new-wrappers": ["error"],
		"no-param-reassign": ["error"],
		"no-proto": ["error"],
		"no-return-assign": ["error"],
		"no-script-url": ["error"],
		"no-self-compare": ["error"],
		"no-sequences": ["error"],
		"no-throw-literal": ["error"],
		"no-unmodified-loop-condition": ["error"],
		"no-useless-concat": ["error"],
		"no-useless-return": ["warn"],
		"no-void": ["warn"],
		"no-with": ["error"],
		"prefer-promise-reject-errors": ["error"],
		"radix": ["error"],
		"vars-on-top": ["warn"],

		// Strict Mode
		"strict": ["error"],

		// Variables
		"no-use-before-define": ["error"],

		// Stylistic Issues
		"array-bracket-newline": ["error"],
		"block-spacing": ["error"],
		"brace-style": ["error"],
		"comma-dangle": ["error"],
		"comma-spacing": ["warn"],
		"computed-property-spacing": ["warn"],
		"func-call-spacing": ["error"],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"jsx-quotes": ["warn"],
		"key-spacing": [
			"warn",
			{
				"align": "colon"
			}
		],
		"linebreak-style": ["error"],
		"new-parens": ["error"],
		"no-array-constructor": ["warn"],
		// "no-inline-comments": ["error"], jsxコメントが引っかかる問題
		"no-lonely-if": ["warn"],
		"no-mixed-operators": ["error"],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 3
			}
		],
		"no-negated-condition": ["warn"],
		"no-new-object": ["error"],
		"no-trailing-spaces": ["error"],
		"no-unneeded-ternary": ["warn"],
		"no-whitespace-before-property": ["error"],
		"nonblock-statement-body-position": ["error"],
		"object-curly-spacing": ["error"],
		"object-property-newline": ["warn"],
		"one-var": [
			"error",
			"never"
		],
		"one-var-declaration-per-line": ["warn"],
		"operator-linebreak": [
			"error",
			"before"
		],
		"quotes": [
			"error",
			"single",
			{
				"allowTemplateLiterals": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": ["warn"],
		"space-before-blocks": ["error"],
		"space-before-function-paren": [
			"error",
			"never"
		],
		"space-in-parens": ["error"],
		"space-infix-ops": ["error"],
		"spaced-comment": ["error"],
		"unicode-bom": ["error"],
		"wrap-regex": ["error"],

		// ECMAScript 6
		"arrow-body-style": [
			"error",
			"as-needed"
		],
		"arrow-parens": ["error"],
		"arrow-spacing": ["error"],
		"generator-star-spacing": [
			"error",
			"after"
		],
		"no-duplicate-imports": ["error"],
		"no-useless-computed-key": ["error"],
		"no-useless-constructor": ["error"],
		"no-var": ["error"],
		"prefer-const": ["error"],
		"prefer-numeric-literals": ["error"],
		"prefer-template": ["error"],
		"rest-spread-spacing": ["error"],
		"template-curly-spacing": ["error"],
		"yield-star-spacing": ["error"]
	}
};
