# svelte-editor-quill

[![NPM version][npm-img]][npm]

<!-- [![Build Status][ci-img]][ci] -->

[npm-img]: https://img.shields.io/npm/v/@tadashi/svelte-editor-quill.svg
[npm]: https://www.npmjs.com/package/@tadashi/svelte-editor-quill

<!-- [ci-img]: https://github.com/lagden/svelte-editor-quill/workflows/Node.js%20CI/badge.svg -->
<!-- [ci]:     https://github.com/lagden/svelte-editor-quill/actions?query=workflow%3A%22Node.js+CI%22 -->

---

Svelte component

## Install

Svelte 5

```
$ npm i @tadashi/svelte-editor-quill@4
```

Svelte Legacy

```
$ npm i @tadashi/svelte-editor-quill@3
```

## Usage

Example via [StackBlitz](https://stackblitz.com/edit/vitejs-vite-ncteky?file=src%2FApp.svelte).

### options

> Type: object\
> Default: {theme: 'snow'}

See the more `options` [here](https://quilljs.com/docs/configuration/#options).

### options.plainclipboard

> Type: boolean\
> Default: false

Accept only paste plain text.

### E.g.

```html
<script>
	import { Editor } from '@tadashi/svelte-editor-quill'

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
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

MIT © [Thiago Lagden](https://github.com/lagden)
