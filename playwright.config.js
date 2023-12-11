/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'env PREVIEW=1 npm run build && npm run preview',
		port: 4173,
	},
	testDir: 'tests/e2e',
	testMatch: /(.+\.)(test|spec)\.[jt]s/,
	outputDir: 'tests/e2e/__snapshots__',
}

export default config
