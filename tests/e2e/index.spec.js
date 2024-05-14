import {setTimeout} from 'node:timers/promises'
import {
	// expect,
	test,
} from '@playwright/test'

test('general', async ({page}) => {
	await page.goto('/')

	await setTimeout(3000)

	await page.screenshot({
		path: './tests/e2e/__snapshots__/index.spec.js.png',
	})
})
