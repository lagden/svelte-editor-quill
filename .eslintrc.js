'use strict'

const ignoreWarnings = new Set(['a11y-no-onchange', 'a11y-label-has-associated-control'])

module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	env: {
		es2020: true,
		browser: true
	},
	plugins: ['html', 'svelte3'],
	extends: ['xo', 'plugin:unicorn/recommended'],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'no-console': 0,
		'no-debugger': 0,
		'no-unused-expressions': [
			'error',
			{allowShortCircuit: true, allowTernary: true}
		],
		camelcase: 0,
		'capitalized-comments': 0,
		'spaced-comment': 0,
		'padding-line-between-statements': 0,
		'no-undef-init': 0,
		'unicorn/filename-case': 0,
		'unicorn/prevent-abbreviations': 0,
		'unicorn/no-reduce': 0,
		'unicorn/no-array-reduce': 0,
		'unicorn/prefer-includes': 0,
		'unicorn/no-useless-undefined': 0,
		'unicorn/no-zero-fractions': 0,
		'unicorn/prefer-query-selector': 0,
		'unicorn/import-style': [
			'error',
			{
				styles: {
					util: false,
					path: {
						named: true
					}
				}
			}
		],
		// 'unicorn/no-abusive-eslint-disable': 0,
		// Bug do svelte lint
		'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 2, maxEOF: 0}],
		// Bug no ctx.body Koa
		'require-atomic-updates': 0
	},
	settings: {
		'svelte3/ignore-warnings': w => {
			return ignoreWarnings.has(w && w.code)
		},
		'svelte3/ignore-styles': attributes => attributes.postcss || attributes.lang
	}
}
