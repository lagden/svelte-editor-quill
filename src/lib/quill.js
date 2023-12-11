import Quill from 'quill'

const Clipboard = Quill.import('modules/clipboard')
const Delta = Quill.import('delta')

class PlainClipboard extends Clipboard {
	convert(html) {
		if (typeof html === 'string') {
			this.container.innerHTML = html
		}
		const text = this.container.textContent
		this.container.innerHTML = ''
		return new Delta().insert(text)
	}
}

export function quill(node, options) {
	const toolbar = [
		[{header: 1}, {header: 2}],
		['bold', 'italic', 'underline'],
		[{list: 'ordered'}, {list: 'bullet'}],
		['link', 'image', 'video'],
		['code-block', 'clean'],
	]

	const {plainclipboard} = options
	if (plainclipboard) {
		Quill.register('modules/clipboard', PlainClipboard, true)
	}

	if (Reflect.has(options, 'plainclipboard')) {
		Reflect.deleteProperty(options, 'plainclipboard')
	}

	const q = new Quill(node, {
		modules: {
			toolbar,
		},
		placeholder: 'Digite algo...',
		...options,
	})

	const _container = node.querySelector('.ql-editor')

	const onTextChange = () => {
		const html = _container?.innerHTML ?? ''
		const customEvent = new CustomEvent('text-change', {
			detail: {
				html,
				text: q.getText(),
			},
		})
		node.dispatchEvent(customEvent)
	}

	q.on('text-change', onTextChange)

	return () => {
		q.off('text-change', onTextChange)
	}
}
