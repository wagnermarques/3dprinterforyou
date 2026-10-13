import { LitElement, html, css } from 'lit'
import { PRINTER_SPECS, MATERIALS } from '../data/filaments.js'
import { navigate } from 'fzl-fund-appshell--lit'

export class PrinterInfoView extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 980px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .hero-card {
      background: linear-gradient(135deg, #131d2a 0%, #0d131a 100%);
      color: #ffffff;
      border-radius: 24px;
      padding: 36px 32px;
      margin-bottom: 28px;
      border: 1px solid rgba(0, 174, 66, 0.3);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
    }

    .printer-tag {
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

    h1 {
      font-size: 2.1rem;
      font-weight: 800;
      margin: 0 0 10px;
      color: #ffffff;
    }

    h1 span {
      color: #00ae42;
    }

    .subtitle {
      font-size: 1.05rem;
      color: #94a3b8;
      line-height: 1.5;
      margin: 0 0 24px;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .spec-card {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .spec-icon {
      color: #00ae42;
      --md-icon-size: 24px;
    }

    .spec-label {
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
    }

    .spec-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--md-sys-color-on-surface);
      margin: 32px 0 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .features-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .feature-box {
      background: var(--md-sys-color-surface-variant);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 20px;
    }

    .feature-title {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .feature-title md-icon {
      color: #00ae42;
    }

    .feature-desc {
      font-size: 0.88rem;
      color: var(--md-sys-color-on-surface-variant);
      line-height: 1.55;
      margin: 0;
    }

    .guide-box {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-left: 4px solid #00ae42;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
    }

    .guide-box h3 {
      margin: 0 0 8px;
      font-size: 1.1rem;
      color: var(--md-sys-color-on-surface);
    }

    .guide-box p {
      margin: 0 0 10px;
      font-size: 0.9rem;
      line-height: 1.55;
      color: var(--md-sys-color-on-surface-variant);
    }

    .guide-box ul {
      margin: 0;
      padding-left: 20px;
      font-size: 0.88rem;
      line-height: 1.6;
      color: var(--md-sys-color-on-surface-variant);
    }

    .cta-banner {
      background: linear-gradient(135deg, #00ae42, #007f31);
      color: #ffffff;
      border-radius: 20px;
      padding: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .cta-text h3 {
      font-size: 1.4rem;
      margin: 0 0 6px;
    }

    .cta-text p {
      margin: 0;
      opacity: 0.9;
      font-size: 0.95rem;
    }
  `

  render() {
    return html`
      <div class="hero-card">
        <div class="printer-tag">
          <md-icon style="--md-icon-size: 16px">precision_manufacturing</md-icon>
          Equipamento Oficial do Estúdio
        </div>
        <h1>Bambu Lab <span>A1</span> Print Studio</h1>
        <p class="subtitle">
          Nossa impressora 3D de alta performance combina velocidade inacreditável com calibração
          automática ativa, garantindo peças com precisão dimensional milimétrica e acabamento estético impecável.
        </p>

        <md-filled-button
          style="--md-filled-button-container-color: #00ae42"
          @click=${() => navigate('')}
        >
          <md-icon slot="icon">view_cozy</md-icon>
          Ver Modelos Prontos para Impressão
        </md-filled-button>
      </div>

      <h2>
        <md-icon style="color: #00ae42">tune</md-icon>
        Especificações Técnicas
      </h2>

      <div class="specs-grid">
        <div class="spec-card">
          <md-icon class="spec-icon">view_in_ar</md-icon>
          <div class="spec-label">Volume de Impressão</div>
          <div class="spec-value">${PRINTER_SPECS.buildVolume}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">speed</md-icon>
          <div class="spec-label">Velocidade Máxima</div>
          <div class="spec-value">${PRINTER_SPECS.maxSpeed}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">rocket_launch</md-icon>
          <div class="spec-label">Aceleração</div>
          <div class="spec-value">${PRINTER_SPECS.acceleration}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">palette</md-icon>
          <div class="spec-label">Multicolor</div>
          <div class="spec-value">${PRINTER_SPECS.multiColorSupport}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">architecture</md-icon>
          <div class="spec-label">Bico Hotend</div>
          <div class="spec-value">${PRINTER_SPECS.nozzleDiameter}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">grid_on</md-icon>
          <div class="spec-label">Mesa de Impressão</div>
          <div class="spec-value">${PRINTER_SPECS.maxBedTemp}</div>
        </div>
      </div>

      <h2>
        <md-icon style="color: #00ae42">star</md-icon>
        Diferenciais Tecnológicos da Bambu Lab A1
      </h2>

      <div class="features-list">
        <div class="feature-box">
          <div class="feature-title">
            <md-icon>sync</md-icon>
            Compensação Ativa de Fluxo
          </div>
          <p class="feature-desc">
            Um sensor de alta frequência mede a pressão do filamento no bico em tempo real,
            eliminando cantos abaulados e garantindo extrusão uniforme mesmo a 500 mm/s.
          </p>
        </div>

        <div class="feature-box">
          <div class="feature-title">
            <md-icon>volume_off</md-icon>
            Cancelamento de Ruído do Motor
          </div>
          <p class="feature-desc">
            Algoritmos inteligentes cancelam o ruído dos motores de passo, operando abaixo de 48 dB
            para impressões silenciosas em ambiente doméstico ou escritório.
          </p>
        </div>

        <div class="feature-box">
          <div class="feature-title">
            <md-icon>layers</md-icon>
            Chapa PEI Texturizada Ouro
          </div>
          <p class="feature-desc">
            A base aquecida texturizada confere à primeira camada uma textura fosca de padrão
            industrial que esconde linhas de impressão e permite que a peça se solte sozinha ao esfriar.
          </p>
        </div>
      </div>

      <h2>
        <md-icon style="color: #00ae42">tips_and_updates</md-icon>
        Dicas para Escolher Modelos Gratuitos
      </h2>

      <div class="guide-box">
        <h3>Como garantir que o modelo escolhido fique perfeito na A1:</h3>
        <ul>
          <li><strong>Prefira modelos "Print-in-Place" ou "Sem Suporte":</strong> Imprimem mais rápido, economizam filamento e têm acabamento superior.</li>
          <li><strong>Verifique a dimensão:</strong> A peça deve caber na área de 256 × 256 × 256 mm (ou podemos aplicar uma escala menor).</li>
          <li><strong>Escolha o filamento certo:</strong> Use <em>PLA</em> para miniaturas e decoração; use <em>PETG</em> para peças que suportam peso, calor ou ficam no sol; use <em>TPU</em> para peças flexíveis.</li>
        </ul>
      </div>

      <div class="cta-banner">
        <div class="cta-text">
          <h3>Pronto para encomendar?</h3>
          <p>Navegue pelo nosso catálogo ou envie seu link personalizado agora mesmo.</p>
        </div>
        <md-filled-button
          style="--md-filled-button-container-color: #ffffff; --md-filled-button-label-text-color: #007f31"
          @click=${() => navigate('')}
        >
          <md-icon slot="icon">shopping_cart</md-icon>
          Fazer um Pedido
        </md-filled-button>
      </div>
    `
  }
}

customElements.define('printer-info-view', PrinterInfoView)
