/**
 * Web Push no service worker. Script clássico (não módulo): o preset do
 * Vite o publica como appshell-push-sw.js e o sw.js gerado pelo Workbox o
 * carrega com importScripts — o app não precisa trocar para injectManifest.
 *
 * Payload que o backend do app envia (JSON; tudo opcional menos title):
 *   { title, body, icon, badge, tag, url, data, actions }
 * url é para onde o clique leva: uma rota ('#/pedidos/42') ou um caminho
 * relativo ao app. Texto puro (não JSON) vira o body.
 *
 * O que acontece aqui chega à página por postMessage e vira os eventos
 * push:received, push:clicked e push:subscription-change (ver
 * src/services/push-service.js).
 */

const CLICK_PARAM = 'appshell-push-click'

function readPayload(event) {
  if (!event.data) return {}
  try {
    return event.data.json() ?? {}
  } catch {
    return { body: event.data.text() }
  }
}

async function windowClients() {
  return self.clients.matchAll({ type: 'window', includeUncontrolled: true })
}

async function broadcast(message) {
  for (const client of await windowClients()) client.postMessage(message)
}

self.addEventListener('push', (event) => {
  const { title = '', body = '', icon, badge, tag, url, data = {}, actions } = readPayload(event)
  const payload = { title, body, url: url ?? null, data }
  event.waitUntil(
    (async () => {
      await broadcast({ type: 'appshell:push-received', payload })
      // Sempre mostra: a inscrição é userVisibleOnly, e push sem notificação
      // visível faz o navegador mostrar uma genérica ou revogar a inscrição.
      await self.registration.showNotification(title || self.registration.scope, {
        body,
        icon,
        badge,
        tag,
        actions,
        data: { url: url ?? null, data },
      })
    })(),
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const { url = null, data = {} } = event.notification.data ?? {}
  const payload = { url, data, action: event.action || null }
  event.waitUntil(
    (async () => {
      const scope = self.registration.scope
      const open = (await windowClients()).find((client) => client.url.startsWith(scope))
      if (open) {
        // O app aberto emite push:clicked e navega até url.
        await open.focus()
        open.postMessage({ type: 'appshell:push-clicked', payload })
        return
      }
      // App fechado: abre já em url, levando o clique na query; o
      // pushService o lê na carga, emite push:clicked e limpa a URL.
      const target = new URL(url ?? '', scope)
      target.searchParams.set(CLICK_PARAM, JSON.stringify(payload))
      await self.clients.openWindow(target.href)
    })(),
  )
})

// O navegador trocou (ou expirou) a inscrição: tenta reinscrever com as
// mesmas opções e avisa a página, que manda a nova ao backend. Sem página
// aberta, o pushService percebe a troca na próxima vez que o app abrir.
self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil(
    (async () => {
      const options = event.oldSubscription?.options
      if (options && !event.newSubscription) {
        try {
          await self.registration.pushManager.subscribe(options)
        } catch {
          // Sem permissão ou sem rede: a página resolve na próxima abertura.
        }
      }
      await broadcast({ type: 'appshell:push-subscription-change' })
    })(),
  )
})
