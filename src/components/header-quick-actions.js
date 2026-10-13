import { LitElement, html, css } from 'lit'
import { orderStore } from '../services/store.js'
import { navigate } from 'fzl-fund-appshell--lit'

export class HeaderQuickActions extends LitElement {
  static properties = {
    count: { type: Number },
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .queue-btn {
      position: relative;
    }

    .badge {
      position: absolute;
      top: 4px;
      right: 4px;
      background: #00ae42;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 700;
      min-width: 18px;
      height: 18px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      pointer-events: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `

  constructor() {
    super()
    this.count = 0
    this._onUpdate = () => this._loadCount()
  }

  connectedCallback() {
    super.connectedCallback()
    this._loadCount()
    window.addEventListener('siteprint-orders-updated', this._onUpdate)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('siteprint-orders-updated', this._onUpdate)
  }

  _loadCount() {
    const orders = orderStore.list()
    this.count = orders.filter((o) => ['queued', 'slicing', 'printing'].includes(o.status)).length
  }

  render() {
    return html`
      <div class="queue-btn">
        <md-icon-button
          title="Ver Fila de Impressão (${this.count} em andamento)"
          @click=${() => navigate('pedidos')}
        >
          <md-icon>receipt_long</md-icon>
        </md-icon-button>
        ${this.count > 0 ? html`<span class="badge">${this.count}</span>` : ''}
      </div>

      <md-icon-button
        title="Solicitar Modelo Próprio"
        @click=${() => navigate('pedido-personalizado')}
      >
        <md-icon>add_circle</md-icon>
      </md-icon-button>
    `
  }
}

customElements.define('header-quick-actions', HeaderQuickActions)
