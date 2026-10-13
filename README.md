# 🖨️ SitePrint 3D — Bambu Lab A1 Studio

Aplicação Web moderna, responsiva e PWA (Progressive Web App) criada para permitir que clientes e amigos escolham modelos 3D gratuitos (MakerWorld, Printables e Thingiverse) e encomendem impressões feitas na impressora **Bambu Lab A1**.

Construído utilizando o **[fzl-fund-appshell--lit](https://github.com/wagnermarques/fzl-fund-appshell--lit)** como casca de aplicação (**appshell**) integrado como **Git Submodule** e **npm workspace**.

---

## 🚀 Funcionalidades Principais

1. **Catálogo Curado de Modelos 3D Gratuitos:**
   - Modelos testados e otimizados para a mesa da Bambu Lab A1 ($256 \times 256 \times 256\text{ mm}$).
   - Categorias: Brinquedos & Fidgets, Casa & Decoração, Mesa & Escritório, Ferramentas & Úteis, e Upgrades exclusivos para a Bambu A1 (como o coletor *Poop Chute*).
   - Busca em tempo real por palavras-chave, filtros por categoria e ordenação por tempo/peso.

2. **Configurador Interativo de Impressão:**
   - **Materiais:** PLA (Básico/Seda), PETG (Resistente) e TPU 95A (Flexível).
   - **Paleta de Filamentos Bambu:** Cores fiéis (Bambu Green, Charcoal Black, Jade White, Lava Red, Cobalt Blue, Sunflower Yellow, Silk Silver, Silk Gold, etc.).
   - **Qualidade / Altura de Camada:** $0.12\text{mm}$ (Alta Definição), $0.20\text{mm}$ (Padrão Bambu Studio) e $0.28\text{mm}$ (Rápido/Funcional).
   - **Preenchimento (Infill):** Giroide $15\%$, Grade $25\%$, Estrutural $50\%$ e $100\%$ Maciço.
   - **Escala e Quantidade:** Com cálculo automático de tempo estimado e consumo de filamento em gramas ($g$).

3. **Fila de Impressão & Rastreamento em Tempo Real:**
   - Persistência Local-First (`localStorage`) com integração com o centro de notificações do Appshell.
   - Stepper visual de etapas: `Na Fila` ➔ `Fatiando (Bambu Studio)` ➔ `Imprimindo no Bambu A1` ➔ `Pronto para Retirada`.
   - Botão para avançar etapas interativamente conforme a impressora trabalha.

4. **Despacho Direto via WhatsApp:**
   - Gera automaticamente uma mensagem formatada e detalhada pronta para envio no WhatsApp contendo o código do pedido, nome do modelo, link original, material, cor, quantidade, dados do cliente e instruções.

5. **Solicitação de Modelos Próprios:**
   - Formulário dedicado para quem encontrar qualquer outro link no MakerWorld, Printables ou Thingiverse e quiser solicitar um orçamento/impressão.

6. **Página Técnica da Bambu Lab A1:**
   - Demonstração dos recursos da máquina: velocidade de até $500\text{ mm/s}$, aceleração de $10.000\text{ mm/s}^2$, compensação ativa de fluxo, chapa PEI texturizada e suporte ao AMS Lite (4 cores).

---

## 🛠️ Arquitetura do Appshell como Submódulo

O repositório base `fzl-fund-appshell--lit` é mantido limpo e isolado como submódulo Git no diretório `./appshell`.

### Estrutura do Projeto:

```
siteprint3d/
├── .gitmodules                 # Configuração do submódulo Git
├── appshell/                   # Submódulo: https://github.com/wagnermarques/fzl-fund-appshell--lit
├── appshell.config.js          # Configuração declarativa do shell (título, a11y, etc.)
├── vite.config.js              # Vite preset importado do appshell
├── index.html                  # Ponto de entrada HTML do app
├── package.json                # Workspaces declarando ["appshell"]
├── public/                     # Favicon e ícones do PWA
└── src/
    ├── data/
    │   ├── filaments.js        # Cores, materiais e presets Bambu A1
    │   └── models.js           # Catálogo curado de modelos 3D
    ├── services/
    │   ├── store.js            # Armazenamento de pedidos e gerador WhatsApp
    │   └── store.test.js       # Testes unitários (Vitest)
    ├── components/
    │   ├── model-card.js       # Card de modelo com badges e ações
    │   ├── order-dialog.js     # Modal de confirmação e checkout
    │   ├── header-quick-actions.js # Ações do topo com contador da fila
    │   └── footer-status.js    # Status da impressora no rodapé
    ├── views/
    │   ├── catalog-view.js     # Galeria com filtros e busca
    │   ├── model-detail-view.js # Detalhes e configurador de filamentos
    │   ├── orders-view.js      # Fila de pedidos e stepper
    │   ├── custom-order-view.js # Formulário para links externos
    │   └── printer-info-view.js # Especificações da Bambu Lab A1
    ├── styles/
    │   └── siteprint-theme.css # Tema visual e cores de impressão
    └── main.js                 # Inicialização do createAppShell com rotas e menu
```

---

## 🔄 Como Atualizar o Appshell no Futuro

Para atualizar o appshell e obter correções e novidades diretamente do repositório upstream:

```bash
# Opção 1: Usando o script npm configurado
npm run submodule:update

# Opção 2: Comando Git direto
git submodule update --remote --merge
```

Em seguida, basta rodar os testes e verificar se o build continua 100%:

```bash
npm test
npm run build
```

---

## 💻 Comandos de Desenvolvimento

```bash
# 1. Instalar dependências (na raiz do projeto)
npm install

# 2. Iniciar servidor de desenvolvimento (HMR ativo)
npm run dev

# 3. Rodar suíte de testes (Vitest)
npm test

# 4. Gerar build de produção otimizado com PWA
npm run build

# 5. Visualizar o build de produção localmente
npm run preview
```

---

## 🌐 Publicação no GitHub Pages ou Cloudflare Pages

Ao configurar o GitHub Actions para deploy contínuo, garanta que os submódulos sejam clonados com `submodules: recursive`:

```yaml
- name: Checkout repository (with submodules)
  uses: actions/checkout@v4
  with:
    submodules: recursive
    fetch-depth: 0
```
