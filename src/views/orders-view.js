import { LitElement, html, css } from 'lit'
import { orderStore, ORDER_STATUSES, getStatusMeta } from '../services/store.js'
import { navigate } from 'fzl-fund-appshell--lit'

export class OrdersView extends LitElement {
  static properties = {
    orders: { type: Array },
    filterTab: { type: String },
  }

  static styles = css`
    :host {
      display: block;
      max-width: 980px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 16px;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 800;
      margin: 0;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .tabs-row {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--md-sys-color-outline);
      padding-bottom: 12px;
      overflow-x: auto;
    }

    .tab-btn {
      padding: 8px 16px;
      border-radius: 999px;
      border: 1px solid transparent;
      background: none;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }

    .tab-btn.active {
      background: var(--md-sys-color-surface-variant);
      color: #00ae42;
      border-color: #00ae42;
    }

    .order-card {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 18px;
      padding: 20px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: border-color 0.2s;
    }

    .order-card:hover {
      border-color: #00ae42;
    }

    .order-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .order-id-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .order-id {
      font-weight: 800;
      font-size: 1.15rem;
      color: var(--md-sys-color-on-surface);
    }

    .order-date {
      font-size: 0.8rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
    }

    .status-badge md-icon {
      --md-icon-size: 16px;
    }

    .stepper {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 16px 0;
      padding: 12px;
      background: var(--md-sys-color-surface-variant);
      border-radius: 12px;
      overflow-x: auto;
    }

    .step-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface-variant);
      white-space: nowrap;
    }

    .step-item.active {
      color: #00ae42;
    }

    .step-item.passed {
      color: #64748b;
    }

    .step-arrow {
      color: var(--md-sys-color-outline);
    }

    .order-body {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }

    .model-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 6px;
    }

    .order-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 0.82rem;
      margin-bottom: 8px;
    }

    .order-tag {
      background: var(--md-sys-color-surface-variant);
      padding: 4px 10px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .color-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .customer-info {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
      background: var(--md-sys-color-surface-variant);
      padding: 12px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .customer-info strong {
      color: var(--md-sys-color-on-surface);
    }

    .order-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 14px;
      border-top: 1px solid var(--md-sys-color-outline);
    }

    .action-group-right {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
    }

    .advance-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: var(--md-sys-color-on-surface-variant);
    }

    .empty-state md-icon {
      --md-icon-size: 64px;
      color: #94a3b8;
      margin-bottom: 12px;
    }

    @media (max-width: 650px) {
      .order-body {
        grid-template-columns: 1fr;
      }
    }
  `

  constructor() {
    super()
    this.orders = []
    this.filterTab = 'all'
    this._onOrdersUpdated = () => this._load()
  }

  connectedCallback() {
    super.connectedCallback()
    this._load()
    window.addEventListener('siteprint-orders-updated', this._onOrdersUpdated)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('siteprint-orders-updated', this._onOrdersUpdated)
  }

  _load() {
    this.orders = orderStore.list()
  }

  _advanceStatus(order) {
    const progression = ['queued', 'slicing', 'printing', 'ready', 'completed']
    const currentIndex = progression.indexOf(order.status)
    if (currentIndex >= 0 && currentIndex < progression.length - 1) {
      const nextStatus = progression[currentIndex + 1]
      orderStore.updateStatus(order.id, nextStatus)
      this._load()
    }
  }

  _delete(id) {
    if (confirm('Tem certeza que deseja remover este pedido da fila?')) {
      orderStore.delete(id)
      this._load()
    }
  }

  _getFilteredOrders() {
    if (this.filterTab === 'active') {
      return this.orders.filter((o) => ['queued', 'slicing', 'printing'].includes(o.status))
    }
    if (this.filterTab === 'ready') {
      return this.orders.filter((o) => ['ready', 'completed'].includes(o.status))
    }
    return this.orders
  }

  render() {
    const list = this._getFilteredOrders()
    const activeCount = this.orders.filter((o) => ['queued', 'slicing', 'printing'].includes(o.status)).length

    return html`
      <div class="header-row">
        <div>
          <h1>
            <md-icon style="color: #00ae42">receipt_long</md-icon>
            Fila de Impressão Bambu Lab A1
          </h1>
          <div style="font-size: 0.9rem; color: var(--md-sys-color-on-surface-variant)">
            Acompanhe em tempo real o status de produção, fatiamento e impressão das peças.
          </div>
        </div>

        <md-filled-button
          style="--md-filled-button-container-color: #00ae42"
          @click=${() => navigate('')}
        >
          <md-icon slot="icon">add</md-icon>
          Novo Pedido
        </md-filled-button>
      </div>

      <div class="tabs-row">
        <button
          class="tab-btn ${this.filterTab === 'all' ? 'active' : ''}"
          @click=${() => (this.filterTab = 'all')}
        >
          Todos (${this.orders.length})
        </button>
        <button
          class="tab-btn ${this.filterTab === 'active' ? 'active' : ''}"
          @click=${() => (this.filterTab = 'active')}
        >
          Em Produção (${activeCount})
        </button>
        <button
          class="tab-btn ${this.filterTab === 'ready' ? 'active' : ''}"
          @click=${() => (this.filterTab = 'ready')}
        >
          Prontos & Concluídos (${this.orders.length - activeCount})
        </button>
      </div>

      ${list.length === 0
        ? html`
            <div class="empty-state">
              <md-icon>inbox</md-icon>
              <h3>Nenhum pedido nesta aba</h3>
              <p>Escolha um modelo gratuito do catálogo e solicite sua primeira impressão 3D!</p>
              <md-filled-button
                style="--md-filled-button-container-color: #00ae42"
                @click=${() => navigate('')}
              >
                Explorar Catálogo
              </md-filled-button>
            </div>
          `
        : list.map((order) => {
            const meta = getStatusMeta(order.status)
            return html`
              <div class="order-card">
                <div class="order-top">
                  <div class="order-id-group">
                    <span class="order-id">${order.id}</span>
                    <span class="order-date">
                      ${new Date(order.createdAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  <span
                    class="status-badge"
                    style="background: ${meta.color}22; color: ${meta.color}; border: 1px solid ${meta.color}66"
                  >
                    <md-icon>${meta.icon}</md-icon>
                    ${meta.label}
                  </span>
                </div>

                <!-- Stepper Visual -->
                <div class="stepper">
                  <div class="step-item ${order.status === 'queued' ? 'active' : 'passed'}">
                    <md-icon style="--md-icon-size: 16px">schedule</md-icon>
                    1. Na Fila
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${order.status === 'slicing' ? 'active' : ['printing', 'ready', 'completed'].includes(order.status) ? 'passed' : ''}">
                    <md-icon style="--md-icon-size: 16px">layers</md-icon>
                    2. Fatiando (Bambu Studio)
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${order.status === 'printing' ? 'active' : ['ready', 'completed'].includes(order.status) ? 'passed' : ''}">
                    <md-icon style="--md-icon-size: 16px">precision_manufacturing</md-icon>
                    3. Imprimindo na A1
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${order.status === 'ready' ? 'active' : order.status === 'completed' ? 'passed' : ''}">
                    <md-icon style="--md-icon-size: 16px">verified</md-icon>
                    4. Pronto
                  </div>
                </div>

                <div class="order-body">
                  <div>
                    <div class="model-title">${order.modelTitle}</div>
                    ${order.customizationText
                      ? html`<div style="font-size: 0.9rem; color: #e65100; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                          <md-icon style="--md-icon-size: 18px; color: #ff9800">favorite</md-icon>
                          Personalização: ${order.customizationText}
                        </div>`
                      : ''}
                    <div class="order-tags">
                      <span class="order-tag">
                        <strong>Material:</strong> ${order.material}
                      </span>
                      <span class="order-tag">
                        <span class="color-dot" style="background: ${order.colorHex}"></span>
                        ${order.colorName}
                      </span>
                      <span class="order-tag">
                        <strong>Escala:</strong> ${order.scale}%
                      </span>
                      <span class="order-tag">
                        <strong>Qtd:</strong> ${order.quantity}x
                      </span>
                      <span class="order-tag">
                        <strong>Tempo:</strong> ~${order.estimatedMinutes} min
                      </span>
                      <span class="order-tag">
                        <strong>Peso:</strong> ~${order.filamentGrams}g
                      </span>
                    </div>

                    ${order.notes
                      ? html`<div style="font-size: 0.85rem; color: var(--md-sys-color-on-surface-variant)">
                          <strong>Observações:</strong> ${order.notes}
                        </div>`
                      : ''}
                  </div>

                  <div class="customer-info">
                    <div><strong>Cliente:</strong> ${order.customerName}</div>
                    <div><strong>Contato:</strong> ${order.customerPhone}</div>
                    <div><strong>Entrega:</strong> ${order.deliveryType}</div>
                  </div>
                </div>

                <div class="order-actions">
                  <md-filled-button
                    class="whatsapp-btn"
                    @click=${() => window.open(orderStore.generateWhatsAppUrl(order), '_blank')}
                  >
                    <md-icon slot="icon">chat</md-icon>
                    Compartilhar / Notificar WhatsApp
                  </md-filled-button>

                  <div class="action-group-right">
                    ${order.status !== 'completed' && order.status !== 'cancelled'
                      ? html`
                          <md-filled-button
                            class="advance-btn"
                            @click=${() => this._advanceStatus(order)}
                          >
                            <md-icon slot="icon">fast_forward</md-icon>
                            Avançar Etapa
                          </md-filled-button>
                        `
                      : ''}

                    <md-icon-button
                      title="Excluir pedido"
                      @click=${() => this._delete(order.id)}
                    >
                      <md-icon>delete</md-icon>
                    </md-icon-button>
                  </div>
                </div>
              </div>
            `
          })}
    `
  }
}

customElements.define('orders-view', OrdersView)
