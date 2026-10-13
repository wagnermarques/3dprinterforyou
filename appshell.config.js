import { defineAppShellConfig } from 'fzl-fund-appshell--lit/config'

export default defineAppShellConfig({
  title: 'SitePrint 3D — Bambu Lab A1',
  storagePrefix: 'siteprint3d',
  accessibility: {
    fonts: ['atkinson', 'opendyslexic'],
    themes: ['light', 'dark', 'high-contrast-light', 'high-contrast-dark'],
    textScale: { min: 1, max: 2 },
    defaults: { font: 'system', theme: 'system', textScale: 1 },
  },
  analytics: {
    requireConsent: false,
  },
  push: {
    vapidPublicKey: '',
  },
  backends: {},
})
