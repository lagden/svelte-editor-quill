<script>
// prettier-ignore
let {
	options = {},
	data = '',
	class: class_attr,
} = $$restProps

function init(node) {
	let off
	import('./quill.js').then(({quill}) => {
		off = quill(node, data, {
			theme: 'snow',
			...options,
		})
	})
	return {
		destroy() {
			off && off()
		},
	}
}
</script>

<div {...class_attr ? {class: class_attr} : {}}>
	<div
		use:init
		on:text-change
	></div>
</div>
