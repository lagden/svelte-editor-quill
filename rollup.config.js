import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import pkg from './package.json'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase())

export default {
	input: 'src/index.js',
	output: [
		{
			file: `dist/index.js`,
			format: 'es'
		},
		{
			file: `dist/index.umd.js`,
			format:'umd',
			name
		}
	],
	plugins: [
		resolve(),
		svelte()
	]
}
