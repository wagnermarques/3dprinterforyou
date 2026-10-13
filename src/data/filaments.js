/**
 * Configurações de filamentos, materiais, cores e qualidades de impressão
 * calibradas para a Bambu Lab A1 com bico padrão 0.4mm.
 */

export const MATERIALS = [
  {
    id: 'PLA',
    name: 'PLA Básico / Seda',
    description: 'Biodegradável, acabamento impecável, ideal para miniaturas, decoração e brinquedos.',
    bedTemp: '65°C',
    nozzleTemp: '220°C',
    strength: 'Boa',
    finish: 'Acetinado ou Seda Brilhante',
    badge: 'Mais Popular',
  },
  {
    id: 'PETG',
    name: 'PETG Resistente',
    description: 'Resistente a impacto, raios UV e calor (até 75°C). Ideal para peças mecânicas e uso externo.',
    bedTemp: '75°C',
    nozzleTemp: '245°C',
    strength: 'Alta',
    finish: 'Semi-brilhante translúcido ou opaco',
    badge: 'Alta Resistência',
  },
  {
    id: 'TPU',
    name: 'TPU 95A Flexível',
    description: 'Borracha flexível elástica. Excelente para capas, gaxetas, amortecedores e peças dobráveis.',
    bedTemp: '50°C',
    nozzleTemp: '230°C',
    strength: 'Ultra-flexível',
    finish: 'Emborrachado',
    badge: 'Especial',
  },
]

export const COLORS = [
  { id: 'bambu-green', name: 'Bambu Green', hex: '#00AE42', textColor: '#ffffff' },
  { id: 'matte-black', name: 'Charcoal Black', hex: '#1E1E1E', textColor: '#ffffff' },
  { id: 'jade-white', name: 'Jade White', hex: '#F5F5F5', textColor: '#222222' },
  { id: 'lava-red', name: 'Lava Red', hex: '#D32F2F', textColor: '#ffffff' },
  { id: 'ocean-blue', name: 'Cobalt Blue', hex: '#1976D2', textColor: '#ffffff' },
  { id: 'sun-yellow', name: 'Sunflower Yellow', hex: '#FBC02D', textColor: '#222222' },
  { id: 'silk-silver', name: 'Silk Silver', hex: '#B0BEC5', textColor: '#222222' },
  { id: 'silk-gold', name: 'Silk Gold', hex: '#FFD54F', textColor: '#222222' },
  { id: 'neon-orange', name: 'Neon Orange', hex: '#FF6D00', textColor: '#ffffff' },
  { id: 'sakura-pink', name: 'Sakura Pink', hex: '#F48FB1', textColor: '#222222' },
]

export const QUALITIES = [
  {
    id: '0.12',
    name: '0.12mm — Alta Definição',
    description: 'Camadas quase invisíveis. Perfeito para miniaturas, estátuas e joias.',
    multiplier: 1.5,
  },
  {
    id: '0.20',
    name: '0.20mm — Padrão Bambu Studio',
    description: 'Equilíbrio ideal entre acabamento primoroso e tempo de impressão.',
    multiplier: 1.0,
    recommended: true,
  },
  {
    id: '0.28',
    name: '0.28mm — Rápido / Funcional',
    description: 'Maior velocidade para suportes mecânicos, organizadores e protótipos.',
    multiplier: 0.75,
  },
]

export const INFILLS = [
  { id: '15%', name: '15% Giroide (Padrão)', factor: 1.0 },
  { id: '25%', name: '25% Grade (Reforçado)', factor: 1.15 },
  { id: '50%', name: '50% Estrutural (Forte)', factor: 1.4 },
  { id: '100%', name: '100% Maciço (Indestrutível)', factor: 1.9 },
]

export const PRINTER_SPECS = {
  model: 'Bambu Lab A1',
  buildVolume: '256 × 256 × 256 mm³',
  maxSpeed: '500 mm/s',
  acceleration: '10.000 mm/s²',
  nozzleDiameter: '0.4 mm (Hotend de Troca Rápida)',
  maxNozzleTemp: '300 °C',
  maxBedTemp: '100 °C (Chapa PEI Texturizada)',
  multiColorSupport: 'AMS Lite (até 4 carretéis)',
  autoCalibration: 'Compensação ativa de fluxo + Nivelamento totalmente automático',
}
