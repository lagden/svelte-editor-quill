import { setTimeout } from 'timers/promises'
import { beforeAll, expect, test } from 'vitest'
import { mount } from 'svelte'
import { Editor } from '$lib/index.js'

beforeAll(() => {
	globalThis.document.body.innerHTML = '<main id="test"></main>'
})

function doc_query(selector) {
	const node = globalThis.document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

test('Editor', async () => {
	const target = doc_query('main#test')
	const props = $state({
		options: {
			theme: 'snow',
			plainclipboard: true,
		},
	})
	const app = mount(Editor, { target, props })

	await setTimeout(3000)

	expect(app).toMatchSnapshot()
})
