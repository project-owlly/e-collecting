# e-collecting

Integrate easily Owlly to your websites and applications with the help of this e-collecting button.

## Table of contents

- [Installation](#installation)
  - [From a CDN](#from-a-cdn)
  - [From NPM](#from-npm)
- [Integration](#integration)
  - [Import](#import)
  - [Loader](#loader)
- [Usage](#usage)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [CSS Custom Properties](#css-custom-properties)

## Installation

The **e-collecting** button can be added to your application using following methods.

### From a CDN

```html
<script type="module" src="https://unpkg.com/@owlly/e-collecting@latest/dist/e-collecting/e-collecting.esm.js"></script>
```

### From NPM

```bash
npm install @owlly/e-collecting
```

## Integration

To integrate the button, you can either `import` or `load` it. Pick the method which works best for your application's bundler.

#### Import

```
import '@owlly/e-collecting';
```

#### Loader

```
import { defineCustomElements } from '@owlly/e-collecting/loader';
defineCustomElements();
```

## Usage

For a bare minimum usage, provide the **owlly-id** as parameter, the component takes care of the rest.

```html
<owlly-collect owlly-id="vrrYZoolx2XSy23RW63f"></owlly-collect>
```

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                      | Type                 | Default       |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ | -------------------- | ------------- |
| `mode`               | `mode`                 | Style the button with a dark or light theme?                                                     | `"dark" \| "light"`  | `'light'`     |
| `observerRootMargin` | `observer-root-margin` | IntersectionObserver rootMargin property.                                                        | `string`             | `'640px 0px'` |
| `observerThreshold`  | `observer-threshold`   | IntersectionObserver threshold property.                                                         | `number \| number[]` | `0.25`        |
| `owllyId`            | `owlly-id`             | The ID to be provided to Owlly in order to load the initiative and other content for navigation. | `string`             | `undefined`   |


## Slots

| Slot | Description                                                                                                            |
| ---- | ---------------------------------------------------------------------------------------------------------------------- |
|      | A custom text to be displayed in the button. Per default "sign" translated in de, fr, it or en according browser lang. |


## Shadow Parts

| Part       | Description                             |
| ---------- | --------------------------------------- |
| `"button"` | The part attribute to access the button |


## CSS Custom Properties

| Name                                | Description                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| `--owlly-button-border-radius`      | Button border radius @default 8px                                                                   |
| `--owlly-button-font-size`          | Button font size @default 1em                                                                       |
| `--owlly-button-font-weight`        | Button font weight @default 700                                                                     |
| `--owlly-button-google-font-family` | Button font family provided by Google. As for the content, lazy loaded. @default "Lato", sans-serif |
| `--owlly-button-height`             | Button height @default 40px                                                                         |
| `--owlly-button-line-height`        | Button line height @default 1.4em                                                                   |
| `--owlly-button-margin`             | Button margin @default 12px 10px                                                                    |
| `--owlly-button-padding`            | Button padding @default 8px 12px 8px 8px                                                            |
| `--owlly-button-width`              | Button width @default inherit                                                                       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
