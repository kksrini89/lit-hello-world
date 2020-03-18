import { LitElement, html } from 'lit-element';

class HelloWorldComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>Hello World!!!</div>
    `;
  }
}
customElements.define('lit-hello-world', HelloWorldComponent);
