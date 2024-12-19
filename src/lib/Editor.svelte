<script>
	let {
		options = {},
		onTextChange: cb = () => {},
		class: class_attr,
		children,
	} = $props()

	function init(node) {
		let off
		import('./quill.js').then(({ quill }) => {
			off = quill(node, cb, {
				theme: 'snow',
				...options,
			})
		})
		return {
			destroy() {
				off?.()
			},
		}
	}
</script>

<div {...class_attr ? { class: class_attr } : {}}>
	<div use:init>
		{@render children?.()}
	</div>
</div>
