import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import pkg from './package.json'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase())

export default {
	external: ['quill'],
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'es',
			globals: {
				quill: 'Quill'
			}
		},
		{
			name,
			file: 'dist/index.umd.js',
			format: 'umd',
			globals: {
				quill: 'Quill'
			}
		}
	],
	plugins: [
		svelte({emitCss: false}),
		resolve({browser: true})
	]
}
