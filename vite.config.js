import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

const preview = process?.env?.PREVIEW ?? false
const config = {
	plugins: [sveltekit()],
	resolve: process.env.VITEST
		? {
			conditions: ['browser'],
		}
		: undefined,
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		coverage: {
			include: ['src/lib/**'],
			// deno-fmt-ignore
			reporter: [
				"text",
				"text-summary",
				"lcovonly",
				"cobertura",
			],
		},
	},
	build: {
		rollupOptions: {
			external: ['quill'],
		},
	},
}

if (preview) {
	Reflect.deleteProperty(config, 'build')
}

export default defineConfig(config)
