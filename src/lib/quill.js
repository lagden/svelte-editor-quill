import Quill from 'quill'

const Delta = Quill.import('delta')

export function quill(node, data, options) {
	const {plainclipboard = false, ...restOptions} = options

	const toolbar = [
		[{header: 1}, {header: 2}],
		['bold', 'italic', 'underline'],
		[{list: 'ordered'}, {list: 'bullet'}],
		['link', 'image', 'video'],
		['code-block', 'clean'],
	]

	// const history = {
	// 	delay: 2000,
	// 	maxStack: 500,
	// 	userOnly: true,
	// }

	const q = new Quill(node, {
		modules: {
			toolbar,
			// history,
		},
		placeholder: 'Digite algo...',
		...restOptions,
	})

	if (plainclipboard === true) {
		q.clipboard.addMatcher(Node.ELEMENT_NODE, n => {
			const text = n.textContent
			return new Delta().insert(text)
		})
	}

	const onTextChange = () => {
		const customEvent = new CustomEvent('text-change', {
			detail: {
				html: q.getSemanticHTML(),
				text: q.getText(),
			},
		})
		node.dispatchEvent(customEvent)
	}

	q.on('text-change', onTextChange)

	// Init
	q.clipboard.dangerouslyPasteHTML(data, 'api')

	return () => {
		q.off('text-change', onTextChange)
	}
}
