# svelte-editor-quill

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/svelte-editor-quill.svg
[npm]:             https://www.npmjs.com/package/@tadashi/svelte-editor-quill
[ci-img]:          https://github.com/lagden/svelte-editor-quill/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/svelte-editor-quill/actions?query=workflow%3A%22Node.js+CI%22

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-editor-quill
```


## Usage

You can see an example here: https://svelte.dev/repl/839ad6a3e1e24b149099c704e18df476?version=3.32.3

```html
<svelte:head>
  <link rel="stylesheet" href="//cdn.quilljs.com/1.3.7/quill.bubble.css">
</svelte:head>

<script>
  import {Editor} from '@tadashi/svelte-editor-quill'

  const options = {}

  function onTextChange(event) {
    console.debug(event.detail)
  }
</script>

<Editor {options} on:text-change={onTextChange} />
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
