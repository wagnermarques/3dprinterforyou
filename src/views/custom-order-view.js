import { LitElement, html, css } from 'lit'
import { MATERIALS, COLORS } from '../data/filaments.js'
import { orderStore } from '../services/store.js'
import { navigate } from 'fzl-fund-appshell--lit'

export class CustomOrderView extends LitElement {
  static properties = {
    title: { type: String },
    url: { type: String },
    material: { type: String },
    color: { type: Object },
    scale: { type: Number },
    quantity: { type: Number },
    notes: { type: String },
    customerName: { type: String },
    customerPhone: { type: String },
    deliveryType: { type: String },
  }

  static styles = css`
    :host {
      display: block;
      max-width: 760px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .card {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 800;
      margin: 0 0 8px;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .subtitle {
      color: var(--md-sys-color-on-surface-variant);
      margin: 0 0 24px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-size: 0.88rem;
      font-weight: 700;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 12px;
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

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .colors-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .color-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface);
      transition: all 0.2s;
    }

    .color-chip:hover {
      border-color: #00ae42;
    }

    .color-chip.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.12);
      font-weight: 700;
    }

    .color-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 28px;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
    }

    .submit-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
    }

    @media (max-width: 600px) {
      .card {
        padding: 20px;
      }
      .row {
        grid-template-columns: 1fr;
      }
    }
  `

  constructor() {
    super()
    this.title = ''
    this.url = ''
    this.material = 'PLA'
    this.color = COLORS[0]
    this.scale = 100
    this.quantity = 1
    this.notes = ''
    this.customerName = ''
    this.customerPhone = ''
    this.deliveryType = 'Retirada no estúdio'
  }

  _submit(openWhatsApp = false) {
    if (!this.title.trim()) {
      alert('Por favor digite o nome ou descrição do modelo.')
      return
    }
    if (!this.customerName.trim()) {
      alert('Por favor digite o seu nome.')
      return
    }

    const order = orderStore.create({
      modelId: 'custom',
      modelTitle: this.title.trim(),
      sourceUrl: this.url.trim(),
      material: this.material,
      colorName: this.color.name,
      colorHex: this.color.hex,
      quality: '0.20mm — Padrão Bambu',
      infill: '15% Giroide',
      scale: this.scale,
      quantity: this.quantity,
      estimatedMinutes: 60,
      filamentGrams: 50,
      customerName: this.customerName.trim(),
      customerPhone: this.customerPhone.trim() || 'Não informado',
      deliveryType: this.deliveryType,
      notes: this.notes.trim(),
    })

    if (openWhatsApp) {
      window.open(orderStore.generateWhatsAppUrl(order), '_blank')
    }
    navigate('pedidos')
  }

  render() {
    return html`
      <div class="card">
        <h1>
          <md-icon style="color: #00ae42">add_circle</md-icon>
          Solicitar Impressão de Modelo Próprio
        </h1>
        <p class="subtitle">
          Encontrou um modelo no <strong>MakerWorld</strong>, <strong>Printables</strong>,
          <strong>Thingiverse</strong> ou tem seu próprio arquivo 3D? Envie o link ou especificações
          para avaliarmos e colocarmos na fila da Bambu Lab A1.
        </p>

        <div class="form-group">
          <label>Nome do Modelo / Peça Desejada *</label>
          <input
            type="text"
            placeholder="Ex: Suporte para headset gamer modelo Astro A50"
            .value=${this.title}
            @input=${(e) => (this.title = e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label>Link do Modelo (MakerWorld, Printables, Thingiverse, Google Drive...) *</label>
          <input
            type="url"
            placeholder="https://makerworld.com/en/models/..."
            .value=${this.url}
            @input=${(e) => (this.url = e.target.value)}
          />
        </div>

        <div class="row">
          <div class="form-group">
            <label>Material Preferido</label>
            <select
              .value=${this.material}
              @change=${(e) => (this.material = e.target.value)}
            >
              ${MATERIALS.map((m) => html`<option value=${m.id}>${m.name}</option>`)}
            </select>
          </div>

          <div class="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              min="1"
              max="20"
              .value=${String(this.quantity)}
              @input=${(e) => (this.quantity = Number(e.target.value) || 1)}
            />
          </div>
        </div>

        <div class="form-group">
          <label>Cor do Filamento (${this.color.name})</label>
          <div class="colors-grid">
            ${COLORS.map(
              (c) => html`
                <div
                  class="color-chip ${this.color.id === c.id ? 'active' : ''}"
                  @click=${() => (this.color = c)}
                >
                  <span class="color-dot" style="background: ${c.hex}"></span>
                  ${c.name}
                </div>
              `,
            )}
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Seu Nome *</label>
            <input
              type="text"
              placeholder="Ex: Wagner Marques"
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
          </div>
        </div>

        <div class="form-group">
          <label>Forma de Entrega</label>
          <select
            .value=${this.deliveryType}
            @change=${(e) => (this.deliveryType = e.target.value)}
          >
            <option value="Retirada no estúdio">Retirada no estúdio / local</option>
            <option value="Combinar envio">Combinar envio</option>
          </select>
        </div>

        <div class="form-group">
          <label>Observações ou Instruções Especiais</label>
          <textarea
            rows="3"
            placeholder="Ex: escala de 80%, infill mais denso para suportar peso, etc."
            .value=${this.notes}
            @input=${(e) => (this.notes = e.target.value)}
          ></textarea>
        </div>

        <div class="actions">
          <md-filled-button
            class="whatsapp-btn"
            @click=${() => this._submit(true)}
          >
            <md-icon slot="icon">chat</md-icon>
            Enviar Solicitação Direto via WhatsApp
          </md-filled-button>

          <md-filled-button
            class="submit-btn"
            @click=${() => this._submit(false)}
          >
            <md-icon slot="icon">check</md-icon>
            Adicionar à Fila de Impressão
          </md-filled-button>
        </div>
      </div>
    `
  }
}

customElements.define('custom-order-view', CustomOrderView)
