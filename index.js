import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'

createCustomElement('hello-world', {
    renderer,
    render () {
        return html`<p>Hello world</p>`
    }
})