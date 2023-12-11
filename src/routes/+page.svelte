<script>
	import {Editor} from '$lib/index.js'

	const options = {
		theme: 'snow',
		plainclipboard: true,
	}

	function onTextChange(event) {
		console.debug(event.detail)
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://cdn.quilljs.com" crossorigin />
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css" crossorigin />
</svelte:head>

<Editor {options} on:text-change={onTextChange} data="Apenas um show" />
