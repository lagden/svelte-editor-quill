<script>
	import {quill} from './quill'

	export let options = {}
	export let data = ''

	let className = ''
	export {className as class}
	className = [...new Set(
		['_tadashi_svelte_editor_quill', ...className.split(' ')]
	)].join(' ')

	options = {
		theme: 'bubble',
		...options
	}
</script>

<div
	use:quill={options}
	on:text-change
	{...(className ? {class: className} : {})}
>{@html data}</div>

<style type="text/css">
	:root {
		--tadashi_svelte_editor_quill_border: 1px solid gray;
		--tadashi_svelte_editor_quill_height: auto;
	}

	._tadashi_svelte_editor_quill {
		border: var(--tadashi_svelte_editor_quill_border);
		height: var(--tadashi_svelte_editor_quill_height);
	}
</style>
