import {sveltekit} from '@sveltejs/kit/vite'
import {defineConfig} from 'vitest/config'

const preview = process?.env?.PREVIEW ?? false
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		coverage: {
			// prettier-ignore
			include: ['src/lib/**'],
			// prettier-ignore
			reporter: [
				'text',
				'text-summary',
				'lcovonly',
				'cobertura'
			],
		},
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			// prettier-ignore
			external: [
				'quill',
			],
		},
	},
}

if (preview) {
	Reflect.deleteProperty(config, 'build')
}

export default defineConfig(config)
