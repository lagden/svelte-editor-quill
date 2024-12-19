<script>
	import { Editor } from '$lib/index.js'

	const options = {
		theme: 'snow',
		plainclipboard: true,
	}

	let html = $state('<h1>Go!!</h1><p><strong>Initial</strong> value.</p>')
	let text = $state('')

	const onTextChange = (markup, plaintext) => {
		html = markup
		text = plaintext
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/quill@2.0.3/dist/quill.snow.css"
		crossorigin
	/>
</svelte:head>

<Editor
	{options}
	{onTextChange}
>{@html $state.snapshot(html)}</Editor>

<div>
	<h3>plaintext</h3>
	<pre>{text}</pre>
</div>

<div>
	<h3>markup</h3>
	<pre>{html}</pre>
</div>
