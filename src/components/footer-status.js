import { LitElement, html, css } from 'lit'

export class FooterStatus extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00ae42;
      box-shadow: 0 0 6px rgba(0, 174, 66, 0.8);
    }
  `

  render() {
    return html`
      <span class="dot"></span>
      <span>Bambu Lab A1 (256³ mm)</span>
    `
  }
}

customElements.define('footer-status', FooterStatus)
