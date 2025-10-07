import { LitElement, html, css } from "../../Ezo/Web/node_modules/lit/index.js";

export class List extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("list-v1", List);

declare global {
  interface HTMLElementTagNameMap {
    "list-v1": List;
  }
}
