import { setTimeout } from 'timers/promises'
import { beforeAll, expect, test } from 'vitest'
import { mount } from 'svelte'
import { Editor } from '$lib/index.js'

beforeAll(() => {
	document.body.innerHTML = '<main id="xxx"></main>'
})

function doc_query(selector) {
	const node = document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

test('Editor', async () => {
	const target = doc_query('main#xxx')
	const props = $state({
		options: {
			theme: 'snow',
			plainclipboard: true,
		},
	})
	const app = mount(Editor, { target, props })

	await setTimeout(3000)

	expect(app).toMatchSnapshot()

	// const div = doc_query('div.ql-editor')
	// expect(target).toBeDefined()
})
