import Quill from 'quill'

export function quill(node, options) {
	const toolbar = [
		[{header: 1}, {header: 2}],
		['bold', 'italic', 'underline'],
		[{list: 'ordered'}, {list: 'bullet'}],
		['link', 'image', 'video'],
		['code-block', 'clean']
	]

	const q = new Quill(node, {
		modules: {
			toolbar
		},
		placeholder: 'Digite algo...',
		...options
	})

	const _container = node.querySelector('.ql-editor')

	const onTextChange = () => {
		const html = _container?.innerHTML ?? ''
		const customEvent = new CustomEvent('text-change', {
			detail: {
				html,
				text: q.getText()
			}
		})
		node.dispatchEvent(customEvent)
	}

	q.on('text-change', onTextChange)

	return {
		destroy() {
			q.off('text-change', onTextChange)
		}
	}
}
