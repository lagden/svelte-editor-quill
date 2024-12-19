<script>
import {Editor} from '$lib/index.js'

const options = {
	theme: 'snow',
	plainclipboard: true,
}

let text = ''
let html = 'Apenas <b>um</b> show'

const onTextChange = event => {
	const data = event?.detail ?? {}
	text = data.text
	html = data.html
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
	data={html}
	on:text-change={onTextChange}
/>

<div>
	<h3>plaintext</h3>
	<pre>{text}</pre>
</div>

<div>
	<h3>markup</h3>
	<pre>{html}</pre>
</div>
