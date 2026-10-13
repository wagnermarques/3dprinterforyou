import { describe, it, expect, beforeEach } from 'vitest'
import { orderStore, getStatusMeta, ORDER_STATUSES } from './store.js'
import { MODELS } from '../data/models.js'
import { MATERIALS, COLORS } from '../data/filaments.js'

describe('SitePrint3D Domain & Store', () => {

  it('contains curated 3D models with valid fields', () => {
    expect(MODELS.length).toBeGreaterThan(5)
    for (const model of MODELS) {
      expect(model.id).toBeDefined()
      expect(model.title).toBeDefined()
      expect(model.sourceUrl).toMatch(/^https?:\/\//)
      expect(model.estimatedMinutes).toBeGreaterThan(0)
      expect(model.filamentGrams).toBeGreaterThan(0)
    }
  })

  it('contains Bambu filament materials and colors', () => {
    expect(MATERIALS.some((m) => m.id === 'PLA')).toBe(true)
    expect(MATERIALS.some((m) => m.id === 'PETG')).toBe(true)
    expect(COLORS.some((c) => c.name.includes('Bambu Green'))).toBe(true)
  })

  it('creates and lists orders', () => {
    const order = orderStore.create({
      modelTitle: 'Teste Dragão',
      material: 'PLA',
      colorName: 'Bambu Green',
      colorHex: '#00AE42',
      quality: '0.20mm',
      scale: 100,
      quantity: 1,
      customerName: 'Wagner',
      customerPhone: '11999999999',
      deliveryType: 'Retirada no estúdio',
    })

    expect(order.id).toMatch(/^PED-/)
    expect(order.status).toBe('queued')

    const list = orderStore.list()
    expect(list.some((o) => o.id === order.id)).toBe(true)
  })

  it('updates order status through production stages', () => {
    const order = orderStore.create({
      modelTitle: 'Vaso',
      customerName: 'Cliente',
      customerPhone: '123',
    })

    const updated = orderStore.updateStatus(order.id, 'printing')
    expect(updated.status).toBe('printing')

    const meta = getStatusMeta('printing')
    expect(meta.label).toContain('Imprimindo no Bambu A1')
  })

  it('generates a pre-formatted WhatsApp link', () => {
    const order = orderStore.create({
      modelTitle: 'Escudo de Mesa 3D do Seu Time do Coração',
      material: 'PLA',
      colorName: 'Lava Red',
      customizationText: 'Flamengo',
      quality: '0.20mm',
      quantity: 1,
      customerName: 'Wagner',
      customerPhone: '11999999999',
      deliveryType: 'Retirada no estúdio',
    })

    const url = orderStore.generateWhatsAppUrl(order)
    expect(url).toContain('api.whatsapp.com/send?text=')
    expect(decodeURIComponent(url)).toContain(order.id)
    expect(decodeURIComponent(url)).toContain('Flamengo')
  })

  it('contains emotional categories: sports, music, pets and pop-culture', () => {
    expect(MODELS.some((m) => m.category === 'sports')).toBe(true)
    expect(MODELS.some((m) => m.category === 'music')).toBe(true)
    expect(MODELS.some((m) => m.category === 'memories')).toBe(true)
    expect(MODELS.some((m) => m.id === 'team-crest-3d')).toBe(true)
    expect(MODELS.some((m) => m.id === 'spotify-code-keychain')).toBe(true)
    expect(MODELS.some((m) => m.id === 'custom-pet-keychain')).toBe(true)
  })
})
