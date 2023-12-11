<script>
	import {onMount, onDestroy} from 'svelte'

	export let options = {}
	export let data = ''

	let className = ''
	export {className as class}

	options = {
		theme: 'snow',
		...options,
	}

	let node
	let destroy

	onMount(async () => {
		const {quill} = await import('./quill.js')
		destroy = quill(node, options)
	})

	onDestroy(() => {
		destroy && destroy()
	})
</script>

<div class={className}>
	<div bind:this={node} on:text-change>{@html data}</div>
</div>
