import { LitElement, html, css } from 'lit'
import { navigate } from 'fzl-fund-appshell--lit'

export class ModelCard extends LitElement {
  static properties = {
    model: { type: Object },
  }

  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      border-color: #00ae42;
    }

    .image-container {
      position: relative;
      height: 180px;
      background: linear-gradient(135deg, #1e293b, #0f172a);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .model-icon {
      font-size: 72px;
      --md-icon-size: 72px;
      color: rgba(255, 255, 255, 0.75);
      transition: transform 0.3s ease;
    }

    .card:hover .model-icon {
      transform: scale(1.1) rotate(5deg);
      color: #00ae42;
    }

    .badges-overlay {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
    }

    .source-badge {
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(6px);
      color: #ffffff;
      padding: 3px 8px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .free-badge {
      background: rgba(0, 174, 66, 0.9);
      color: #ffffff;
      padding: 3px 8px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .title {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 0 0 6px;
      color: var(--md-sys-color-on-surface);
      line-height: 1.3;
    }

    .desc {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
      line-height: 1.45;
      margin: 0 0 12px;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 16px;
      padding: 10px;
      background: var(--md-sys-color-surface-variant);
      border-radius: 10px;
    }

    .spec-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .spec-item md-icon {
      --md-icon-size: 16px;
      color: #00ae42;
    }

    .spec-text strong {
      color: var(--md-sys-color-on-surface);
    }

    .actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .order-btn {
      flex: 1;
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
    }

    .source-btn {
      flex-shrink: 0;
    }
  `

  render() {
    if (!this.model) return null

    const m = this.model
    return html`
      <div class="card">
        <div class="image-container">
          <div class="badges-overlay">
            <span class="source-badge">
              <md-icon style="--md-icon-size: 14px">cloud_download</md-icon>
              ${m.source}
            </span>
            <span class="free-badge">Grátis</span>
          </div>
          <md-icon class="model-icon">${m.previewIcon || 'category'}</md-icon>
        </div>

        <div class="content">
          <h3 class="title">${m.title}</h3>
          <p class="desc">${m.shortDescription}</p>

          <div class="specs-grid">
            <div class="spec-item" title="Tempo estimado na Bambu Lab A1">
              <md-icon>timer</md-icon>
              <div class="spec-text"><strong>~${m.estimatedMinutes}m</strong> na A1</div>
            </div>
            <div class="spec-item" title="Peso de filamento aproximado">
              <md-icon>scale</md-icon>
              <div class="spec-text"><strong>~${m.filamentGrams}g</strong> ${m.recommendedMaterial}</div>
            </div>
            <div class="spec-item" title="Dimensões (L × C × A)">
              <md-icon>straighten</md-icon>
              <div class="spec-text">${m.dimensions}</div>
            </div>
            <div class="spec-item" title="Suportes necessários">
              <md-icon>${m.supports ? 'construction' : 'check_circle'}</md-icon>
              <div class="spec-text">${m.supports ? 'Com suportes' : 'Sem suportes'}</div>
            </div>
          </div>

          <div class="actions">
            <md-filled-button
              class="order-btn"
              @click=${() => navigate(`modelo/${m.id}`)}
            >
              <md-icon slot="icon">shopping_bag</md-icon>
              Configurar & Pedir
            </md-filled-button>

            <md-icon-button
              class="source-btn"
              title="Abrir no ${m.source} (download do STL/3MF)"
              href=${m.sourceUrl}
              target="_blank"
            >
              <md-icon>open_in_new</md-icon>
            </md-icon-button>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('model-card', ModelCard)
