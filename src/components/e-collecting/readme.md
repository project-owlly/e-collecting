# e-collecting

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                      | Type                 | Default       |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ | -------------------- | ------------- |
| `mode`               | `mode`                 | Style the button with a dark or light theme?                                                     | `"dark" \| "light"`  | `'light'`     |
| `observerRootMargin` | `observer-root-margin` | IntersectionObserver rootMargin property.                                                        | `string`             | `'100px 0px'` |
| `observerThreshold`  | `observer-threshold`   | IntersectionObserver threshold property.                                                         | `number \| number[]` | `undefined`   |
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
