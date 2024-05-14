# svelte-editor-quill

[![NPM version][npm-img]][npm]

<!-- [![Build Status][ci-img]][ci] -->

[npm-img]: https://img.shields.io/npm/v/@tadashi/svelte-editor-quill.svg
[npm]: https://www.npmjs.com/package/@tadashi/svelte-editor-quill

<!-- [ci-img]:          https://github.com/lagden/svelte-editor-quill/workflows/Node.js%20CI/badge.svg -->
<!-- [ci]:              https://github.com/lagden/svelte-editor-quill/actions?query=workflow%3A%22Node.js+CI%22 -->

---

Svelte component

## Install

```
$ npm i @tadashi/svelte-editor-quill
```

## Usage

Example via [REPL](https://svelte.dev/repl/839ad6a3e1e24b149099c704e18df476?version=4.2.8).

### options

> Type: object  
> Default: {theme: 'snow'}

See the more `options` [here](https://quilljs.com/docs/configuration/#options).

### options.plainclipboard

> Type: boolean  
> Default: false

Accept only paste plain text.

### Sample

```html
<script>
  import {Editor} from '@tadashi/svelte-editor-quill'

  const options = {
    theme: 'snow',
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
  on:text-change="{onTextChange}"
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
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

MIT © [Thiago Lagden](https://github.com/lagden)
