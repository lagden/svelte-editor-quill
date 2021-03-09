<script>
	import {quill} from './quill'

	export let options = {}
	export let data = ''

	let className = ''
	export {className as class}

	options = {
		theme: 'bubble',
		...options
	}
</script>

<div class="{className}">
	<div
		use:quill={options}
		on:text-change
	>{@html data}</div>
</div>
