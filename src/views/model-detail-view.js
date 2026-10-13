import { LitElement, html, css } from 'lit'
import { MODELS } from '../data/models.js'
import { MATERIALS, COLORS, QUALITIES, INFILLS } from '../data/filaments.js'
import { navigate } from 'fzl-fund-appshell--lit'
import '../components/order-dialog.js'

export class ModelDetailView extends LitElement {
  static properties = {
    modelId: { type: String },
    selectedMaterial: { type: String },
    selectedColor: { type: Object },
    selectedQuality: { type: Object },
    selectedInfill: { type: String },
    scale: { type: Number },
    quantity: { type: Number },
    customizationText: { type: String },
    notes: { type: String },
    dialogOpen: { type: Boolean },
  }

  static styles = css`
    :host {
      display: block;
      max-width: 1040px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .back-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      cursor: pointer;
      color: var(--md-sys-color-primary);
      font-weight: 600;
      font-size: 0.95rem;
    }

    .layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 32px;
    }

    .visual-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .preview-box {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      border-radius: 20px;
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      position: relative;
      border: 1px solid var(--md-sys-color-outline);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .preview-box md-icon.main-icon {
      font-size: 110px;
      --md-icon-size: 110px;
      color: #00ae42;
      filter: drop-shadow(0 4px 16px rgba(0, 174, 66, 0.4));
    }

    .bed-badge {
      position: absolute;
      bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      color: #cbd5e1;
    }

    .bed-badge md-icon {
      color: #00ae42;
      --md-icon-size: 16px;
    }

    .source-box {
      background: var(--md-sys-color-surface-variant);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .source-info {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .source-info strong {
      color: var(--md-sys-color-on-surface);
      display: block;
      font-size: 0.95rem;
      margin-bottom: 2px;
    }

    .info-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0 0 8px;
      color: var(--md-sys-color-on-surface);
      line-height: 1.25;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--md-sys-color-on-surface);
      margin: 0;
    }

    .personalization-card {
      background: rgba(255, 152, 0, 0.08);
      border: 2px dashed #ff9800;
      border-radius: 16px;
      padding: 16px;
      margin-top: 6px;
    }

    .personalization-card .section-title {
      margin-top: 0;
      color: #e65100;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
      margin: 16px 0 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .materials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .material-card {
      border: 2px solid var(--md-sys-color-outline);
      border-radius: 12px;
      padding: 10px;
      background: var(--md-sys-color-surface);
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }

    .material-card:hover {
      border-color: #00ae42;
    }

    .material-card.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.08);
    }

    .material-name {
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 2px;
    }

    .material-badge {
      font-size: 0.7rem;
      color: #00ae42;
      font-weight: 600;
    }

    .colors-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .color-swatch {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 2px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--md-sys-color-on-surface);
      transition: all 0.2s;
    }

    .color-swatch:hover {
      border-color: #00ae42;
    }

    .color-swatch.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.1);
      font-weight: 700;
    }

    .color-circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .options-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .field-label {
      font-size: 0.82rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    select, input {
      width: 100%;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.9rem;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
    }

    select:focus, input:focus {
      border-color: #00ae42;
    }

    .summary-bar {
      background: var(--md-sys-color-surface-variant);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    .summary-metrics {
      display: flex;
      gap: 20px;
    }

    .metric-item {
      display: flex;
      flex-direction: column;
    }

    .metric-label {
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .metric-val {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--md-sys-color-on-surface);
    }

    .metric-val span {
      color: #00ae42;
    }

    .order-cta-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
      padding: 0 12px;
    }

    @media (max-width: 800px) {
      .layout {
        grid-template-columns: 1fr;
      }
      .materials-grid {
        grid-template-columns: 1fr;
      }
    }
  `

  constructor() {
    super()
    this.selectedMaterial = 'PLA'
    this.selectedColor = COLORS[0]
    this.selectedQuality = QUALITIES[1]
    this.selectedInfill = '15%'
    this.scale = 100
    this.quantity = 1
    this.customizationText = ''
    this.notes = ''
    this.dialogOpen = false
  }

  _getModel() {
    return MODELS.find((m) => m.id === this.modelId) || MODELS[0]
  }

  _getCalculatedTime(baseMinutes) {
    const qualityFactor = this.selectedQuality?.multiplier || 1
    const scaleFactor = (this.scale / 100) ** 2
    return Math.round(baseMinutes * qualityFactor * scaleFactor * this.quantity)
  }

  _getCalculatedGrams(baseGrams) {
    const scaleFactor = (this.scale / 100) ** 3
    const infillFactor = INFILLS.find((i) => i.id === this.selectedInfill)?.factor || 1
    return Math.round(baseGrams * scaleFactor * infillFactor * this.quantity)
  }

  render() {
    const m = this._getModel()
    const estTime = this._getCalculatedTime(m.estimatedMinutes)
    const estGrams = this._getCalculatedGrams(m.filamentGrams)

    return html`
      <div class="back-nav" @click=${() => navigate('')}>
        <md-icon>arrow_back</md-icon>
        Voltar ao Catálogo de Modelos
      </div>

      <div class="layout">
        <!-- Visual & Source -->
        <div class="visual-col">
          <div class="preview-box">
            <md-icon class="main-icon">${m.previewIcon || 'category'}</md-icon>
            <div class="bed-badge">
              <md-icon>check_circle</md-icon>
              Compatível c/ Bambu Lab A1 (Mesa 256×256 mm)
            </div>
          </div>

          <div class="source-box">
            <div class="source-info">
              <strong>${m.source}: ${m.designer}</strong>
              Licença: ${m.license}
            </div>
            <md-outlined-button href=${m.sourceUrl} target="_blank">
              <md-icon slot="icon">open_in_new</md-icon>
              Ver Arquivo 3D
            </md-outlined-button>
          </div>
        </div>

        <!-- Details & Configurator -->
        <div class="info-col">
          <div>
            <h1>${m.title}</h1>
            <p class="description">${m.description}</p>
          </div>

          ${m.emotionalPrompt
            ? html`
                <div class="personalization-card">
                  <div class="section-title">
                    <md-icon style="color: #ff9800">favorite</md-icon>
                    Personalização Afetiva & Especial
                  </div>
                  <div class="field-label">${m.emotionalPrompt}</div>
                  <input
                    type="text"
                    placeholder="Digite sua personalização aqui..."
                    .value=${this.customizationText}
                    @input=${(e) => (this.customizationText = e.target.value)}
                  />
                </div>
              `
            : ''}

          <!-- 1. Material -->
          <div>
            <div class="section-title">
              <md-icon style="color: #00ae42">layers</md-icon>
              1. Escolha o Material
            </div>
            <div class="materials-grid">
              ${MATERIALS.map(
                (mat) => html`
                  <div
                    class="material-card ${this.selectedMaterial === mat.id ? 'active' : ''}"
                    @click=${() => (this.selectedMaterial = mat.id)}
                  >
                    <div class="material-name">${mat.id}</div>
                    <div class="material-badge">${mat.badge}</div>
                  </div>
                `,
              )}
            </div>
          </div>

          <!-- 2. Cor do Filamento -->
          <div>
            <div class="section-title">
              <md-icon style="color: #00ae42">palette</md-icon>
              2. Escolha a Cor do Filamento (${this.selectedColor.name})
            </div>
            <div class="colors-grid">
              ${COLORS.map(
                (color) => html`
                  <div
                    class="color-swatch ${this.selectedColor.id === color.id ? 'active' : ''}"
                    @click=${() => (this.selectedColor = color)}
                  >
                    <span class="color-circle" style="background: ${color.hex}"></span>
                    ${color.name}
                  </div>
                `,
              )}
            </div>
          </div>

          <!-- 3. Parâmetros de Impressão -->
          <div class="options-row">
            <div>
              <div class="field-label">Qualidade / Altura de Camada</div>
              <select
                .value=${this.selectedQuality.id}
                @change=${(e) => {
                  this.selectedQuality = QUALITIES.find((q) => q.id === e.target.value) || QUALITIES[1]
                }}
              >
                ${QUALITIES.map((q) => html`<option value=${q.id}>${q.name}</option>`)}
              </select>
            </div>

            <div>
              <div class="field-label">Preenchimento (Infill)</div>
              <select
                .value=${this.selectedInfill}
                @change=${(e) => (this.selectedInfill = e.target.value)}
              >
                ${INFILLS.map((inf) => html`<option value=${inf.id}>${inf.name}</option>`)}
              </select>
            </div>
          </div>

          <!-- 4. Escala e Quantidade -->
          <div class="options-row">
            <div>
              <div class="field-label">Escala (% do tamanho original)</div>
              <select
                .value=${String(this.scale)}
                @change=${(e) => (this.scale = Number(e.target.value))}
              >
                <option value="75">75% (Compacto)</option>
                <option value="100">100% (Original - ${m.dimensions})</option>
                <option value="125">125% (Maior)</option>
                <option value="150">150% (Grande)</option>
              </select>
            </div>

            <div>
              <div class="field-label">Quantidade de Peças</div>
              <input
                type="number"
                min="1"
                max="20"
                .value=${String(this.quantity)}
                @input=${(e) => (this.quantity = Math.max(1, Number(e.target.value) || 1))}
              />
            </div>
          </div>

          <!-- Summary & Order CTA -->
          <div class="summary-bar">
            <div class="summary-metrics">
              <div class="metric-item">
                <span class="metric-label">Tempo na Bambu A1</span>
                <span class="metric-val">~<span>${estTime}</span> min</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Peso Estimado</span>
                <span class="metric-val">~<span>${estGrams}</span>g</span>
              </div>
            </div>

            <md-filled-button class="order-cta-btn" @click=${() => (this.dialogOpen = true)}>
              <md-icon slot="icon">shopping_bag</md-icon>
              Pedir Esta Impressão
            </md-filled-button>
          </div>
        </div>
      </div>

      <!-- Order Dialog Modal -->
      <order-dialog
        ?open=${this.dialogOpen}
        .model=${m}
        .config=${{
          material: this.selectedMaterial,
          color: this.selectedColor,
          quality: this.selectedQuality,
          infill: this.selectedInfill,
          scale: this.scale,
          quantity: this.quantity,
          customizationText: this.customizationText,
          notes: this.notes,
        }}
        @close=${() => (this.dialogOpen = false)}
      ></order-dialog>
    `
  }
}

customElements.define('model-detail-view', ModelDetailView)
