<script>
import {Editor} from '$lib/index.js'

const options = {
	theme: 'snow',
	plainclipboard: true,
}

let data = 'Apenas <b>um</b> show'
let text = ''
let html = ''

const onTextChange = event => {
	;({text, html} = event?.detail ?? {})
	data = html
}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/quill@2.0.2/dist/quill.snow.css"
		crossorigin
	/>
</svelte:head>

<Editor
	{options}
	{data}
	on:text-change={onTextChange}
/>

<div>
	<h3>Text</h3>
	<pre>{text}</pre>
</div>

<div>
	<h3>HTML</h3>
	<pre>{@html html}</pre>
</div>

<div>
	<h3>Data</h3>
	<pre>{@html data}</pre>
</div>
