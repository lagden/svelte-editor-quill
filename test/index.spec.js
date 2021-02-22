import {cleanup, render} from '@testing-library/svelte'
import {Editor} from '../src'

describe('Editor Quill', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		const {container} = render(Editor)
		expect(container).toMatchSnapshot()
	})
})
