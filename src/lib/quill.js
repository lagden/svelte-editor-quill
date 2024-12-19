import { default as Quill, Delta } from 'quill'

export function quill(node, cb, options) {
	const { plainclipboard = false, ...restOptions } = options

	const toolbar = [
		[{ 'header': [1, 2, 3, false] }],
		['bold', 'italic', 'underline'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }],
		['link', 'image', 'video'],
		['code-block', 'clean'],
	]

	const q = new Quill(node, {
		modules: {
			toolbar,
		},
		formats: ['header', 'bold', 'italic', 'underline', 'list', 'code-block'],
		placeholder: 'Enter the text...',
		...restOptions,
	})

	if (plainclipboard === true) {
		q.clipboard.addMatcher(Node.ELEMENT_NODE, (n) => {
			const text = n.textContent
			return new Delta().insert(text)
		})
	}

	const onTextChange = () => {
		cb?.(q.getSemanticHTML(), q.getText())
	}

	q.on('text-change', onTextChange)

	// Init
	onTextChange()

	return () => {
		q.off('text-change', onTextChange)
	}
}
