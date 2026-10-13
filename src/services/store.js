import { notificationService } from 'fzl-fund-appshell--lit'

const STORAGE_KEY = 'siteprint3d:orders'

export const ORDER_STATUSES = [
  { id: 'queued', label: 'Na Fila', icon: 'schedule', color: '#f59e0b', desc: 'Aguardando na fila de impressão' },
  { id: 'slicing', label: 'Fatiando (Bambu Studio)', icon: 'layers', color: '#0284c7', desc: 'Gerando arquivo .gcode / .3mf' },
  { id: 'printing', label: 'Imprimindo no Bambu A1', icon: 'precision_manufacturing', color: '#16a34a', desc: 'Trabalho ativo na impressora' },
  { id: 'ready', label: 'Pronto para Retirada', icon: 'verified', color: '#059669', desc: 'Peça finalizada e inspecionada' },
  { id: 'completed', label: 'Concluído', icon: 'done_all', color: '#64748b', desc: 'Entregue ao cliente' },
  { id: 'cancelled', label: 'Cancelado', icon: 'cancel', color: '#ef4444', desc: 'Pedido cancelado' },
]

export function getStatusMeta(statusId) {
  return ORDER_STATUSES.find((s) => s.id === statusId) || ORDER_STATUSES[0]
}

const memoryStorage = new Map()

function getStorageItem(key) {
  if (typeof localStorage !== 'undefined') return localStorage.getItem(key)
  return memoryStorage.get(key) || null
}

function setStorageItem(key, value) {
  if (typeof localStorage !== 'undefined') localStorage.setItem(key, value)
  memoryStorage.set(key, value)
}

function loadOrders() {
  try {
    const raw = getStorageItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (err) {
    console.warn('[SitePrint3D] Falha ao ler pedidos do localStorage:', err)
  }

  // Pedidos iniciais de demonstração para a família testar
  const initial = [
    {
      id: 'PED-1024',
      createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
      modelId: 'flexi-rex',
      modelTitle: 'Flexi Rex Articulado',
      sourceUrl: 'https://makerworld.com/en/models/14293',
      material: 'PLA',
      colorName: 'Bambu Green',
      colorHex: '#00AE42',
      quality: '0.20mm — Padrão Bambu',
      infill: '15% Giroide',
      scale: 100,
      quantity: 1,
      estimatedMinutes: 42,
      filamentGrams: 32,
      customerName: 'Lucas (Filho)',
      customerPhone: '(11) 98765-4321',
      deliveryType: 'Retirada no estúdio',
      notes: 'Testar adesão da primeira camada com a chapa PEI',
      status: 'printing',
    },
    {
      id: 'PED-1025',
      createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      modelId: 'bambu-poop-chute',
      modelTitle: 'Bambu A1 — Coletor de Purga (Poop Chute)',
      sourceUrl: 'https://makerworld.com/en/models/48592',
      material: 'PETG',
      colorName: 'Charcoal Black',
      colorHex: '#1E1E1E',
      quality: '0.28mm — Funcional',
      infill: '25% Grade',
      scale: 100,
      quantity: 1,
      estimatedMinutes: 110,
      filamentGrams: 85,
      customerName: 'Wagner Marques',
      customerPhone: '(11) 99999-8888',
      deliveryType: 'Uso na impressora própria',
      notes: 'Imprimir em PETG para suportar o calor do descarte do bico',
      status: 'queued',
    },
  ]
  saveOrders(initial)
  return initial
}

function saveOrders(orders) {
  try {
    setStorageItem(STORAGE_KEY, JSON.stringify(orders))
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('siteprint-orders-updated', { detail: { count: orders.length } }))
    }
  } catch (err) {
    console.error('[SitePrint3D] Falha ao salvar pedidos:', err)
  }
}

export const orderStore = {
  list() {
    return loadOrders()
  },

  get(id) {
    return loadOrders().find((o) => o.id === id) || null
  },

  create(data) {
    const orders = loadOrders()
    const nextNum = orders.length > 0 ? Math.max(...orders.map((o) => parseInt(o.id.replace(/\D/g, '') || '1000', 10))) + 1 : 1001
    const newOrder = {
      id: `PED-${nextNum}`,
      createdAt: new Date().toISOString(),
      status: 'queued',
      ...data,
    }

    orders.unshift(newOrder)
    saveOrders(orders)

    // Adiciona ao centro de notificações do Appshell
    try {
      notificationService.add({
        title: `Novo pedido ${newOrder.id}`,
        body: `${newOrder.customerName} pediu ${newOrder.modelTitle} (${newOrder.colorName})`,
        href: '#/pedidos',
      })
    } catch (_) {}

    return newOrder
  },

  updateStatus(id, newStatus) {
    const orders = loadOrders()
    const order = orders.find((o) => o.id === id)
    if (!order) return null

    order.status = newStatus
    saveOrders(orders)

    const meta = getStatusMeta(newStatus)
    try {
      notificationService.add({
        title: `Status atualizado: ${order.id}`,
        body: `${order.modelTitle} agora está em: ${meta.label}`,
        href: '#/pedidos',
      })
    } catch (_) {}

    return order
  },

  delete(id) {
    const orders = loadOrders().filter((o) => o.id !== id)
    saveOrders(orders)
  },

  generateWhatsAppText(order) {
    return (
      `*Solicitação de Impressão 3D — Bambu Lab A1*\n\n` +
      `*Pedido:* ${order.id}\n` +
      `*Modelo:* ${order.modelTitle}\n` +
      `*Material:* ${order.material}\n` +
      `*Cor Escolhida:* ${order.colorName}\n` +
      `*Qualidade:* ${order.quality}\n` +
      `*Infill:* ${order.infill || '15%'}\n` +
      `*Escala:* ${order.scale || 100}%\n` +
      `*Quantidade:* ${order.quantity || 1}\n` +
      `*Tempo Estimado:* ~${order.estimatedMinutes || 45} min\n` +
      `*Peso Estimado:* ~${order.filamentGrams || 30}g\n` +
      (order.sourceUrl ? `*Link do Modelo:* ${order.sourceUrl}\n` : '') +
      `\n*Cliente:* ${order.customerName}\n` +
      `*Contato:* ${order.customerPhone}\n` +
      `*Entrega/Retirada:* ${order.deliveryType}\n` +
      (order.notes ? `*Observações:* ${order.notes}\n` : '') +
      `\n_Enviado pelo SitePrint 3D (Bambu Lab A1)_`
    )
  },

  generateWhatsAppUrl(order) {
    const text = this.generateWhatsAppText(order)
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
  },
}
