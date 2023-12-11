import {setTimeout} from 'timers/promises'
import {test, expect, beforeAll} from 'vitest'
import {Editor} from '$lib/index.js'

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
	// const component = new Editor({target})
	new Editor({target})

	await setTimeout(3000)

	// const div = doc_query('div.ql-editor')
	expect(target).toBeDefined()
})
