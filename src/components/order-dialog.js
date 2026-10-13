import { LitElement, html, css } from 'lit'
import { orderStore } from '../services/store.js'
import { navigate } from 'fzl-fund-appshell--lit'

export class OrderDialog extends LitElement {
  static properties = {
    open: { type: Boolean },
    model: { type: Object },
    config: { type: Object },
    customerName: { type: String },
    customerPhone: { type: String },
    deliveryType: { type: String },
    notes: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      box-sizing: border-box;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .modal {
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 20px;
      max-width: 520px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
      padding: 24px;
      transform: translateY(20px);
      transition: transform 0.25s ease;
    }

    .backdrop.open .modal {
      transform: translateY(0);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 1.3rem;
      margin: 0;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .summary-card {
      background: var(--md-sys-color-surface-variant);
      border-radius: 12px;
      padding: 14px;
      margin-bottom: 20px;
      border: 1px solid var(--md-sys-color-outline);
    }

    .summary-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .summary-specs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 0.8rem;
    }

    .pill {
      background: var(--md-sys-color-surface);
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
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

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.95rem;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus, select:focus, textarea:focus {
      border-color: #00ae42;
      box-shadow: 0 0 0 2px rgba(0, 174, 66, 0.2);
    }

    .actions-footer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 24px;
    }

    .buttons-row {
      display: flex;
      gap: 10px;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
      width: 100%;
    }

    .confirm-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
      flex: 1;
    }

    .cancel-btn {
      flex: 1;
    }

    .help-text {
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
      margin-top: 4px;
    }
  `

  constructor() {
    super()
    this.open = false
    this.model = null
    this.config = {}
    this.customerName = ''
    this.customerPhone = ''
    this.deliveryType = 'Retirada no estúdio'
    this.notes = ''
  }

  close() {
    this.open = false
    this.dispatchEvent(new CustomEvent('close'))
  }

  _gatherOrderData() {
    const m = this.model || {}
    const c = this.config || {}
    return {
      modelId: m.id || 'personalizado',
      modelTitle: m.title || 'Modelo 3D',
      sourceUrl: m.sourceUrl || '',
      material: c.material || 'PLA',
      colorName: c.color?.name || 'Bambu Green',
      colorHex: c.color?.hex || '#00AE42',
      customizationText: c.customizationText || '',
      quality: c.quality?.name || '0.20mm',
      infill: c.infill || '15%',
      scale: c.scale || 100,
      quantity: c.quantity || 1,
      estimatedMinutes: Math.round((m.estimatedMinutes || 45) * (c.quality?.multiplier || 1) * (c.scale ? (c.scale / 100) ** 2 : 1)),
      filamentGrams: Math.round((m.filamentGrams || 30) * (c.scale ? (c.scale / 100) ** 3 : 1) * (c.quantity || 1)),
      customerName: this.customerName || 'Cliente',
      customerPhone: this.customerPhone || 'Não informado',
      deliveryType: this.deliveryType,
      notes: this.notes || c.notes || '',
    }
  }

  _submitLocal() {
    if (!this.customerName.trim()) {
      alert('Por favor informe seu nome.')
      return
    }
    const orderData = this._gatherOrderData()
    const order = orderStore.create(orderData)
    this.close()
    navigate('pedidos')
  }

  _submitWhatsApp() {
    if (!this.customerName.trim()) {
      alert('Por favor informe seu nome.')
      return
    }
    const orderData = this._gatherOrderData()
    const order = orderStore.create(orderData)
    const url = orderStore.generateWhatsAppUrl(order)
    this.close()
    window.open(url, '_blank')
    navigate('pedidos')
  }

  render() {
    const m = this.model || {}
    const c = this.config || {}

    return html`
      <div class="backdrop ${this.open ? 'open' : ''}" @click=${(e) => e.target.classList.contains('backdrop') && this.close()}>
        <div class="modal">
          <div class="header">
            <h2>
              <md-icon style="color: #00ae42">shopping_bag</md-icon>
              Confirmar Pedido de Impressão
            </h2>
            <md-icon-button @click=${this.close}>
              <md-icon>close</md-icon>
            </md-icon-button>
          </div>

          <div class="summary-card">
            <div class="summary-title">
              <span>${m.title || 'Modelo 3D'}</span>
            </div>
            <div class="summary-specs">
              <span class="pill">
                <strong>Material:</strong> ${c.material || 'PLA'}
              </span>
              <span class="pill">
                <span class="color-dot" style="background: ${c.color?.hex || '#00AE42'}"></span>
                ${c.color?.name || 'Bambu Green'}
              </span>
              <span class="pill">
                <strong>Qualidade:</strong> ${c.quality?.id || '0.20'}mm
              </span>
              <span class="pill">
                <strong>Escala:</strong> ${c.scale || 100}%
              </span>
              <span class="pill">
                <strong>Qtd:</strong> ${c.quantity || 1}x
              </span>
              ${c.customizationText
                ? html`
                    <span class="pill" style="border-color: #ff9800; background: rgba(255, 152, 0, 0.12)">
                      <strong style="color: #ff9800">Personalização:</strong> ${c.customizationText}
                    </span>
                  `
                : ''}
            </div>
          </div>

          <div class="form-group">
            <label>Seu Nome *</label>
            <input
              type="text"
              placeholder="Ex: João da Silva"
              .value=${this.customerName}
              @input=${(e) => (this.customerName = e.target.value)}
              required
            />
          </div>

          <div class="form-group">
            <label>Seu WhatsApp / Telefone *</label>
            <input
              type="tel"
              placeholder="Ex: (11) 98765-4321"
              .value=${this.customerPhone}
              @input=${(e) => (this.customerPhone = e.target.value)}
              required
            />
            <div class="help-text">Usado para avisar assim que sua peça sair da impressora!</div>
          </div>

          <div class="form-group">
            <label>Opção de Retirada ou Entrega</label>
            <select
              .value=${this.deliveryType}
              @change=${(e) => (this.deliveryType = e.target.value)}
            >
              <option value="Retirada no estúdio">Retirada no estúdio / local</option>
              <option value="Combinar entrega">Combinar entrega / envio</option>
            </select>
          </div>

          <div class="form-group">
            <label>Observações Adicionais (Opcional)</label>
            <textarea
              rows="2"
              placeholder="Ex: se tiver duas cores no AMS Lite, cor secundária preta..."
              .value=${this.notes}
              @input=${(e) => (this.notes = e.target.value)}
            ></textarea>
          </div>

          <div class="actions-footer">
            <md-filled-button class="whatsapp-btn" @click=${this._submitWhatsApp}>
              <md-icon slot="icon">chat</md-icon>
              Pedir & Enviar via WhatsApp Direto
            </md-filled-button>

            <div class="buttons-row">
              <md-outlined-button class="cancel-btn" @click=${this.close}>
                Voltar
              </md-outlined-button>

              <md-filled-button class="confirm-btn" @click=${this._submitLocal}>
                <md-icon slot="icon">check</md-icon>
                Adicionar à Fila
              </md-filled-button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('order-dialog', OrderDialog)
