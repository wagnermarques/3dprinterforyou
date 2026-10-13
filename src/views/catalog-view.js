import { LitElement, html, css } from 'lit'
import { MODELS, CATEGORIES } from '../data/models.js'
import { navigate } from 'fzl-fund-appshell--lit'
import '../components/model-card.js'

export class CatalogView extends LitElement {
  static properties = {
    search: { type: String },
    selectedCategory: { type: String },
    selectedMaterial: { type: String },
    sortBy: { type: String },
  }

  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .hero {
      background: linear-gradient(135deg, #131d2a 0%, #0d131a 100%);
      color: #ffffff;
      border-radius: 24px;
      padding: 36px 32px;
      margin-bottom: 28px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0, 174, 66, 0.3);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
    }

    .hero::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 174, 66, 0.2) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 174, 66, 0.2);
      color: #00ae42;
      border: 1px solid rgba(0, 174, 66, 0.4);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .hero-title {
      font-size: 2.1rem;
      font-weight: 800;
      margin: 0 0 10px;
      line-height: 1.2;
    }

    .hero-title span {
      color: #00ae42;
    }

    .hero-subtitle {
      font-size: 1.05rem;
      color: #cbd5e1;
      max-width: 720px;
      margin: 0 0 20px;
      line-height: 1.5;
    }

    .hero-specs {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .spec-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.82rem;
      color: #94a3b8;
    }

    .spec-badge md-icon {
      color: #00ae42;
      --md-icon-size: 18px;
    }

    .spec-badge strong {
      color: #f1f5f9;
    }

    .custom-banner {
      background: var(--md-sys-color-surface-variant);
      border: 1px dashed var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px 20px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .custom-banner-text {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .custom-banner-icon {
      color: #00ae42;
      --md-icon-size: 32px;
    }

    .filter-section {
      margin-bottom: 24px;
    }

    .search-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .search-input-wrap {
      flex: 1;
      min-width: 260px;
      position: relative;
    }

    .search-input-wrap md-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--md-sys-color-on-surface-variant);
      --md-icon-size: 20px;
    }

    .search-input {
      width: 100%;
      padding: 12px 14px 12px 44px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.95rem;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: #00ae42;
    }

    .sort-select {
      padding: 10px 16px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.9rem;
      outline: none;
      cursor: pointer;
    }

    .chips-row {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }

    .chip-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }

    .chip-btn:hover {
      border-color: #00ae42;
    }

    .chip-btn.active {
      background: #00ae42;
      color: #ffffff;
      border-color: #00ae42;
    }

    .chip-btn md-icon {
      --md-icon-size: 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
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

    @media (max-width: 600px) {
      .hero-title {
        font-size: 1.6rem;
      }
      .hero {
        padding: 24px 20px;
      }
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `

  constructor() {
    super()
    this.search = ''
    this.selectedCategory = 'all'
    this.selectedMaterial = 'all'
    this.sortBy = 'popular'
  }

  _getFilteredModels() {
    let list = [...MODELS]

    if (this.selectedCategory !== 'all') {
      list = list.filter((m) => m.category === this.selectedCategory)
    }

    if (this.selectedMaterial !== 'all') {
      list = list.filter((m) => m.recommendedMaterial === this.selectedMaterial)
    }

    if (this.search.trim()) {
      const q = this.search.toLowerCase()
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }

    if (this.sortBy === 'time') {
      list.sort((a, b) => a.estimatedMinutes - b.estimatedMinutes)
    } else if (this.sortBy === 'weight') {
      list.sort((a, b) => a.filamentGrams - b.filamentGrams)
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return list
  }

  render() {
    const models = this._getFilteredModels()

    return html`
      <div class="hero">
        <div class="hero-badge">
          <md-icon style="--md-icon-size: 16px">precision_manufacturing</md-icon>
          Bambu Lab A1 3D Print Studio
        </div>
        <h1 class="hero-title">Escolha seu Modelo 3D Gratuito e <span>Peça a Impressão</span></h1>
        <p class="hero-subtitle">
          Catálogo curado de modelos 3D livres (MakerWorld & Printables) prontos para imprimir na nossa
          Bambu Lab A1 com alta velocidade (500 mm/s), acabamento texturizado e precisão de fábrica.
        </p>

        <div class="hero-specs">
          <div class="spec-badge">
            <md-icon>view_in_ar</md-icon>
            <div>Volume: <strong>256 × 256 × 256 mm</strong></div>
          </div>
          <div class="spec-badge">
            <md-icon>speed</md-icon>
            <div>Velocidade: <strong>Até 500 mm/s</strong></div>
          </div>
          <div class="spec-badge">
            <md-icon>palette</md-icon>
            <div>Multicolor: <strong>AMS Lite 4 Cores</strong></div>
          </div>
          <div class="spec-badge">
            <md-icon>layers</md-icon>
            <div>Filamentos: <strong>PLA, PETG, TPU</strong></div>
          </div>
        </div>
      </div>

      <div class="custom-banner">
        <div class="custom-banner-text">
          <md-icon class="custom-banner-icon">add_circle</md-icon>
          <div>
            <strong>Encontrou outro modelo no MakerWorld ou Printables?</strong>
            <div style="font-size: 0.85rem; color: var(--md-sys-color-on-surface-variant)">
              Você pode enviar o link direto de qualquer arquivo STL/3MF para avaliarmos e imprimirmos.
            </div>
          </div>
        </div>
        <md-filled-button
          style="--md-filled-button-container-color: #00ae42"
          @click=${() => navigate('pedido-personalizado')}
        >
          <md-icon slot="icon">link</md-icon>
          Solicitar Modelo Próprio
        </md-filled-button>
      </div>

      <div class="filter-section">
        <div class="search-row">
          <div class="search-input-wrap">
            <md-icon>search</md-icon>
            <input
              class="search-input"
              type="text"
              placeholder="Buscar modelos por nome, tag (ex: flexi, dragão, vaso, bambu)..."
              .value=${this.search}
              @input=${(e) => (this.search = e.target.value)}
            />
          </div>

          <select
            class="sort-select"
            .value=${this.sortBy}
            @change=${(e) => (this.sortBy = e.target.value)}
          >
            <option value="popular">Destaques & Populares</option>
            <option value="time">Mais Rápidos de Imprimir</option>
            <option value="weight">Mais Leves (Menos Filamento)</option>
          </select>
        </div>

        <div class="chips-row">
          ${CATEGORIES.map(
            (cat) => html`
              <button
                class="chip-btn ${this.selectedCategory === cat.id ? 'active' : ''}"
                @click=${() => (this.selectedCategory = cat.id)}
              >
                <md-icon>${cat.icon}</md-icon>
                ${cat.name}
              </button>
            `,
          )}
        </div>
      </div>

      ${models.length === 0
        ? html`
            <div class="empty-state">
              <md-icon>search_off</md-icon>
              <h3>Nenhum modelo encontrado</h3>
              <p>Tente ajustar a busca ou limpe os filtros para ver todos os modelos disponíveis.</p>
              <md-outlined-button
                @click=${() => {
                  this.search = ''
                  this.selectedCategory = 'all'
                }}
              >
                Limpar Filtros
              </md-outlined-button>
            </div>
          `
        : html`
            <div class="grid">
              ${models.map((model) => html`<model-card .model=${model}></model-card>`)}
            </div>
          `}
    `
  }
}

customElements.define('catalog-view', CatalogView)
