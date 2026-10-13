import { html } from 'lit'
import 'fzl-fund-appshell--lit/styles/theme.css'
import './styles/siteprint-theme.css'
import { createAppShell, pattern } from 'fzl-fund-appshell--lit'

// Registro dos web components das telas e utilitários
import './views/catalog-view.js'
import './views/model-detail-view.js'
import './views/orders-view.js'
import './views/custom-order-view.js'
import './views/printer-info-view.js'
import './components/header-quick-actions.js'
import './components/footer-status.js'

createAppShell({
  mount: '#app',
  home: () => html`<catalog-view></catalog-view>`,
  routes: [
    {
      name: 'modelo-detalhe',
      match: pattern('modelo/:id'),
      title: 'Configurar Modelo 3D',
      render: ({ id }) => html`<model-detail-view .modelId=${id}></model-detail-view>`,
    },
    {
      name: 'pedidos',
      match: pattern('pedidos'),
      title: 'Fila de Impressão Bambu A1',
      render: () => html`<orders-view></orders-view>`,
    },
    {
      name: 'pedido-personalizado',
      match: pattern('pedido-personalizado'),
      title: 'Solicitar Modelo Próprio',
      render: () => html`<custom-order-view></custom-order-view>`,
    },
    {
      name: 'impressora',
      match: pattern('impressora'),
      title: 'Bambu Lab A1 — Estúdio',
      render: () => html`<printer-info-view></printer-info-view>`,
    },
  ],
  drawer: {
    sections: [
      {
        id: 'estudio-3d',
        label: 'Estúdio 3D',
        items: [
          { label: 'Catálogo de Modelos', icon: 'view_cozy', href: '#/' },
          { label: 'Fila de Impressão & Pedidos', icon: 'receipt_long', href: '#/pedidos' },
          { label: 'Solicitar Modelo Próprio', icon: 'add_circle', href: '#/pedido-personalizado' },
          { label: 'Sobre a Bambu Lab A1', icon: 'precision_manufacturing', href: '#/impressora' },
        ],
      },
    ],
    shellSections: {
      conta: true,
      config: true,
      compartilhar: true,
    },
  },
  headerActions: () => html`<header-quick-actions></header-quick-actions>`,
  footerItems: () => html`<footer-status></footer-status>`,
  share: {
    enabled: true,
    title: 'SitePrint 3D — Estúdio Bambu Lab A1',
    text: 'Escolha modelos 3D gratuitos e encomende impressões feitas na Bambu Lab A1!',
  },
})
