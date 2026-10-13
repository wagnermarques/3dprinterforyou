(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,ee=g?g.emptyScript:``,te=h.reactiveElementPolyfillSupport,_=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?ee:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ne=(e,t)=>!l(e,t),re={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(_(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?v:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?v:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ne)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ie.elementStyles=[],ie.shadowRootOptions={mode:`open`},ie[_(`elementProperties`)]=new Map,ie[_(`finalized`)]=new Map,te?.({ReactiveElement:ie}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var ae=globalThis,oe=e=>e,y=ae.trustedTypes,se=y?y.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ce=`$lit$`,b=`lit$${Math.random().toFixed(9).slice(2)}$`,le=`?`+b,ue=`<${le}>`,de=document,fe=()=>de.createComment(``),pe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ye=/>/g,be=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),xe=/'/g,Se=/"/g,Ce=/^(?:script|style|textarea|title)$/i,x=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),S=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),we=new WeakMap,Te=de.createTreeWalker(de,129);function Ee(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return se===void 0?t:se.createHTML(t)}var De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=_e;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===_e?c[1]===`!--`?o=ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=be):(Ce.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=be):o=ye:o===be?c[0]===`>`?(o=i??_e,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?be:c[3]===`"`?Se:xe):o===Se||o===xe?o=be:o===ve||o===ye?o=_e:(o=be,i=void 0);let d=o===be&&e[t+1].startsWith(`/>`)?` `:``;a+=o===_e?n+ue:l>=0?(r.push(s),n.slice(0,l)+ce+n.slice(l)+b+d):n+b+(l===-2?t:d)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),Te.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Te.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ce)){let t=u[o++],n=i.getAttribute(e).split(b),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ne:r[1]===`?`?Pe:r[1]===`@`?Fe:Me}),i.removeAttribute(e)}else e.startsWith(b)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ce.test(i.tagName)){let e=i.textContent.split(b),t=e.length-1;if(t>0){i.textContent=y?y.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],fe()),Te.nextNode(),c.push({type:2,index:++a});i.append(e[t],fe())}}}else if(i.nodeType===8){if(i.data===le)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(b,e+1))!==-1;)c.push({type:7,index:a}),e+=b.length-1}}a++}}static createElement(e,t){let n=de.createElement(`template`);return n.innerHTML=e,n}};function ke(e,t,n=e,r){if(t===S)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=pe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ke(e,i._$AS(e,t.values),i,r)),t}var Ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??de).importNode(t,!0);Te.currentNode=r;let i=Te.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ie(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Te.nextNode(),a++)}return Te.currentNode=de,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),pe(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==S&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(Ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ae(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new Oe(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(fe()),this.O(fe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=oe(e).nextSibling;oe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ke(this,e,t,0),a=!pe(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ke(this,r[n+o],t,o),s===S&&(s=this._$AH[o]),a||=!pe(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ne=class extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Pe=class extends Me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Fe=class extends Me{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ke(this,e,t,0)??C)===S)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ie=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}},Le={M:ce,P:b,A:le,C:1,L:De,R:Ae,D:he,V:ke,I:je,H:Me,N:Pe,U:Fe,B:Ne,F:Ie},Re=ae.litHtmlPolyfillSupport;Re?.(Oe,je),(ae.litHtmlVersions??=[]).push(`3.3.3`);var ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new je(t.insertBefore(fe(),e),e,void 0,n??{})}return i._$AI(e),i},Be=globalThis,w=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};w._$litElement$=!0,w.finalized=!0,Be.litElementHydrateSupport?.({LitElement:w});var Ve=Be.litElementPolyfillSupport;Ve?.({LitElement:w}),(Be.litElementVersions??=[]).push(`4.2.2`);var He={atkinson:{label:`Atkinson Hyperlegible`,family:`'Atkinson Hyperlegible Next'`,package:`@fontsource/atkinson-hyperlegible-next`,css:[`latin-400.css`,`latin-500.css`,`latin-700.css`]},opendyslexic:{label:`OpenDyslexic`,family:`'OpenDyslexic'`,package:`@fontsource/opendyslexic`,css:[`latin-400.css`,`latin-700.css`]}},Ue={light:{label:`Claro`},dark:{label:`Escuro`},"high-contrast-light":{label:`Alto contraste claro`},"high-contrast-dark":{label:`Alto contraste escuro`}},We=[1,1.25,1.5,1.75,2],Ge=[`fonts`,`themes`,`textScale`,`defaults`],Ke=Object.freeze({enabled:!1,fonts:[],themes:[],textScales:[1],defaults:{font:`system`,theme:`system`,textScale:1}});function qe(e){throw Error(`accessibility: ${e}`)}function Je(e,t,n){Array.isArray(e)||qe(`"${n}" deve ser um array`);for(let r of e)r in t||qe(`"${n}" não reconhece "${r}" (use ${Object.keys(t).map(e=>`"${e}"`).join(`, `)})`);return[...new Set(e)]}function Ye(e){if(e===!1)return Ke;(e==null||e===!0)&&(e={}),(typeof e!=`object`||Array.isArray(e))&&qe(`deve ser um objeto, true ou false`);for(let t of Object.keys(e))Ge.includes(t)||qe(`opção desconhecida "${t}" (use ${Ge.map(e=>`"${e}"`).join(`, `)})`);let{fonts:t=Object.keys(He),themes:n=Object.keys(Ue),textScale:r={min:1,max:2},defaults:i={}}=e,a=Je(t,He,`fonts`),o=Je(n,Ue,`themes`);(typeof r!=`object`||!r)&&qe(`"textScale" deve ser { min, max }`);let{min:s=1,max:c=2}=r;(!We.includes(s)||!We.includes(c)||s>c)&&qe(`"textScale" precisa de min <= max, cada um entre ${We.join(`, `)}`);let l=We.filter(e=>e>=s&&e<=c),{font:u=`system`,theme:d=`system`,textScale:f=l[0]}=i;return u!==`system`&&!a.includes(u)&&qe(`"defaults.font" deve ser "system" ou uma das "fonts" habilitadas, não "${u}"`),d!==`system`&&!o.includes(d)&&qe(`"defaults.theme" deve ser "system" ou um dos "themes" habilitados, não "${d}"`),l.includes(f)||qe(`"defaults.textScale" deve ser um de ${l.join(`, `)}`),{enabled:!0,fonts:a,themes:o,textScales:l,defaults:{font:u,theme:d,textScale:f}}}var Xe=`--a11y-text-scale`;function Ze(){return globalThis.localStorage??null}function Qe(){return globalThis.document?.documentElement??null}function $e(e,t){let{defaults:n}=t,r=e&&typeof e==`object`?e:{},i={theme:[`system`,...t.themes],font:[`system`,...t.fonts],textScale:t.textScales};return{theme:i.theme.includes(r.theme)?r.theme:n.theme,font:i.font.includes(r.font)?r.font:n.font,textScale:i.textScale.includes(r.textScale)?r.textScale:n.textScale}}function et(e,t,n){if(!n.enabled)return{...Ke.defaults};try{let r=e?.getItem(t);return $e(r?JSON.parse(r):null,n)}catch{return $e(null,n)}}function tt(e,t=Qe()){if(!t)return;let n=(e,n)=>n===`system`?t.removeAttribute(e):t.setAttribute(e,n);n(`data-theme`,e.theme),n(`data-font`,e.font),e.textScale===1?t.style.removeProperty(Xe):t.style.setProperty(Xe,String(e.textScale))}function nt({config:e=Ye(),key:t=`a11y:preferences`,storage:n=Ze(),root:r=Qe()}={}){let i=new Set,a=typeof t==`function`?t:()=>t,o=()=>et(n,a(),e),s=e=>(tt(e,r),i.forEach(t=>t(e)),e);return{config:e,get key(){return a()},get:o,set(t){let r={...o(),...t},i=$e(r,e);for(let e of Object.keys(t))if(i[e]!==r[e])throw Error(`preferências de acessibilidade: "${e}" não aceita "${t[e]}" nesta config`);try{n?.setItem(a(),JSON.stringify(i))}catch{}return s(i)},reset(){try{n?.removeItem(a())}catch{}return s(o())},apply(){tt(o(),r)},subscribe(e){return i.add(e),()=>i.delete(e)}}}var rt=`position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap`,it=new WeakMap;function at(e,t){let n=it.get(e);if(!n){n={};for(let t of[`polite`,`assertive`]){let r=e.createElement(`div`);r.setAttribute(`aria-live`,t),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`data-a11y-announcer`,t),r.style.cssText=rt,e.body.append(r),n[t]=r}it.set(e,n)}return t?n.assertive:n.polite}function ot(e,{assertive:t=!1,document:n=globalThis.document}={}){if(!n?.body||!e)return Promise.resolve();let r=at(n,t);return r.textContent=``,new Promise(t=>setTimeout(()=>{r.textContent=e,t()},50))}function st(e,{preventScroll:t=!1}={}){return e?(!e.hasAttribute(`tabindex`)&&e.tabIndex<0&&e.setAttribute(`tabindex`,`-1`),e.focus({preventScroll:t}),e.getRootNode().activeElement===e):!1}function ct(...e){let t=e.filter(Boolean).join(` — `);return globalThis.document&&t&&(globalThis.document.title=t),t}function lt(e,t){return`${e}:${t}`}function ut(e){return lt(`siteprint3d`,e)}var T=nt({config:{enabled:!0,fonts:[`atkinson`,`opendyslexic`],themes:[`light`,`dark`,`high-contrast-light`,`high-contrast-dark`],textScales:[1,1.25,1.5,1.75,2],defaults:{font:`system`,theme:`system`,textScale:1}},key:()=>ut(`a11y:preferences`)});function E(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var D=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},dt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:ne},ft=(e=dt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?ft(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function k(e){return O({...e,state:!0,attribute:!1})}var pt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function A(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return pt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return pt(n,r,{get(){return a(this)}})}}var mt;function ht(e){return(t,n)=>pt(t,n,{get(){return(this.renderRoot??(mt??=document.createDocumentFragment())).querySelectorAll(e)}})}function gt(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return pt(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}function _t(e){return(t,n)=>{let{slot:r}=e??{},i=`slot`+(r?`[name=${r}]`:`:not([name])`);return pt(t,n,{get(){return(this.renderRoot?.querySelector(i))?.assignedNodes(e)??[]}})}}var vt=class extends w{render(){return x`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.getAttribute(`aria-hidden`)===`false`?this.removeAttribute(`aria-hidden`):this.setAttribute(`aria-hidden`,`true`)}},yt=o`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;yt.styleSheet;var bt=class extends vt{};bt.styles=[yt],bt=E([D(`md-icon`)],bt);var xt=Symbol(`attachableController`),St=new MutationObserver(e=>{for(let t of e)t.target[xt]?.hostConnected()}),Ct=class{get htmlFor(){return this.host.getAttribute(`for`)}set htmlFor(e){e===null?this.host.removeAttribute(`for`):this.host.setAttribute(`for`,e)}get control(){return this.host.hasAttribute(`for`)?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[xt]=this,St?.observe(e,{attributeFilter:[`for`]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute(`for`))}detach(){this.setCurrentControl(null),this.host.setAttribute(`for`,``)}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}},wt=[`focusin`,`focusout`,`pointerdown`],Tt=class extends w{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ct(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}handleEvent(e){if(!e[Et]){switch(e.type){default:return;case`focusin`:this.visible=this.control?.matches(`:focus-visible`)??!1;break;case`focusout`:case`pointerdown`:this.visible=!1}e[Et]=!0}}onControlChange(e,t){for(let n of wt)e?.removeEventListener(n,this),t?.addEventListener(n,this)}update(e){e.has(`visible`)&&this.dispatchEvent(new Event(`visibility-changed`)),super.update(e)}};E([O({type:Boolean,reflect:!0})],Tt.prototype,`visible`,void 0),E([O({type:Boolean,reflect:!0})],Tt.prototype,`inward`,void 0);var Et=Symbol(`handledByFocusRing`),Dt=o`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;Dt.styleSheet;var Ot=class extends Tt{};Ot.styles=[Dt],Ot=E([D(`md-focus-ring`)],Ot);var kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},At=e=>(...t)=>({_$litDirective$:e,values:t}),jt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},j=At(class extends jt{constructor(e){if(super(e),e.type!==kt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return S}}),Mt={STANDARD:`cubic-bezier(0.2, 0, 0, 1)`,STANDARD_ACCELERATE:`cubic-bezier(.3,0,1,1)`,STANDARD_DECELERATE:`cubic-bezier(0,0,0,1)`,EMPHASIZED:`cubic-bezier(.3,0,0,1)`,EMPHASIZED_ACCELERATE:`cubic-bezier(.3,0,.8,.15)`,EMPHASIZED_DECELERATE:`cubic-bezier(.05,.7,.1,1)`};function Nt(){let e=null;return{start(){return e?.abort(),e=new AbortController,e.signal},finish(){e=null}}}var Pt=450,Ft=225,It=.2,Lt=10,Rt=75,zt=.35,Bt=`::after`,Vt=`forwards`,M;(function(e){e[e.INACTIVE=0]=`INACTIVE`,e[e.TOUCH_DELAY=1]=`TOUCH_DELAY`,e[e.HOLDING=2]=`HOLDING`,e[e.WAITING_FOR_CLICK=3]=`WAITING_FOR_CLICK`})(M||={});var Ht=[`click`,`contextmenu`,`pointercancel`,`pointerdown`,`pointerenter`,`pointerleave`,`pointerup`],Ut=150,Wt=window.matchMedia(`(forced-colors: active)`),Gt=class extends w{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize=``,this.rippleScale=``,this.initialSize=0,this.state=M.INACTIVE,this.attachableController=new Ct(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}render(){return x`<div class="surface ${j({hovered:this.hovered,pressed:this.pressed})}"></div>`}update(e){e.has(`disabled`)&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==M.INACTIVE&&this.endPressAnimation())}handlePointerup(e){this.shouldReactToEvent(e)&&(this.state===M.HOLDING?this.state=M.WAITING_FOR_CLICK:this.state===M.TOUCH_DELAY&&(this.state=M.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent)))}async handlePointerdown(e){this.shouldReactToEvent(e)&&(this.rippleStartEvent=e,this.isTouch(e)?(this.state=M.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,Ut)}),this.state===M.TOUCH_DELAY&&(this.state=M.HOLDING,this.startPressAnimation(e))):(this.state=M.WAITING_FOR_CLICK,this.startPressAnimation(e)))}handleClick(){this.disabled||(this.state===M.WAITING_FOR_CLICK?this.endPressAnimation():this.state===M.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()))}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){let{height:e,width:t}=this.getBoundingClientRect(),n=Math.max(e,t),r=Math.max(zt*n,Rt),i=this.currentCSSZoom??1,a=Math.floor(n*It/i),o=Math.sqrt(t**2+e**2)+Lt;this.initialSize=a;let s=(o+r)/a;this.rippleScale=`${s/i}`,this.rippleSize=`${a}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:n}=window,{left:r,top:i}=this.getBoundingClientRect(),a=t+r,o=n+i,{pageX:s,pageY:c}=e,l=this.currentCSSZoom??1;return{x:(s-a)/l,y:(c-o)/l}}getTranslationCoordinates(e){let{height:t,width:n}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,i={x:(n/r-this.initialSize)/2,y:(t/r-this.initialSize)/2},a;return a=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:n/r/2,y:t/r/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2},{startPoint:a,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:n}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,i=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:Bt,duration:Pt,easing:Mt.STANDARD,fill:Vt})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=M.INACTIVE;let e=this.growAnimation,t=1/0;typeof e?.currentTime==`number`?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to(`ms`).value),t>=Ft?this.pressed=!1:(await new Promise(e=>{setTimeout(e,Ft-t)}),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type===`pointerenter`||e.type===`pointerleave`)return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}isTouch({pointerType:e}){return e===`touch`}async handleEvent(e){if(!Wt?.matches)switch(e.type){case`click`:this.handleClick();break;case`contextmenu`:this.handleContextmenu();break;case`pointercancel`:this.handlePointercancel(e);break;case`pointerdown`:await this.handlePointerdown(e);break;case`pointerenter`:this.handlePointerenter(e);break;case`pointerleave`:this.handlePointerleave(e);break;case`pointerup`:this.handlePointerup(e)}}onControlChange(e,t){for(let n of Ht)e?.removeEventListener(n,this),t?.addEventListener(n,this)}};E([O({type:Boolean,reflect:!0})],Gt.prototype,`disabled`,void 0),E([k()],Gt.prototype,`hovered`,void 0),E([k()],Gt.prototype,`pressed`,void 0),E([A(`.surface`)],Gt.prototype,`mdRoot`,void 0);var Kt=o`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;Kt.styleSheet;var qt=class extends Gt{};qt.styles=[Kt],qt=E([D(`md-ripple`)],qt);var Jt=Symbol.for(``),Yt=e=>{if(e?.r===Jt)return e?._$litStatic$},N=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Jt}),Xt=new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Yt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(x),Qt=`role.ariaAtomic.ariaAutoComplete.ariaBusy.ariaChecked.ariaColCount.ariaColIndex.ariaColSpan.ariaCurrent.ariaDisabled.ariaExpanded.ariaHasPopup.ariaHidden.ariaInvalid.ariaKeyShortcuts.ariaLabel.ariaLevel.ariaLive.ariaModal.ariaMultiLine.ariaMultiSelectable.ariaOrientation.ariaPlaceholder.ariaPosInSet.ariaPressed.ariaReadOnly.ariaRequired.ariaRoleDescription.ariaRowCount.ariaRowIndex.ariaRowSpan.ariaSelected.ariaSetSize.ariaSort.ariaValueMax.ariaValueMin.ariaValueNow.ariaValueText`.split(`.`),$t=Qt.map(tn);function en(e){return $t.includes(e)}function tn(e){return e.replace(`aria`,`aria-`).replace(/Elements?/g,``).toLowerCase()}var nn=Symbol(`privateIgnoreAttributeChangesFor`);function rn(e){var t;class n extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,n){if(!en(e)){super.attributeChangedCallback(e,t,n);return}if(this[nn].has(e))return;this[nn].add(e),this.removeAttribute(e),this[nn].delete(e);let r=sn(e);n===null?delete this.dataset[r]:this.dataset[r]=n,this.requestUpdate(sn(e),t)}getAttribute(e){return en(e)?super.getAttribute(on(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),en(e)&&(super.removeAttribute(on(e)),this.requestUpdate())}}return t=nn,an(n),n}function an(e){for(let t of Qt){let n=tn(t),r=on(n),i=sn(n);e.createProperty(t,{attribute:n,noAccessor:!0}),e.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[i]??null},set(e){let n=this.dataset[i]??null;e!==n&&(e===null?delete this.dataset[i]:this.dataset[i]=e,this.requestUpdate(t,n))}})}}function on(e){return`data-${e}`}function sn(e){return e.replace(/-\w/,e=>e[1].toUpperCase())}function cn(e,t=!0){return t&&getComputedStyle(e).getPropertyValue(`direction`).trim()===`rtl`}var ln=Symbol(`dispatchHooks`);function un(e,t){let n=e[ln];if(!n)throw Error(`'${e.type}' event needs setupDispatchHooks().`);n.addEventListener(`after`,t,{once:!0})}var dn=new WeakMap;function fn(e,...t){let n=dn.get(e);n||(n=new Set,dn.set(e,n));for(let r of t)n.has(r)||(e.addEventListener(r,e=>{let t=new EventTarget;e[ln]=t;let n=new AbortController,i=()=>{n.abort(),t.dispatchEvent(new Event(`after`))},a=e=>function(){e.call(this),i()};e.stopPropagation=a(e.stopPropagation),e.stopImmediatePropagation=a(e.stopImmediatePropagation);let o=e.composedPath(),s;s=e.composed&&e.bubbles?o[o.length-1]:e.bubbles?o[0].getRootNode():o[0],s.addEventListener(r,()=>{i()},{once:!0,signal:n.signal})},{capture:!0}),n.add(r))}var P=Symbol(`internals`),pn=Symbol(`privateInternals`);function mn(e){class t extends e{get[P](){return this[pn]||(this[pn]=this.attachInternals()),this[pn]}}return t}var hn=Symbol(`getFormValue`),gn=Symbol(`getFormState`);function _n(e){class t extends e{get form(){return this[P].form}get labels(){return this[P].labels}get name(){return this.getAttribute(`name`)??``}set name(e){this.setAttribute(`name`,e)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,!!e)}attributeChangedCallback(e,t,n){if(e===`name`||e===`disabled`){let n=e===`disabled`?t!==null:t;this.requestUpdate(e,n)}else super.attributeChangedCallback(e,t,n)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this[P].setFormValue(this[hn](),this[gn]())}[hn](){return this.getAttribute(`value`)}[gn](){return this[hn]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,E([O({noAccessor:!0})],t.prototype,`name`,null),E([O({type:Boolean,noAccessor:!0})],t.prototype,`disabled`,null),t}function vn(e){class t extends e{get name(){return this.getAttribute(`name`)??``}set name(e){this.setAttribute(`name`,e)}constructor(...e){super(...e),this.type=`submit`,this.value=``,fn(this,`click`),this.addEventListener(`click`,async e=>{let t=this.type===`reset`,n=this.type===`submit`,r=this[P],{form:i}=r;i&&(n||t)&&un(e,()=>{e.defaultPrevented||(t?i.reset():(i.addEventListener(`submit`,e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>this})},{capture:!0,once:!0}),r.setFormValue(this.value),i.requestSubmit()))})})}}return E([O()],t.prototype,`type`,void 0),E([O({reflect:!0})],t.prototype,`value`,void 0),t}var yn=rn(vn(_n(mn(w)))),F=class extends yn{constructor(){super(),this.softDisabled=!1,this.flipIconInRtl=!1,this.href=``,this.download=``,this.target=``,this.ariaLabelSelected=``,this.toggle=!1,this.selected=!1,this.flipIcon=cn(this,this.flipIconInRtl),fn(this,`click`),this.addEventListener(`click`,e=>{if(this.softDisabled||this.disabled&&this.href){e.stopImmediatePropagation(),e.preventDefault();return}let t=this.selected;un(e,()=>{!this.toggle||this.disabled||e.defaultPrevented||(this.selected=!t,this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))})})}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let e=this.href?N`div`:N`button`,{ariaLabel:t,ariaHasPopup:n,ariaExpanded:r}=this,i=t&&this.ariaLabelSelected,a=this.toggle?this.selected:C,o=C;return this.href||(o=i&&this.selected?this.ariaLabelSelected:t),Zt`<${e}
        class="icon-button ${j(this.getRenderClasses())}"
        id="button"
        aria-label="${o||C}"
        aria-haspopup="${!this.href&&n||C}"
        aria-expanded="${!this.href&&r||C}"
        aria-pressed="${a}"
        aria-disabled=${!this.href&&this.softDisabled||C}
        ?disabled="${!this.href&&this.disabled}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?C:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():C}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return x`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||C}"
        target="${this.target||C}"
        aria-label="${e||C}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return x`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return x`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return x`<span class="touch"></span>`}renderFocusRing(){return x`<md-focus-ring
      part="focus-ring"
      for=${this.href?`link`:`button`}></md-focus-ring>`}renderRipple(){let e=!this.href&&(this.disabled||this.softDisabled);return x`<md-ripple
      for=${this.href?`link`:C}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=cn(this,this.flipIconInRtl),super.connectedCallback()}};F.shadowRootOptions={mode:`open`,delegatesFocus:!0},E([O({type:Boolean,attribute:`soft-disabled`,reflect:!0})],F.prototype,`softDisabled`,void 0),E([O({type:Boolean,attribute:`flip-icon-in-rtl`})],F.prototype,`flipIconInRtl`,void 0),E([O()],F.prototype,`href`,void 0),E([O()],F.prototype,`download`,void 0),E([O()],F.prototype,`target`,void 0),E([O({attribute:`aria-label-selected`})],F.prototype,`ariaLabelSelected`,void 0),E([O({type:Boolean})],F.prototype,`toggle`,void 0),E([O({type:Boolean,reflect:!0})],F.prototype,`selected`,void 0),E([k()],F.prototype,`flipIcon`,void 0);var bn=o`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;bn.styleSheet;var xn=o`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}
`;xn.styleSheet;var Sn=class extends F{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Sn.styles=[bn,xn],Sn=E([D(`md-icon-button`)],Sn);function Cn(e,t=Nn){let n=En(e,t);return n&&(n.tabIndex=0,n.focus()),n}function wn(e,t=Nn){let n=Dn(e,t);return n&&(n.tabIndex=0,n.focus()),n}function Tn(e,t=Nn){for(let n=0;n<e.length;n++){let r=e[n];if(r.tabIndex===0&&t(r))return{item:r,index:n}}return null}function En(e,t=Nn){for(let n of e)if(t(n))return n;return null}function Dn(e,t=Nn){for(let n=e.length-1;n>=0;n--){let r=e[n];if(t(r))return r}return null}function On(e,t,n=Nn,r=!0){for(let i=1;i<e.length;i++){let a=(i+t)%e.length;if(a<t&&!r)return null;let o=e[a];if(n(o))return o}return e[t]?e[t]:null}function kn(e,t,n=Nn,r=!0){for(let i=1;i<e.length;i++){let a=(t-i+e.length)%e.length;if(a>t&&!r)return null;let o=e[a];if(n(o))return o}return e[t]?e[t]:null}function An(e,t,n=Nn,r=!0){if(t){let i=On(e,t.index,n,r);return i&&(i.tabIndex=0,i.focus()),i}return Cn(e,n)}function jn(e,t,n=Nn,r=!0){if(t){let i=kn(e,t.index,n,r);return i&&(i.tabIndex=0,i.focus()),i}return wn(e,n)}function Mn(){return new Event(`request-activation`,{bubbles:!0,composed:!0})}function Nn(e){return!e.disabled}var I={ArrowDown:`ArrowDown`,ArrowLeft:`ArrowLeft`,ArrowUp:`ArrowUp`,ArrowRight:`ArrowRight`,Home:`Home`,End:`End`},Pn=class{constructor(e){this.handleKeydown=e=>{let t=e.key;if(e.defaultPrevented||!this.isNavigableKey(t))return;let n=this.items;if(!n.length)return;let r=Tn(n,this.isActivatable);e.preventDefault();let i=this.isRtl(),a=i?I.ArrowRight:I.ArrowLeft,o=i?I.ArrowLeft:I.ArrowRight,s=null;switch(t){case I.ArrowDown:case o:s=An(n,r,this.isActivatable,this.wrapNavigation());break;case I.ArrowUp:case a:s=jn(n,r,this.isActivatable,this.wrapNavigation());break;case I.Home:s=Cn(n,this.isActivatable);break;case I.End:s=wn(n,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{let e=this.items;for(let t of e)this.deactivateItem(t)},this.onRequestActivation=e=>{this.onDeactivateItems();let t=e.target;this.activateItem(t),t.focus()},this.onSlotchange=()=>{let e=this.items,t=!1;for(let n of e)!n.disabled&&n.tabIndex>-1&&!t?(t=!0,n.tabIndex=0):n.tabIndex=-1;if(t)return;let n=En(e,this.isActivatable);n&&(n.tabIndex=0)};let{isItem:t,getPossibleItems:n,isRtl:r,deactivateItem:i,activateItem:a,isNavigableKey:o,isActivatable:s,wrapNavigation:c}=e;this.isItem=t,this.getPossibleItems=n,this.isRtl=r,this.deactivateItem=i,this.activateItem=a,this.isNavigableKey=o,this.isActivatable=s,this.wrapNavigation=c??(()=>!0)}get items(){let e=this.getPossibleItems(),t=[];for(let n of e){if(this.isItem(n)){t.push(n);continue}let e=n.item;e&&this.isItem(e)&&t.push(e)}return t}activateNextItem(){let e=this.items,t=Tn(e,this.isActivatable);return t&&(t.item.tabIndex=-1),An(e,t,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){let e=this.items,t=Tn(e,this.isActivatable);return t&&(t.item.tabIndex=-1),jn(e,t,this.isActivatable,this.wrapNavigation())}},Fn=new Set(Object.values(I)),In=class extends w{get items(){return this.listController.items}constructor(){super(),this.listController=new Pn({isItem:e=>e.hasAttribute(`md-list-item`),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction===`rtl`,deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>Fn.has(e),isActivatable:e=>!e.disabled&&e.type!==`text`}),this.internals=this.attachInternals(),this.internals.role=`list`,this.addEventListener(`keydown`,this.listController.handleKeydown)}render(){return x`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}};E([gt({flatten:!0})],In.prototype,`slotItems`,void 0);var Ln=o`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;Ln.styleSheet;var Rn=class extends In{};Rn.styles=[Ln],Rn=E([D(`md-list`)],Rn);var zn=class extends w{constructor(){super(...arguments),this.multiline=!1}render(){return x`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(let n of this.textSlots)if(Bn(n)&&(t+=1),t>1){e=!0;break}this.multiline=e}};E([O({type:Boolean,reflect:!0})],zn.prototype,`multiline`,void 0),E([ht(`.text slot`)],zn.prototype,`textSlots`,void 0);function Bn(e){for(let t of e.assignedNodes({flatten:!0})){let e=t.nodeType===Node.ELEMENT_NODE,n=t.nodeType===Node.TEXT_NODE&&t.textContent?.match(/\S/);if(e||n)return!0}return!1}var Vn=o`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;Vn.styleSheet;var Hn=class extends zn{};Hn.styles=[Vn],Hn=E([D(`md-item`)],Hn);var Un=rn(w),Wn=class extends Un{constructor(){super(...arguments),this.disabled=!1,this.type=`text`,this.isListItem=!0,this.href=``,this.target=``}get isDisabled(){return this.disabled&&this.type!==`link`}willUpdate(e){this.href&&(this.type=`link`),super.willUpdate(e)}render(){return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let t=this.type===`link`,n;switch(this.type){case`link`:n=N`a`;break;case`button`:n=N`button`;break;default:case`text`:n=N`li`}let r=this.type!==`text`,i=t&&this.target?this.target:C;return Zt`
      <${n}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||C}
        aria-checked=${this.ariaChecked||C}
        aria-expanded=${this.ariaExpanded||C}
        aria-haspopup=${this.ariaHasPopup||C}
        class="list-item ${j(this.getRenderClasses())}"
        href=${this.href||C}
        target=${i}
        @focus=${this.onFocus}
      >${e}</${n}>
    `}renderRipple(){return this.type===`text`?C:x` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type===`text`?C:x` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(Mn())}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}};Wn.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},E([O({type:Boolean,reflect:!0})],Wn.prototype,`disabled`,void 0),E([O({reflect:!0})],Wn.prototype,`type`,void 0),E([O({type:Boolean,attribute:`md-list-item`,reflect:!0})],Wn.prototype,`isListItem`,void 0),E([O()],Wn.prototype,`href`,void 0),E([O()],Wn.prototype,`target`,void 0),E([A(`.list-item`)],Wn.prototype,`listItemRoot`,void 0);var Gn=o`:host{display:flex;gap:16px;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;gap:inherit;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px);gap:inherit}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;Gn.styleSheet;var Kn=class extends Wn{};Kn.styles=[Gn],Kn=E([D(`md-list-item`)],Kn);var qn=class extends w{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}};E([O({type:Boolean,reflect:!0})],qn.prototype,`inset`,void 0),E([O({type:Boolean,reflect:!0,attribute:`inset-start`})],qn.prototype,`insetStart`,void 0),E([O({type:Boolean,reflect:!0,attribute:`inset-end`})],qn.prototype,`insetEnd`,void 0);var Jn=o`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;Jn.styleSheet;var Yn=class extends qn{};Yn.styles=[Jn],Yn=E([D(`md-divider`)],Yn);var L=class extends w{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label=``,this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText=``,this.errorText=``,this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){let e=this.count??-1,t=this.max??-1;return e<0||t<=0?``:`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has(`disabled`)&&e.get(`disabled`)!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set(`focused`,!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get(`focused`),wasPopulated:e.get(`populated`)}),super.update(e)}render(){let e=this.renderLabel(!0),t=this.renderLabel(!1),n=this.renderOutline?.(e);return x`
      <div class="field ${j({disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label})}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${n?C:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has(`supportingText`)||e.has(`errorText`)||e.has(`count`)||e.has(`max`))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return C;let n=x`<span>${e}</span>`,r=t?x`<span class="counter">${t}</span>`:C;return x`
      <div class="supporting-text" role=${this.error&&this.errorText&&!this.refreshErrorAlert?`alert`:C}>${n}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)ze(x`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute(`hidden`,``)}renderLabel(e){if(!this.label)return C;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;let n={hidden:!t,floating:e,resting:!e},r=`${this.label}${this.required&&!this.noAsterisk?`*`:``}`;return x`
      <span class="label ${j(n)}" aria-hidden=${!t}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label||(e??=this.focused,t??=this.populated,(e||t)===(this.focused||this.populated)))return;let n=this.getLabelKeyframes();n.length&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(n,{duration:150,easing:Mt.STANDARD}),this.labelAnimation?.addEventListener(`finish`,()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];let{x:n,y:r,height:i}=e.getBoundingClientRect(),{x:a,y:o,height:s}=t.getBoundingClientRect(),c=e.scrollWidth,l=t.scrollWidth;if(c===0||l===0)return[];let u=l/c,d=`translateX(${a-n}px) translateY(${o-r+Math.round((s-i*u)/2)}px) scale(${u})`,f=`translateX(0) translateY(0) scale(1)`,p=t.clientWidth,m=l>p?`${p/u}px`:``;return this.focused||this.populated?[{transform:d,width:m},{transform:f,width:m}]:[{transform:f,width:m},{transform:d,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};E([O({type:Boolean})],L.prototype,`disabled`,void 0),E([O({type:Boolean})],L.prototype,`error`,void 0),E([O({type:Boolean})],L.prototype,`focused`,void 0),E([O()],L.prototype,`label`,void 0),E([O({type:Boolean,attribute:`no-asterisk`})],L.prototype,`noAsterisk`,void 0),E([O({type:Boolean})],L.prototype,`populated`,void 0),E([O({type:Boolean})],L.prototype,`required`,void 0),E([O({type:Boolean})],L.prototype,`resizable`,void 0),E([O({attribute:`supporting-text`})],L.prototype,`supportingText`,void 0),E([O({attribute:`error-text`})],L.prototype,`errorText`,void 0),E([O({type:Number})],L.prototype,`count`,void 0),E([O({type:Number})],L.prototype,`max`,void 0),E([O({type:Boolean,attribute:`has-start`})],L.prototype,`hasStart`,void 0),E([O({type:Boolean,attribute:`has-end`})],L.prototype,`hasEnd`,void 0),E([gt({slot:`aria-describedby`})],L.prototype,`slottedAriaDescribedBy`,void 0),E([k()],L.prototype,`isAnimating`,void 0),E([k()],L.prototype,`refreshErrorAlert`,void 0),E([k()],L.prototype,`disableTransitions`,void 0),E([A(`.label.floating`)],L.prototype,`floatingLabelEl`,void 0),E([A(`.label.resting`)],L.prototype,`restingLabelEl`,void 0),E([A(`.container`)],L.prototype,`containerEl`,void 0);var Xn=class extends L{renderOutline(e){return x`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${e}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}},Zn=o`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;Zn.styleSheet;var Qn=o`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;Qn.styleSheet;var $n=class extends Xn{};$n.styles=[Qn,Zn],$n=E([D(`md-outlined-field`)],$n);var er=o`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;er.styleSheet;var{I:tr}=Le,nr=e=>e.strings===void 0,rr={},ir=(e,t=rr)=>e._$AH=t,ar=At(class extends jt{constructor(e){if(super(e),e.type!==kt.PROPERTY&&e.type!==kt.ATTRIBUTE&&e.type!==kt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!nr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===S||t===C)return t;let n=e.element,r=e.name;if(e.type===kt.PROPERTY){if(t===n[r])return S}else if(e.type===kt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return S}else if(e.type===kt.ATTRIBUTE&&n.getAttribute(r)===t+``)return S;return ir(e),t}}),or=`important`,sr=` !`+or,cr=At(class extends jt{constructor(e){if(super(e),e.type!==kt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(sr);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?or:``):n[e]=r}}return S}}),lr={fromAttribute(e){return e??``},toAttribute(e){return e||null}};function ur(e,t){t.bubbles&&(!e.shadowRoot||t.composed)&&t.stopPropagation();let n=Reflect.construct(t.constructor,[t.type,t]),r=e.dispatchEvent(n);return r||t.preventDefault(),r}var dr=Symbol(`createValidator`),fr=Symbol(`getValidityAnchor`),pr=Symbol(`privateValidator`),mr=Symbol(`privateSyncValidity`),hr=Symbol(`privateCustomValidationMessage`);function gr(e){var t;class n extends e{constructor(){super(...arguments),this[t]=``}get validity(){return this[mr](),this[P].validity}get validationMessage(){return this[mr](),this[P].validationMessage}get willValidate(){return this[mr](),this[P].willValidate}checkValidity(){return this[mr](),this[P].checkValidity()}reportValidity(){return this[mr](),this[P].reportValidity()}setCustomValidity(e){this[hr]=e,this[mr]()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this[mr]()}firstUpdated(e){super.firstUpdated(e),this[mr]()}[(t=hr,mr)](){this[pr]||(this[pr]=this[dr]());let{validity:e,validationMessage:t}=this[pr].getValidity(),n=!!this[hr],r=this[hr]||t;this[P].setValidity({...e,customError:n},r,this[fr]()??void 0)}[dr](){throw Error(`Implement [createValidator]`)}[fr](){throw Error(`Implement [getValidityAnchor]`)}}return n}var _r=Symbol(`onReportValidity`),vr=Symbol(`privateCleanupFormListeners`),yr=Symbol(`privateDoNotReportInvalid`),br=Symbol(`privateIsSelfReportingValidity`),xr=Symbol(`privateCallOnReportValidity`);function Sr(e){var t,n,r;class i extends e{constructor(...e){super(...e),this[t]=new AbortController,this[n]=!1,this[r]=!1,this.addEventListener(`invalid`,e=>{!this[yr]&&e.isTrusted&&this.addEventListener(`invalid`,()=>{this[xr](e)},{once:!0})},{capture:!0})}checkValidity(){this[yr]=!0;let e=super.checkValidity();return this[yr]=!1,e}reportValidity(){this[br]=!0;let e=super.reportValidity();return e&&this[xr](null),this[br]=!1,e}[(t=vr,n=yr,r=br,xr)](e){let t=e?.defaultPrevented;t||(this[_r](e),!t&&e?.defaultPrevented&&(this[br]||Er(this[P].form,this))&&this.focus())}[_r](e){throw Error(`Implement [onReportValidity]`)}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[vr].abort(),e&&(this[vr]=new AbortController,Cr(this,e,()=>{this[xr](null)},this[vr].signal))}}return i}function Cr(e,t,n,r){let i=Tr(t),a=!1,o,s=!1;i.addEventListener(`before`,()=>{s=!0,o=new AbortController,a=!1,e.addEventListener(`invalid`,()=>{a=!0},{signal:o.signal})},{signal:r}),i.addEventListener(`after`,()=>{s=!1,o?.abort(),!a&&n()},{signal:r}),t.addEventListener(`submit`,()=>{s||n()},{signal:r})}var wr=new WeakMap;function Tr(e){if(!wr.has(e)){let t=new EventTarget;wr.set(e,t);for(let n of[`reportValidity`,`requestSubmit`]){let r=e[n];e[n]=function(){t.dispatchEvent(new Event(`before`));let e=Reflect.apply(r,this,arguments);return t.dispatchEvent(new Event(`after`)),e}}}return wr.get(e)}function Er(e,t){if(!e)return!0;let n;for(let t of e.elements)if(t.matches(`:invalid`)){n=t;break}return n===t}var Dr=class{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:``}}getValidity(){let e=this.getCurrentState();if(this.prevState&&this.equals(this.prevState,e))return this.currentValidity;let{validity:t,validationMessage:n}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:n,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}},Or=class extends Dr{computeValidity({state:e,renderedControl:t}){let n=t;kr(e)&&!n?(n=this.inputControl||document.createElement(`input`),this.inputControl=n):n||(n=this.textAreaControl||document.createElement(`textarea`),this.textAreaControl=n);let r=kr(e)?n:null;if(r&&(r.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,r){let t=e;t.pattern?r.pattern=t.pattern:r.removeAttribute(`pattern`),t.min?r.min=t.min:r.removeAttribute(`min`),t.max?r.max=t.max:r.removeAttribute(`max`),t.step?r.step=t.step:r.removeAttribute(`step`)}return(e.minLength??-1)>-1?n.setAttribute(`minlength`,String(e.minLength)):n.removeAttribute(`minlength`),(e.maxLength??-1)>-1?n.setAttribute(`maxlength`,String(e.maxLength)):n.removeAttribute(`maxlength`),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:t}){let n=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return!kr(e)||!kr(t)?n:n&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step}copy({state:e}){return{state:kr(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){let{type:t,pattern:n,min:r,max:i,step:a}=e;return{...this.copySharedState(e),type:t,pattern:n,min:r,max:i,step:a}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:n,maxLength:r}){return{value:e,required:t,minLength:n,maxLength:r}}};function kr(e){return e.type!==`textarea`}var Ar=rn(Sr(gr(_n(mn(w))))),R=class extends Ar{constructor(){super(...arguments),this.error=!1,this.errorText=``,this.label=``,this.noAsterisk=!1,this.required=!1,this.value=``,this.prefixText=``,this.suffixText=``,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText=``,this.textDirection=``,this.rows=2,this.cols=20,this.inputMode=``,this.max=``,this.maxLength=-1,this.min=``,this.minLength=-1,this.noSpinner=!1,this.pattern=``,this.placeholder=``,this.readOnly=!1,this.multiple=!1,this.step=``,this.type=`text`,this.autocomplete=``,this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=``}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,n){this.getInputOrTextarea().setSelectionRange(e,t,n)}showPicker(){let e=this.getInput();e&&e.showPicker()}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute(`value`)??``,this.nativeError=!1,this.nativeErrorText=``}attributeChangedCallback(e,t,n){e===`value`&&this.dirty||super.attributeChangedCallback(e,t,n)}render(){return x`
      <span class="text-field ${j({disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type===`textarea`,"no-spinner":this.noSpinner})}">
        ${this.renderField()}
      </span>
    `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return Zt`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type===`textarea`}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return x`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return x`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||C,n=this.autocomplete,r=(this.maxLength??-1)>-1,i=(this.minLength??-1)>-1;if(this.type===`textarea`)return x`
        <textarea
          class="input"
          style=${cr(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||C}
          name=${this.name||C}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:C}
          minlength=${i?this.minLength:C}
          placeholder=${this.placeholder||C}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${ar(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let a=this.renderPrefix(),o=this.renderSuffix(),s=this.inputMode;return x`
      <div class="input-wrapper">
        ${a}
        <input
          class="input"
          style=${cr(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||C}
          name=${this.name||C}
          ?disabled=${this.disabled}
          inputmode=${s||C}
          max=${this.max||C}
          maxlength=${r?this.maxLength:C}
          min=${this.min||C}
          minlength=${i?this.minLength:C}
          pattern=${this.pattern||C}
          placeholder=${this.placeholder||C}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||C}
          type=${this.type}
          .value=${ar(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${o}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?x`<span class="${j({suffix:t,prefix:!t})}">${e}</span>`:C}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(`:focus`)??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){ur(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type===`textarea`?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[hn](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[dr](){return new Or(()=>({state:this,renderedControl:this.inputOrTextarea}))}[fr](){return this.inputOrTextarea}[_r](e){e?.preventDefault();let t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}};R.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},E([O({type:Boolean,reflect:!0})],R.prototype,`error`,void 0),E([O({attribute:`error-text`})],R.prototype,`errorText`,void 0),E([O()],R.prototype,`label`,void 0),E([O({type:Boolean,attribute:`no-asterisk`})],R.prototype,`noAsterisk`,void 0),E([O({type:Boolean,reflect:!0})],R.prototype,`required`,void 0),E([O()],R.prototype,`value`,void 0),E([O({attribute:`prefix-text`})],R.prototype,`prefixText`,void 0),E([O({attribute:`suffix-text`})],R.prototype,`suffixText`,void 0),E([O({type:Boolean,attribute:`has-leading-icon`})],R.prototype,`hasLeadingIcon`,void 0),E([O({type:Boolean,attribute:`has-trailing-icon`})],R.prototype,`hasTrailingIcon`,void 0),E([O({attribute:`supporting-text`})],R.prototype,`supportingText`,void 0),E([O({attribute:`text-direction`})],R.prototype,`textDirection`,void 0),E([O({type:Number})],R.prototype,`rows`,void 0),E([O({type:Number})],R.prototype,`cols`,void 0),E([O({reflect:!0})],R.prototype,`inputMode`,void 0),E([O()],R.prototype,`max`,void 0),E([O({type:Number})],R.prototype,`maxLength`,void 0),E([O()],R.prototype,`min`,void 0),E([O({type:Number})],R.prototype,`minLength`,void 0),E([O({type:Boolean,attribute:`no-spinner`})],R.prototype,`noSpinner`,void 0),E([O()],R.prototype,`pattern`,void 0),E([O({reflect:!0,converter:lr})],R.prototype,`placeholder`,void 0),E([O({type:Boolean,reflect:!0})],R.prototype,`readOnly`,void 0),E([O({type:Boolean,reflect:!0})],R.prototype,`multiple`,void 0),E([O()],R.prototype,`step`,void 0),E([O({reflect:!0})],R.prototype,`type`,void 0),E([O({reflect:!0})],R.prototype,`autocomplete`,void 0),E([k()],R.prototype,`dirty`,void 0),E([k()],R.prototype,`focused`,void 0),E([k()],R.prototype,`nativeError`,void 0),E([k()],R.prototype,`nativeErrorText`,void 0),E([A(`.input`)],R.prototype,`inputOrTextarea`,void 0),E([A(`.field`)],R.prototype,`field`,void 0),E([gt({slot:`leading-icon`})],R.prototype,`leadingIcons`,void 0),E([gt({slot:`trailing-icon`})],R.prototype,`trailingIcons`,void 0);var jr=class extends R{constructor(){super(...arguments),this.fieldTag=N`md-outlined-field`}},Mr=o`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;Mr.styleSheet;var Nr=class extends jr{constructor(){super(...arguments),this.fieldTag=N`md-outlined-field`}};Nr.styles=[Mr,er],Nr=E([D(`md-outlined-text-field`)],Nr);var Pr=o`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:max(48px,100%);left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;Pr.styleSheet;function Fr(e){let t=new MouseEvent(`click`,{bubbles:!0});return e.dispatchEvent(t),t}function Ir(e){return e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!Lr(e)}function Lr(e){let t=Rr;return t&&(e.preventDefault(),e.stopImmediatePropagation()),zr(),t}var Rr=!1;async function zr(){Rr=!0,await null,Rr=!1}var Br=rn(vn(_n(mn(w)))),z=class extends Br{constructor(){super(),this.softDisabled=!1,this.href=``,this.download=``,this.target=``,this.trailingIcon=!1,this.hasIcon=!1,this.addEventListener(`click`,this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=this.disabled||this.softDisabled,t=this.href?this.renderLink():this.renderButton(),n=this.href?`link`:`button`;return x`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${n}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${n}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){let{ariaLabel:e,ariaHasPopup:t,ariaExpanded:n}=this;return x`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||C}
      aria-label="${e||C}"
      aria-haspopup="${t||C}"
      aria-expanded="${n||C}">
      ${this.renderContent()}
    </button>`}renderLink(){let{ariaLabel:e,ariaHasPopup:t,ariaExpanded:n}=this;return x`<a
      id="link"
      class="button"
      aria-label="${e||C}"
      aria-haspopup="${t||C}"
      aria-expanded="${n||C}"
      aria-disabled=${this.disabled||this.softDisabled||C}
      tabindex="${this.disabled&&!this.softDisabled?-1:C}"
      href=${this.href}
      download=${this.download||C}
      target=${this.target||C}
      >${this.renderContent()}
    </a>`}renderContent(){let e=x`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return x`
      <span class="touch"></span>
      ${this.trailingIcon?C:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:C}
    `}handleClick(e){this.softDisabled||this.disabled&&this.href?(e.stopImmediatePropagation(),e.preventDefault()):Ir(e)&&this.buttonElement&&(this.focus(),Fr(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};z.shadowRootOptions={mode:`open`,delegatesFocus:!0},E([O({type:Boolean,attribute:`soft-disabled`,reflect:!0})],z.prototype,`softDisabled`,void 0),E([O()],z.prototype,`href`,void 0),E([O()],z.prototype,`download`,void 0),E([O()],z.prototype,`target`,void 0),E([O({type:Boolean,attribute:`trailing-icon`,reflect:!0})],z.prototype,`trailingIcon`,void 0),E([O({type:Boolean,attribute:`has-icon`,reflect:!0})],z.prototype,`hasIcon`,void 0),E([A(`.button`)],z.prototype,`buttonElement`,void 0),E([gt({slot:`icon`,flatten:!0})],z.prototype,`assignedIcons`,void 0);var Vr=class extends z{},Hr=o`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;Hr.styleSheet;var Ur=class extends Vr{};Ur.styles=[Pr,Hr],Ur=E([D(`md-text-button`)],Ur);var Wr=class extends w{connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}render(){return x`<span class="shadow"></span>`}},Gr=o`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;Gr.styleSheet;var Kr=class extends Wr{};Kr.styles=[Gr],Kr=E([D(`md-elevation`)],Kr);var qr=class extends z{renderElevationOrOutline(){return x`<md-elevation part="elevation"></md-elevation>`}},Jr=o`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;Jr.styleSheet;var Yr=o`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;Yr.styleSheet;var Xr=class extends qr{};Xr.styles=[Pr,Yr,Jr],Xr=E([D(`md-filled-button`)],Xr);var Zr=class extends z{renderElevationOrOutline(){return x`<div class="outline"></div>`}},Qr=o`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;Qr.styleSheet;var $r=class extends Zr{};$r.styles=[Pr,Qr],$r=E([D(`md-outlined-button`)],$r);var ei=class extends Dr{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement(`input`),this.checkboxControl.type=`checkbox`),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,t){return e.checked===t.checked&&e.required===t.required}copy({checked:e,required:t}){return{checked:e,required:t}}},ti=rn(gr(_n(mn(w)))),ni=class extends ti{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value=`on`,this.addEventListener(`click`,e=>{Ir(e)&&this.input&&(this.focus(),Fr(this.input))}),fn(this,`keydown`),this.addEventListener(`keydown`,e=>{un(e,()=>{e.defaultPrevented||e.key!==`Enter`||this.disabled||!this.input||this.input.click()})})}render(){return x`
      <div class="switch ${j(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||C}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){let e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return x`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${j(e)}">
          ${this.shouldShowIcons()?this.renderIcons():x``}
        </span>
      </span>
    `}renderIcons(){return x`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?x``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return x`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return x`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return x`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){let t=e.target;this.selected=t.checked}handleChange(e){ur(this,e)}[hn](){return this.selected?this.value:null}[gn](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute(`selected`)}formStateRestoreCallback(e){this.selected=e===`true`}[dr](){return new ei(()=>({checked:this.selected,required:this.required}))}[fr](){return this.input}};ni.shadowRootOptions={mode:`open`,delegatesFocus:!0},E([O({type:Boolean})],ni.prototype,`selected`,void 0),E([O({type:Boolean})],ni.prototype,`icons`,void 0),E([O({type:Boolean,attribute:`show-only-selected-icon`})],ni.prototype,`showOnlySelectedIcon`,void 0),E([O({type:Boolean})],ni.prototype,`required`,void 0),E([O()],ni.prototype,`value`,void 0),E([A(`input`)],ni.prototype,`input`,void 0);var ri=o`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;background:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;ri.styleSheet;var ii=class extends ni{};ii.styles=[ri],ii=E([D(`md-switch`)],ii);var ai=Symbol(`isFocusable`),oi=Symbol(`privateIsFocusable`),si=Symbol(`externalTabIndex`),ci=Symbol(`isUpdatingTabIndex`),li=Symbol(`updateTabIndex`);function ui(e){var t,n,r;class i extends e{constructor(){super(...arguments),this[t]=!0,this[n]=null,this[r]=!1}get[ai](){return this[oi]}set[ai](e){this[ai]!==e&&(this[oi]=e,this[li]())}connectedCallback(){super.connectedCallback(),this[li]()}attributeChangedCallback(e,t,n){e===`tabindex`?(this.requestUpdate(`tabIndex`,Number(t??-1)),!this[ci]&&(this.hasAttribute(`tabindex`)?this[si]=this.tabIndex:(this[si]=null,this[li]()))):super.attributeChangedCallback(e,t,n)}[(t=oi,n=si,r=ci,li)](){let e=this[ai]?0:-1,t=this[si]??e;this[ci]=!0,this.tabIndex=t,this[ci]=!1}}return E([O({noAccessor:!0})],i.prototype,`tabIndex`,void 0),i}var di=class extends Dr{computeValidity(e){this.radioElement||(this.radioElement=document.createElement(`input`),this.radioElement.type=`radio`,this.radioElement.name=`group`);let t=!1,n=!1;for(let{checked:r,required:i}of e)i&&(t=!0),r&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=t,{validity:{valueMissing:t&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.checked!==i.checked||r.required!==i.required)return!1}return!0}copy(e){return e.map(({checked:e,required:t})=>({checked:e,required:t}))}},fi=class{get controls(){let e=this.host.getAttribute(`name`);return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=e=>{let t=e.key===`ArrowDown`,n=e.key===`ArrowUp`,r=e.key===`ArrowLeft`,i=e.key===`ArrowRight`;if(!r&&!i&&!t&&!n)return;let a=this.controls;if(!a.length)return;e.preventDefault();let o=getComputedStyle(this.host).direction===`rtl`?r||t:i||t,s=a.indexOf(this.host),c=o?s+1:s-1;for(;c!==s;){c>=a.length?c=0:c<0&&(c=a.length-1);let e=a[c];if(e.hasAttribute(`disabled`))o?c++:c--;else{for(let t of a)t!==e&&(t.checked=!1,t.tabIndex=-1,t.blur());e.checked=!0,e.tabIndex=0,e.focus(),e.dispatchEvent(new Event(`change`,{bubbles:!0}));break}}}}hostConnected(){this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`focusin`,this.handleFocusIn),this.host.addEventListener(`focusout`,this.handleFocusOut),queueMicrotask(()=>{this.root=this.host.getRootNode(),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()})}hostDisconnected(){this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`focusin`,this.handleFocusIn),this.host.removeEventListener(`focusout`,this.handleFocusOut),queueMicrotask(()=>{this.updateTabIndices(),this.root=null})}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(let e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){let e=this.controls,t=e.find(e=>e.checked);if(t||this.focused){let n=t||this.host;n.tabIndex=0;for(let t of e)t!==n&&(t.tabIndex=-1)}else for(let t of e)t.tabIndex=0}},pi,mi=Symbol(`checked`),hi=0,gi=gr(_n(mn(ui(w)))),_i=class extends gi{get checked(){return this[mi]}set checked(e){let t=this.checked;t!==e&&(this[mi]=e,this.requestUpdate(`checked`,t),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++hi}`,this[pi]=!1,this.required=!1,this.value=`on`,this.selectionController=new fi(this),this.addController(this.selectionController),this[P].role=`radio`,this.addEventListener(`click`,this.handleClick.bind(this)),this.addEventListener(`keydown`,this.handleKeydown.bind(this))}render(){return x`
      <div class="container ${j({checked:this.checked})}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <div class="touch-target"></div>
      </div>
    `}updated(){this[P].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(Ir(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==` `||e.defaultPrevented)&&this.click()}[(pi=mi,hn)](){return this.checked?this.value:null}[gn](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute(`checked`)}formStateRestoreCallback(e){this.checked=e===`true`}[dr](){return new di(()=>this.selectionController?this.selectionController.controls:[this])}[fr](){return this.container}};E([O({type:Boolean})],_i.prototype,`checked`,null),E([O({type:Boolean})],_i.prototype,`required`,void 0),E([O()],_i.prototype,`value`,void 0),E([A(`.container`)],_i.prototype,`container`,void 0);var vi=o`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}.touch-target{height:48px;position:absolute;width:48px}:host([touch-target=none]) .touch-target{display:none}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;vi.styleSheet;var yi=class extends _i{};yi.styles=[vi],yi=E([D(`md-radio`)],yi);function bi(e,t){return new CustomEvent(`close-menu`,{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})}var xi=bi,Si={SPACE:`Space`,ENTER:`Enter`},Ci={CLICK_SELECTION:`click-selection`,KEYDOWN:`keydown`},wi={ESCAPE:`Escape`,SPACE:Si.SPACE,ENTER:Si.ENTER};function Ti(e){return Object.values(wi).some(t=>t===e)}function Ei(e,t){let n=new Event(`md-contains`,{bubbles:!0,composed:!0}),r=[],i=e=>{r=e.composedPath()};return t.addEventListener(`md-contains`,i),e.dispatchEvent(n),t.removeEventListener(`md-contains`,i),r.length>0}var Di={NONE:`none`,LIST_ROOT:`list-root`,FIRST_ITEM:`first-item`,LAST_ITEM:`last-item`},Oi={END_START:`end-start`,END_END:`end-end`,START_START:`start-start`,START_END:`start-end`},ki=class{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:`none`},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:e,anchorEl:t,anchorCorner:n,surfaceCorner:r,positioning:i,xOffset:a,yOffset:o,disableBlockFlip:s,disableInlineFlip:c,repositionStrategy:l}=this.getProperties(),u=n.toLowerCase().trim(),d=r.toLowerCase().trim();if(!e||!t)return;let f=window.innerWidth,p=window.innerHeight,m=document.createElement(`div`);m.style.opacity=`0`,m.style.position=`fixed`,m.style.display=`block`,m.style.inset=`0`,document.body.appendChild(m);let h=m.getBoundingClientRect();m.remove();let g=window.innerHeight-h.bottom,ee=window.innerWidth-h.right;this.surfaceStylesInternal={display:`block`,opacity:`0`},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();let te=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),_=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[v,ne]=d.split(`-`),[re,ie]=u.split(`-`),ae=getComputedStyle(e).direction===`ltr`,{blockInset:oe,blockOutOfBoundsCorrection:y,surfaceBlockProperty:se}=this.calculateBlock({surfaceRect:te,anchorRect:_,anchorBlock:re,surfaceBlock:v,yOffset:o,positioning:i,windowInnerHeight:p,blockScrollbarHeight:g});if(y&&!s){let e=v===`start`?`end`:`start`,t=re===`start`?`end`:`start`,n=this.calculateBlock({surfaceRect:te,anchorRect:_,anchorBlock:t,surfaceBlock:e,yOffset:o,positioning:i,windowInnerHeight:p,blockScrollbarHeight:g});y>n.blockOutOfBoundsCorrection&&(oe=n.blockInset,y=n.blockOutOfBoundsCorrection,se=n.surfaceBlockProperty)}let{inlineInset:ce,inlineOutOfBoundsCorrection:b,surfaceInlineProperty:le}=this.calculateInline({surfaceRect:te,anchorRect:_,anchorInline:ie,surfaceInline:ne,xOffset:a,positioning:i,isLTR:ae,windowInnerWidth:f,inlineScrollbarWidth:ee});if(b&&!c){let e=ne===`start`?`end`:`start`,t=ie===`start`?`end`:`start`,n=this.calculateInline({surfaceRect:te,anchorRect:_,anchorInline:t,surfaceInline:e,xOffset:a,positioning:i,isLTR:ae,windowInnerWidth:f,inlineScrollbarWidth:ee});Math.abs(b)>Math.abs(n.inlineOutOfBoundsCorrection)&&(ce=n.inlineInset,b=n.inlineOutOfBoundsCorrection,le=n.surfaceInlineProperty)}l===`move`&&(oe-=y,ce-=b),this.surfaceStylesInternal={display:`block`,opacity:`1`,[se]:`${oe}px`,[le]:`${ce}px`},l===`resize`&&(y&&(this.surfaceStylesInternal.height=`${te.height-y}px`),b&&(this.surfaceStylesInternal.width=`${te.width-b}px`)),this.host.requestUpdate()}calculateBlock(e){let{surfaceRect:t,anchorRect:n,anchorBlock:r,surfaceBlock:i,yOffset:a,positioning:o,windowInnerHeight:s,blockScrollbarHeight:c}=e,l=+(o===`fixed`||o===`document`),u=+(o===`document`),d=+(i===`start`),f=+(i===`end`),p=(r===i?0:1)*n.height+a,m=d*n.top+f*(s-n.bottom-c),h=d*window.scrollY-f*window.scrollY,g=Math.abs(Math.min(0,s-m-p-t.height));return{blockInset:l*m+u*h+p,blockOutOfBoundsCorrection:g,surfaceBlockProperty:i===`start`?`inset-block-start`:`inset-block-end`}}calculateInline(e){let{isLTR:t,surfaceInline:n,anchorInline:r,anchorRect:i,surfaceRect:a,xOffset:o,positioning:s,windowInnerWidth:c,inlineScrollbarWidth:l}=e,u=+(s===`fixed`||s===`document`),d=+(s===`document`),f=+!!t,p=+!t,m=+(n===`start`),h=+(n===`end`),g=(r===n?0:1)*i.width+o,ee=m*i.left+h*(c-i.right-l),te=m*(c-i.right-l)+h*i.left,_=f*ee+p*te,v=m*window.scrollX-h*window.scrollX,ne=h*window.scrollX-m*window.scrollX,re=f*v+p*ne,ie=Math.abs(Math.min(0,c-_-g-a.width)),ae=u*_+g+d*re,oe=n===`start`?`inset-inline-start`:`inset-inline-end`;return(s===`document`||s===`fixed`)&&(oe=n===`start`&&t||n===`end`&&!t?`left`:`right`),{inlineInset:ae,inlineOutOfBoundsCorrection:ie,surfaceInlineProperty:oe}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let e=this.getProperties(),t=!1;for(let[n,r]of Object.entries(e))if(t||=r!==this.lastValues[n],t)break;let n=this.lastValues.isOpen!==e.isOpen,r=!!e.anchorEl,i=!!e.surfaceEl;t&&r&&i&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):n&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:`none`},this.host.requestUpdate();let e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}},B={INDEX:0,ITEM:1,TEXT:2},Ai=class{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer=``,this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer=``,this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&(e.code===`Space`||e.code===`Enter`||e.code.startsWith(`Arrow`)||e.code===`Escape`||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((e,t)=>[t,e,e.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(e=>e[B.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[B.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),e.code===`Enter`||e.code.startsWith(`Arrow`)||e.code===`Escape`){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[B.ITEM].tabIndex=-1);return}e.code===`Space`&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();let t=this.lastActiveRecord?this.lastActiveRecord[B.INDEX]:-1,n=this.typeaheadRecords.length,r=e=>(e[B.INDEX]+n-t)%n,i=this.typeaheadRecords.filter(e=>!e[B.ITEM].disabled&&e[B.TEXT].startsWith(this.typaheadBuffer)).sort((e,t)=>r(e)-r(t));if(i.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[B.ITEM].tabIndex=-1),this.endTypeahead();return}let a=this.typaheadBuffer.length===1,o;o=this.lastActiveRecord===i[0]&&a?i[1]??i[0]:i[0],this.lastActiveRecord&&(this.lastActiveRecord[B.ITEM].tabIndex=-1),this.lastActiveRecord=o,o[B.ITEM].tabIndex=0,o[B.ITEM].focus()}},ji=new Set([I.ArrowDown,I.ArrowUp,I.Home,I.End]),Mi=new Set([I.ArrowLeft,I.ArrowRight,...ji]);function Ni(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}var V=class extends w{get openDirection(){return this.menuCorner.split(`-`)[0]===`start`?`DOWN`:`UP`}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate(`anchorElement`)}constructor(){super(),this.anchor=``,this.positioning=`absolute`,this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=Oi.END_START,this.menuCorner=Oi.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Di.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=Nt(),this.listController=new Pn({isItem:e=>e.hasAttribute(`md-menu-item`),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction===`rtl`,deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>this.isSubmenu?e===(getComputedStyle(this).direction===`rtl`?I.ArrowLeft:I.ArrowRight)||ji.has(e):Mi.has(e),wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new Ai(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new ki(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning===`popover`?`document`:this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&this.positioning!==`popover`?`move`:`resize`})),this.onWindowResize=()=>{this.isRepositioning||this.positioning!==`document`&&this.positioning!==`fixed`&&this.positioning!==`popover`||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{let t=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(t))return;if(e.relatedTarget){if(Ei(e.relatedTarget,this)||this.pointerPath.length!==0&&Ei(e.relatedTarget,t))return}else if(this.pointerPath.includes(this))return;let n=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=n},this.onOpened=async()=>{this.lastFocusedElement=Ni();let e=this.items,t=Tn(e);t&&this.defaultFocus!==Di.NONE&&(t.item.tabIndex=-1);let n=!this.quick;switch(this.quick?this.dispatchEvent(new Event(`opening`)):n=!!await this.animateOpen(),this.defaultFocus){case Di.FIRST_ITEM:let t=En(e);t&&(t.tabIndex=0,t.focus(),await t.updateComplete);break;case Di.LAST_ITEM:let n=Dn(e);n&&(n.tabIndex=0,n.focus(),await n.updateComplete);break;case Di.LIST_ROOT:this.focus();break;default:case Di.NONE:}n||this.dispatchEvent(new Event(`opened`))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event(`closing`)),this.dispatchEvent(new Event(`closed`)))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;let t=e.composedPath();!this.stayOpenOnOutsideClick&&!t.includes(this)&&!t.includes(this.anchorElement)&&(this.open=!1)},this.internals.role=`menu`,this.addEventListener(`keydown`,this.handleKeydown),this.addEventListener(`keydown`,this.captureKeydown,{capture:!0}),this.addEventListener(`focusout`,this.handleFocusout)}get items(){return this.listController.items}willUpdate(e){e.has(`open`)&&(this.open?this.removeAttribute(`aria-hidden`):this.setAttribute(`aria-hidden`,`true`))}update(e){e.has(`open`)&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has(`positioning`)&&this.positioning===`popover`&&!this.showPopover&&(this.positioning=`fixed`),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return x`
      <div
        class="menu ${j(this.getSurfaceClasses())}"
        style=${cr(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning===`popover`?`manual`:C}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return x`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return x`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning===`fixed`,"has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&Ti(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){let e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;let n=this.openDirection;this.dispatchEvent(new Event(`opening`)),e.classList.toggle(`animating`,!0);let r=this.openCloseAnimationSignal.start(),i=e.offsetHeight,a=n===`UP`,o=this.items,s=250/o.length,c=e.animate([{height:`0px`},{height:`${i}px`}],{duration:500,easing:Mt.EMPHASIZED}),l=t.animate([{transform:a?`translateY(-${i}px)`:``},{transform:``}],{duration:500,easing:Mt.EMPHASIZED}),u=e.animate([{opacity:0},{opacity:1}],50),d=[];for(let e=0;e<o.length;e++){let t=o[a?o.length-1-e:e],n=t.animate([{opacity:0},{opacity:1}],{duration:250,delay:s*e});t.classList.toggle(`md-menu-hidden`,!0),n.addEventListener(`finish`,()=>{t.classList.toggle(`md-menu-hidden`,!1)}),d.push([t,n])}let f=e=>{},p=new Promise(e=>{f=e});return r.addEventListener(`abort`,()=>{c.cancel(),l.cancel(),u.cancel(),d.forEach(([e,t])=>{e.classList.toggle(`md-menu-hidden`,!1),t.cancel()}),f(!0)}),c.addEventListener(`finish`,()=>{e.classList.toggle(`animating`,!1),this.openCloseAnimationSignal.finish(),f(!1)}),await p}animateClose(){let e,t=new Promise(t=>{e=t}),n=this.surfaceEl,r=this.slotEl;if(!n||!r)return e(!1),t;let i=this.openDirection===`UP`;this.dispatchEvent(new Event(`closing`)),n.classList.toggle(`animating`,!0);let a=this.openCloseAnimationSignal.start(),o=n.offsetHeight,s=this.items,c=50/s.length,l=n.animate([{height:`${o}px`},{height:`${o*.35}px`}],{duration:150,easing:Mt.EMPHASIZED_ACCELERATE}),u=r.animate([{transform:``},{transform:i?`translateY(-${o*.65}px)`:``}],{duration:150,easing:Mt.EMPHASIZED_ACCELERATE}),d=n.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),f=[];for(let e=0;e<s.length;e++){let t=s[i?e:s.length-1-e],n=t.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*e});n.addEventListener(`finish`,()=>{t.classList.toggle(`md-menu-hidden`,!0)}),f.push([t,n])}return a.addEventListener(`abort`,()=>{l.cancel(),u.cancel(),d.cancel(),f.forEach(([e,t])=>{t.cancel(),e.classList.toggle(`md-menu-hidden`,!1)}),e(!1)}),l.addEventListener(`finish`,()=>{n.classList.toggle(`animating`,!1),f.forEach(([e])=>{e.classList.toggle(`md-menu-hidden`,!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event(`closed`)),e(!0)}),t}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener(`click`,this.onDocumentClick,{capture:!0}),window.addEventListener(`pointerdown`,this.onWindowPointerdown),document.addEventListener(`resize`,this.onWindowResize,{passive:!0}),window.addEventListener(`resize`,this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener(`click`,this.onDocumentClick,{capture:!0}),window.removeEventListener(`pointerdown`,this.onWindowPointerdown),document.removeEventListener(`resize`,this.onWindowResize),window.removeEventListener(`resize`,this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(e=>{e.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}};E([A(`.menu`)],V.prototype,`surfaceEl`,void 0),E([A(`slot`)],V.prototype,`slotEl`,void 0),E([O()],V.prototype,`anchor`,void 0),E([O()],V.prototype,`positioning`,void 0),E([O({type:Boolean})],V.prototype,`quick`,void 0),E([O({type:Boolean,attribute:`has-overflow`})],V.prototype,`hasOverflow`,void 0),E([O({type:Boolean,reflect:!0})],V.prototype,`open`,void 0),E([O({type:Number,attribute:`x-offset`})],V.prototype,`xOffset`,void 0),E([O({type:Number,attribute:`y-offset`})],V.prototype,`yOffset`,void 0),E([O({type:Boolean,attribute:`no-horizontal-flip`})],V.prototype,`noHorizontalFlip`,void 0),E([O({type:Boolean,attribute:`no-vertical-flip`})],V.prototype,`noVerticalFlip`,void 0),E([O({type:Number,attribute:`typeahead-delay`})],V.prototype,`typeaheadDelay`,void 0),E([O({attribute:`anchor-corner`})],V.prototype,`anchorCorner`,void 0),E([O({attribute:`menu-corner`})],V.prototype,`menuCorner`,void 0),E([O({type:Boolean,attribute:`stay-open-on-outside-click`})],V.prototype,`stayOpenOnOutsideClick`,void 0),E([O({type:Boolean,attribute:`stay-open-on-focusout`})],V.prototype,`stayOpenOnFocusout`,void 0),E([O({type:Boolean,attribute:`skip-restore-focus`})],V.prototype,`skipRestoreFocus`,void 0),E([O({attribute:`default-focus`})],V.prototype,`defaultFocus`,void 0),E([O({type:Boolean,attribute:`no-navigation-wrap`})],V.prototype,`noNavigationWrap`,void 0),E([gt({flatten:!0})],V.prototype,`slotItems`,void 0),E([k()],V.prototype,`typeaheadActive`,void 0);var Pi=o`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;Pi.styleSheet;var Fi=class extends V{};Fi.styles=[Pi],Fi=E([D(`md-menu`)],Fi);var Ii=class{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(xi(this.host,{kind:Ci.CLICK_SELECTION}))},this.onKeydown=e=>{if(this.host.href&&e.code===`Enter`){let e=this.getInteractiveElement();e instanceof HTMLAnchorElement&&e.click()}if(e.defaultPrevented)return;let t=e.code;this.host.keepOpen&&t!==`Escape`||Ti(t)&&(e.preventDefault(),this.host.dispatchEvent(xi(this.host,{kind:Ci.KEYDOWN,key:t})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let e=this.getHeadlineElements(),t=[];return e.forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.length===0&&this.getDefaultElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.length===0&&this.getSupportingTextElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.join(` `)}get tagName(){switch(this.host.type){case`link`:return`a`;case`button`:return`button`;default:case`menuitem`:case`option`:return`li`}}get role(){return this.host.type===`option`?`option`:`menuitem`}hostConnected(){this.host.toggleAttribute(`md-menu-item`,!0)}hostUpdate(){this.host.href&&(this.host.type=`link`)}setTypeaheadText(e){this.internalTypeaheadText=e}},Li=rn(w),H=class extends Li{constructor(){super(...arguments),this.disabled=!1,this.type=`menuitem`,this.href=``,this.target=``,this.keepOpen=!1,this.selected=!1,this.menuItemController=new Ii(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let t=this.type===`link`,n;switch(this.menuItemController.tagName){case`a`:n=N`a`;break;case`button`:n=N`button`;break;default:case`li`:n=N`li`}let r=t&&this.target?this.target:C;return Zt`
      <${n}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||C}
        aria-selected=${this.ariaSelected||C}
        aria-checked=${this.ariaChecked||C}
        aria-expanded=${this.ariaExpanded||C}
        aria-haspopup=${this.ariaHasPopup||C}
        class="list-item ${j(this.getRenderClasses())}"
        href=${this.href||C}
        target=${r}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${n}>
    `}renderRipple(){return x` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return x` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};H.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0},E([O({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),E([O()],H.prototype,`type`,void 0),E([O()],H.prototype,`href`,void 0),E([O()],H.prototype,`target`,void 0),E([O({type:Boolean,attribute:`keep-open`})],H.prototype,`keepOpen`,void 0),E([O({type:Boolean})],H.prototype,`selected`,void 0),E([A(`.list-item`)],H.prototype,`listItemRoot`,void 0),E([gt({slot:`headline`})],H.prototype,`headlineElements`,void 0),E([gt({slot:`supporting-text`})],H.prototype,`supportingTextElements`,void 0),E([_t({slot:``})],H.prototype,`defaultElements`,void 0),E([O({attribute:`typeahead-text`})],H.prototype,`typeaheadText`,null);var Ri=o`:host{display:flex;gap:16px;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;gap:inherit;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px);gap:inherit}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;Ri.styleSheet;var zi=class extends H{};zi.styles=[Ri],zi=E([D(`md-menu-item`)],zi);var Bi=rn(w),Vi=class extends Bi{constructor(){super(...arguments),this.opened=!1,this.pivot=`end`}render(){let e=this.opened?`true`:`false`,t=this.opened?`false`:`true`,{ariaLabel:n,ariaModal:r}=this;return x`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${e}
        aria-hidden=${t}
        aria-label=${n||C}
        aria-modal=${r||C}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getScrimClasses(){return j({"md3-navigation-drawer-modal--scrim-visible":this.opened})}getRenderClasses(){return j({"md3-navigation-drawer-modal--opened":this.opened,"md3-navigation-drawer-modal--pivot-at-start":this.pivot===`start`})}updated(e){e.has(`opened`)&&setTimeout(()=>{this.dispatchEvent(new CustomEvent(`navigation-drawer-changed`,{detail:{opened:this.opened},bubbles:!0,composed:!0}))},250)}handleKeyDown(e){e.code===`Escape`&&(this.opened=!1)}handleScrimClick(){this.opened=!this.opened}};E([O({type:Boolean})],Vi.prototype,`opened`,void 0),E([O()],Vi.prototype,`pivot`,void 0);var Hi=o`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level: var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}
`;Hi.styleSheet;var Ui=o`.md3-navigation-drawer-modal,.md3-navigation-drawer{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened,.md3-navigation-drawer.md3-navigation-drawer--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content,.md3-navigation-drawer .md3-navigation-drawer__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}
`;Ui.styleSheet;var Wi=class extends Vi{};Wi.styles=[Ui,Hi],Wi=E([D(`md-navigation-drawer-modal`)],Wi);var Gi=`modulepreload`,Ki=function(e){return`/3dprinterforyou/`+e},qi={},Ji=function(e){return e.pathname.endsWith(`.css`)},Yi=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Xi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ki(t,n);let r=s(t),i=Ji(r);return Yi(qi,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Gi,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zi=`false`,Qi=`false`,$i=Zi===`true`,ea=Qi===`true`;function ta(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,$i||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await Xi(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/3dprinterforyou/sw.js`,{scope:`/3dprinterforyou/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!ea){if($i)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/3dprinterforyou/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}var na=class extends w{static properties={_prefs:{state:!0}};static styles=o`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 4px;
    }
    .breadcrumb {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.85rem;
      margin: 0 0 24px;
    }
    fieldset {
      border: 0;
      margin: 0 0 24px;
      padding: 0;
    }
    legend {
      font-size: 1rem;
      font-weight: 700;
      padding: 0;
      margin-bottom: 4px;
    }
    .hint {
      margin: 0 0 8px;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    label {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 48px;
      cursor: pointer;
      font-size: 1rem;
    }
    .sizes {
      display: flex;
      flex-wrap: wrap;
      column-gap: 24px;
    }
    .sample {
      margin: 0 0 24px;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 8px;
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      line-height: 1.5;
    }
  `;constructor(){super(),this._prefs=T.get()}connectedCallback(){super.connectedCallback(),this._unsubscribe=T.subscribe(e=>this._prefs=e)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}_group(e,t,n,r,{fontPreview:i=!1}={}){return x`
      <fieldset>
        <legend>${t}</legend>
        ${n?x`<p class="hint">${n}</p>`:``}
        ${r.map(({value:t,label:n})=>x`
            <label style=${i&&t!==`system`?`font-family: ${He[t].family}, system-ui`:``}>
              <md-radio
                name=${e}
                .value=${String(t)}
                .checked=${this._prefs[e]===t}
                @change=${()=>T.set({[e]:t})}
              ></md-radio>
              ${n}
            </label>
          `)}
      </fieldset>
    `}render(){let{config:e}=T,t=[{value:`system`,label:`Sistema`},...e.themes.map(e=>({value:e,label:Ue[e].label}))],n=[{value:`system`,label:`Fonte do sistema`},...e.fonts.map(e=>({value:e,label:He[e].label}))],r=e.textScales.map(e=>({value:e,label:`${Math.round(e*100)}%`}));return x`
      <p class="breadcrumb">Config &rsaquo; Acessibilidade</p>
      <h1>Acessibilidade</h1>
      <p class="hint">As escolhas valem na hora, em todo o app, e ficam salvas neste aparelho.</p>

      ${this._group(`theme`,`Tema`,`Os temas de alto contraste têm contraste de pelo menos 7:1 entre texto e fundo. "Sistema" segue o modo claro/escuro e o contraste configurados no seu aparelho.`,t)}
      ${n.length>1?this._group(`font`,`Fonte`,`Atkinson Hyperlegible foi desenhada para leitores com baixa visão. OpenDyslexic é preferida por parte das pessoas com dislexia.`,n,{fontPreview:!0}):``}
      ${r.length>1?x`
            <fieldset>
              <legend>Tamanho do texto</legend>
              <div class="sizes">
                ${r.map(({value:e,label:t})=>x`
                    <label>
                      <md-radio
                        name="textScale"
                        .value=${String(e)}
                        .checked=${this._prefs.textScale===e}
                        @change=${()=>T.set({textScale:e})}
                      ></md-radio>
                      ${t}
                    </label>
                  `)}
              </div>
            </fieldset>
          `:``}

      <p class="sample">
        Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.
        Il1 O0 rn m — 0123456789.
      </p>

      <md-outlined-button @click=${()=>T.reset()}>Restaurar padrões</md-outlined-button>
    `}};customElements.define(`config-accessibility-view`,na);var ra=`appshell.config.js`,ia=/^G-[A-Z0-9]+$/i,aa=/^[A-Za-z0-9_-]+=*$/,oa=[`none`,`ga4`];function sa(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function ca(e,t=`createAppShell`){let n=e=>{throw Error(`${t}: ${e}`)};if(e==null)return{provider:`none`};sa(e)||n(`"analytics" deve ser um objeto`);let{provider:r=`ga4`,id:i=``,cookiePrefix:a,params:o={},requireConsent:s=!0,privacyUrl:c}=e;return oa.includes(r)||n(`analytics.provider não reconhece "${r}" (use "ga4" ou "none")`),r===`none`||!i?{provider:`none`}:(ia.test(i)||n(`analytics.id "${i}" não é um Measurement ID do GA4 (G-XXXXXXXXXX)`),a!==void 0&&typeof a!=`string`&&n(`analytics.cookiePrefix deve ser uma string`),(typeof o!=`object`||!o)&&n(`analytics.params deve ser um objeto`),typeof s!=`boolean`&&n(`analytics.requireConsent deve ser true ou false`),c!==void 0&&typeof c!=`string`&&n(`analytics.privacyUrl deve ser uma string`),{provider:`ga4`,id:i,cookiePrefix:a,params:o,requireConsent:s,privacyUrl:c})}var la={config:{title:`SitePrint 3D — Bambu Lab A1`,storagePrefix:`siteprint3d`,analytics:{requireConsent:!1},push:{vapidPublicKey:``},backends:{}},sources:{title:`appshell.config.js`}};function ua(e,t=la){return t.sources[e]??null}function da(e,t=la.config){if(!e||typeof e!=`object`)return e;let n={...e};if(n.title===void 0&&t.title!==void 0&&(n.title=t.title),n.debug===void 0&&t.debug!==void 0&&(n.debug=t.debug),e.analytics!==null&&(t.analytics||e.analytics)&&(n.analytics={...t.analytics,...e.analytics},n.analytics.cookiePrefix===void 0&&t.storagePrefix&&(n.analytics.cookiePrefix=t.storagePrefix)),e.push!==null&&(t.push||e.push)&&(n.push={...t.push,...e.push}),e.share!==null&&(t.share!==void 0||e.share!==void 0)){if(e.share===!1||e.share===void 0&&t.share===!1)n.share=!1;else{let r=sa(t.share)?t.share:t.share?{enabled:!0}:{},i=sa(e.share)?e.share:e.share?{enabled:!0}:{};n.share={...r,...i}}}else e.share===null&&(n.share=null);return n}var fa=`appshell-push-click`;function pa(e){let t=(e+`=`.repeat((4-e.length%4)%4)).replace(/-/g,`+`).replace(/_/g,`/`);return Uint8Array.from(atob(t),e=>e.charCodeAt(0))}function ma(e){if(e==null)return null;if(typeof e!=`object`)throw Error(`createAppShell: "push" deve ser um objeto`);let{vapidPublicKey:t=``,onSubscribe:n,onUnsubscribe:r}=e;if(typeof t!=`string`)throw Error(`createAppShell: push.vapidPublicKey deve ser uma string`);if(!t)return null;if(!aa.test(t))throw Error(`createAppShell: push.vapidPublicKey deve ser a chave pública VAPID em base64url`);if(typeof n!=`function`)throw Error(`createAppShell: push.onSubscribe é obrigatório (é ele que entrega a inscrição ao backend) — ou declare push.backend + push.path no appshell.config.js`);if(r!==void 0&&typeof r!=`function`)throw Error(`createAppShell: push.onUnsubscribe deve ser uma função`);return{vapidPublicKey:t,onSubscribe:n,onUnsubscribe:r}}function ha(e){let t=new URL(e),n=t.searchParams.get(fa);if(n===null)return{click:null,cleanUrl:e};t.searchParams.delete(fa);let r=null;try{r=JSON.parse(n)}catch{}return{click:r,cleanUrl:t.href}}function ga({win:e=globalThis,nav:t=globalThis.navigator,Notification:n=globalThis.Notification,storage:r=()=>globalThis.localStorage}={}){let i=new Set,a=null,o=!1,s=()=>ut(`push:endpoint`);function c(e,t={}){i.forEach(n=>n({type:e,...t}))}function l(){try{return r()?.getItem(s())??null}catch{return null}}function u(e){try{e?r()?.setItem(s(),e):r()?.removeItem(s())}catch{}}async function d(){return g.isSupported()?await(await t.serviceWorker.getRegistration())?.pushManager.getSubscription()??null:null}async function f(){if(!a)return;let e=await d(),t=l();if(!e||e.endpoint===t)return;let n=e.toJSON();await a.onSubscribe(n),u(e.endpoint),t&&c(`subscription-change`,{subscription:n})}function p(e){e&&c(`clicked`,{url:e.url??null,data:e.data??{},action:e.action??null})}function m(t){let{type:n,payload:r}=t.data??{};n===`appshell:push-received`?c(`received`,{title:r.title,body:r.body,url:r.url,data:r.data}):n===`appshell:push-clicked`?(p(r),r?.url&&e.location.assign(new URL(r.url,e.location.href).href)):n===`appshell:push-subscription-change`&&f().catch(e=>console.error(`[appshell] push: falha ao reentregar a inscrição`,e))}async function h(){try{let e=await t.permissions?.query({name:`notifications`});e&&(e.onchange=()=>c(`permission-change`,{permission:g.permission()}))}catch{}}let g={isSupported(){return!!(t?.serviceWorker&&e.PushManager&&n)},isConfigured(){return a!==null},isAvailable(){return a!==null&&g.isSupported()},permission(){return n?.permission??`unsupported`},async isActive(){return a!==null&&await d()!==null},async enable(){if(!a)throw Error(`Este app não envia notificações.`);if(!g.isSupported())throw Error(`Este navegador não suporta notificações.`);let e=g.permission(),r=e===`granted`?e:await n.requestPermission();if(r!==e&&c(`permission-change`,{permission:r}),r!==`granted`)throw Error(r===`denied`?`As notificações estão bloqueadas. Libere-as nas configurações do navegador para este site.`:`Permissão não concedida.`);if(!await t.serviceWorker.getRegistration())throw Error(`O app ainda está terminando de instalar. Tente de novo em instantes.`);let i=await(await t.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pa(a.vapidPublicKey)}),o=i.toJSON();try{await a.onSubscribe(o)}catch(e){throw await i.unsubscribe().catch(()=>{}),e}return u(i.endpoint),c(`subscribed`,{subscription:o}),o},async disable(){let e=await d();e&&(await a?.onUnsubscribe?.(e.toJSON()),await e.unsubscribe(),u(null),c(`unsubscribed`))},subscribe(e){return i.add(e),()=>i.delete(e)},use(n){if(a=n,!g.isSupported())return;o||(o=!0,t.serviceWorker.addEventListener(`message`,m),h());let{click:r,cleanUrl:i}=ha(e.location.href);i!==e.location.href&&e.history?.replaceState(e.history.state,``,i),p(r),f().catch(e=>console.error(`[appshell] push: falha ao reentregar a inscrição`,e))}};return g}var U=ga(),_a=class extends w{static properties={_active:{state:!0},_permission:{state:!0},_busy:{state:!0},_error:{state:!0}};static styles=o`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 4px;
    }
    .breadcrumb {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.85rem;
      margin: 0 0 24px;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: 1rem;
    }
    .hint {
      margin-top: 8px;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    .error {
      margin-top: 8px;
      color: var(--md-sys-color-error);
    }
  `;constructor(){super(),this._active=null,this._permission=U.permission(),this._busy=!1,this._error=``}connectedCallback(){super.connectedCallback(),this._refresh(),this._unsubscribe=U.subscribe(({type:e})=>{(e===`permission-change`||e===`subscription-change`)&&this._refresh()})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}async _refresh(){this._permission=U.permission(),this._active=U.isSupported()?await U.isActive():!1}async _toggle(e){let t=e.target.selected;this._busy=!0,this._error=``;try{t?await U.enable():await U.disable(),ot(t?`Notificações ativadas`:`Notificações desativadas`)}catch(e){this._error=e.message||`Não foi possível mudar as notificações. Tente de novo.`}finally{this._busy=!1,await this._refresh(),e.target.selected=this._active}}_statusText(){return U.isSupported()?this._permission===`denied`?`As notificações deste site estão bloqueadas no navegador. Para ativá-las, libere-as nas permissões do site (o ícone ao lado do endereço) e volte aqui.`:this._active===null?`Verificando…`:this._active?`Você recebe avisos do app mesmo com ele fechado. Desligue quando quiser.`:`Ligue para receber avisos do app mesmo com ele fechado. O navegador vai pedir sua permissão.`:`Este navegador não recebe notificações deste app. No iPhone e no iPad, instale o app na tela inicial (Compartilhar › Adicionar à Tela de Início) e abra-o por lá.`}render(){let e=this._busy||this._active===null||!U.isSupported()||this._permission===`denied`;return x`
      <p class="breadcrumb">Config &rsaquo; Notificações</p>
      <h1>Notificações</h1>
      <label>
        Receber notificações neste aparelho
        <md-switch ?selected=${!!this._active} ?disabled=${e} @change=${this._toggle}></md-switch>
      </label>
      <p class="hint">${this._statusText()}</p>
      ${this._error?x`<p class="error" role="alert">${this._error}</p>`:``}
    `}};customElements.define(`config-notifications-view`,_a);var va=[`granted`,`denied`],ya=new Set;function ba(){return ut(`consent:analytics`)}function xa(){return globalThis.localStorage??null}function Sa(e=xa()){try{let t=e?.getItem(ba());return va.includes(t)?t:null}catch{return null}}var Ca={get(e){return Sa(e)},set(e,t=xa()){if(!va.includes(e))throw Error(`consentService.set: valor inválido "${e}" (use "granted" ou "denied")`);try{t?.setItem(ba(),e)}catch{}ya.forEach(t=>t(e))},subscribe(e){return ya.add(e),()=>ya.delete(e)}},wa=class extends w{static properties={privacyUrl:{},_consent:{state:!0}};static styles=o`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 4px;
    }
    .breadcrumb {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.85rem;
      margin: 0 0 24px;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: 1rem;
    }
    .hint {
      margin-top: 8px;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    a {
      color: var(--md-sys-color-primary);
    }
  `;constructor(){super(),this._consent=Ca.get()}connectedCallback(){super.connectedCallback(),this._unsubscribe=Ca.subscribe(e=>this._consent=e)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}_statusText(){return this._consent===`granted`?`Você autorizou a medição de uso.`:this._consent===`denied`?`Você recusou a medição de uso. Nenhum dado é enviado.`:`Você ainda não respondeu. Enquanto isso, nenhum dado é enviado.`}render(){return x`
      <p class="breadcrumb">Config &rsaquo; Privacidade</p>
      <h1>Privacidade</h1>
      <label>
        Permitir medição de uso (Google Analytics)
        <md-switch
          ?selected=${this._consent===`granted`}
          @change=${e=>Ca.set(e.target.selected?`granted`:`denied`)}
        ></md-switch>
      </label>
      <p class="hint">
        ${this._statusText()} A medição registra quais telas do app são abertas, para
        sabermos o que melhorar — nunca o conteúdo da sua conta. Ao desligar, os cookies do
        Google Analytics deste app são apagados.
        ${this.privacyUrl?x`<a href=${this.privacyUrl} target="_blank" rel="noopener">Política de privacidade</a>`:``}
      </p>
    `}};customElements.define(`config-privacy-view`,wa);var Ta=5e3,Ea=3e4,Da=[502,503,504],Oa=class extends Error{constructor(e,{backend:t,code:n,status:r=0,body:i=null}={}){super(e),this.name=`BackendError`,this.backend=t,this.code=n,this.status=r,this.body=i}},ka={401:`Sua sessão expirou. Entre de novo.`,403:`Você não tem permissão para isso.`,404:`Não encontrado.`,408:`O servidor demorou demais para responder.`,429:`Muitas tentativas seguidas. Espere um pouco e tente de novo.`};function Aa(e,t){let n=typeof t==`object`&&t?t.message??t.error:null;return e>=400&&e<500&&!ka[e]&&typeof n==`string`&&n?n:ka[e]?ka[e]:e>=500?`O servidor teve um problema. Tente de novo em instantes.`:`Não foi possível concluir a operação.`}function ja(e,t=``,n={}){if(/^[a-z][a-z0-9+.-]*:/i.test(t)||t.startsWith(`//`))return null;let r=t?`${e.replace(/\/+$/,``)}/${t.replace(/^\/+/,``)}`:e,i=new URLSearchParams;for(let[e,t]of Object.entries(n??{}))if(t!=null)for(let n of Array.isArray(t)?t:[t])i.append(e,n);let a=i.toString();return a?`${r}${r.includes(`?`)?`&`:`?`}${a}`:r}function Ma(e){return typeof e!=`object`||!e?typeof e==`number`||typeof e==`boolean`:Object.prototype.toString.call(e)===`[object Object]`||Array.isArray(e)}async function Na(e){if(e.status===204||e.status===205)return null;let t=await e.text();if(!t)return null;if((e.headers.get(`content-type`)??``).includes(`json`))try{return JSON.parse(t)}catch{return t}return t}function Pa({fetch:e=(...e)=>globalThis.fetch(...e),now:t=()=>Date.now(),setTimeout:n=(...e)=>globalThis.setTimeout(...e),clearTimeout:r=(...e)=>globalThis.clearTimeout(...e)}={}){let i={},a=async()=>null,o=new Map,s=new Set,c=new Map;function l(e){s.forEach(t=>t(e))}function u(e){return o.get(e)??{reachable:null,checkedAt:null,error:null}}function d(e,n,r=null){let a=u(e).reachable;o.set(e,{reachable:n,checkedAt:t(),error:r}),a!==n&&l({type:n?`reachable`:`unreachable`,backend:e,url:i[e]?.url??``,error:r})}function f(e){let t=i[e];if(!t){let t=Object.keys(i);throw new Oa(`Backend "${e}" não declarado no appshell.config.js${t.length?` (há: ${t.join(`, `)})`:``}.`,{backend:e,code:`not-configured`})}if(!t.url)throw new Oa(`O endereço do backend "${e}" não está configurado.`,{backend:e,code:`not-configured`});return t}async function p(t,i,a,o){o?.throwIfAborted();let s=new AbortController,c=!1,l=n(()=>{c=!0,s.abort()},a),u=()=>s.abort();o?.addEventListener(`abort`,u);try{return{response:await e(t,{...i,signal:s.signal})}}catch(e){if(o?.aborted)throw e;return{error:e,timedOut:c}}finally{r(l),o?.removeEventListener(`abort`,u)}}async function m(e,t,n,{query:r,body:i,headers:o={},timeoutMs:s,signal:c}={}){let u=f(e),m=ja(u.url,n,r);if(m===null)throw new Oa(`Caminho inválido "${n}": use um caminho relativo ao backend "${e}".`,{backend:e,code:`bad-path`});let h={method:t,headers:{Accept:`application/json`,...o}};if(i!==void 0&&(Ma(i)?(h.body=JSON.stringify(i),h.headers[`Content-Type`]??=`application/json`):h.body=i),u.auth===`bearer`&&!h.headers.Authorization){let e=await a();e&&(h.headers.Authorization=`Bearer ${e}`)}let{response:g,error:ee,timedOut:te}=await p(m,h,s??u.timeoutMs??15e3,c);if(!g){let t=te?`O servidor demorou demais para responder.`:`Não foi possível falar com o servidor. Verifique sua conexão.`;throw d(e,!1,t),new Oa(t,{backend:e,code:te?`timeout`:`network`,body:ee})}let _=Da.includes(g.status);d(e,!_,_?Aa(g.status):null),g.status===401&&l({type:`unauthorized`,backend:e,url:u.url,status:401});let v=await Na(g);if(!g.ok)throw new Oa(Aa(g.status,v),{backend:e,code:`http`,status:g.status,body:v});return v}function h(e){let t=t=>(n,r)=>m(e,t,n,r);return{name:e,get url(){return i[e]?.url??``},request:(t,n,r)=>m(e,t,n,r),get:t(`GET`),delete:t(`DELETE`),post:(t,n,r)=>m(e,`POST`,t,{...r,body:n}),put:(t,n,r)=>m(e,`PUT`,t,{...r,body:n}),patch:(t,n,r)=>m(e,`PATCH`,t,{...r,body:n}),check:t=>g.check(e,t)}}let g={use(e={},{getAccessToken:t}={}){i=e??{},t&&(a=t),o.clear(),c.clear()},backend(e){return c.has(e)||c.set(e,h(e)),c.get(e)},list(){return Object.entries(i).map(([e,t])=>({name:e,url:t.url,auth:t.auth??`none`,health:t.health??null,timeoutMs:t.timeoutMs??15e3}))},status:u,async check(e,{force:n=!0}={}){let r=i[e];if(!r?.url||!r.health)return u(e);let a=u(e).checkedAt;if(!n&&a!==null&&t()-a<Ea)return u(e);let{response:o,timedOut:s}=await p(ja(r.url,r.health),{method:`GET`,headers:{Accept:`application/json`}},Math.min(r.timeoutMs??15e3,Ta));return o?o.status>=500?d(e,!1,`Respondeu com erro ${o.status}.`):d(e,!0):d(e,!1,s?`Não respondeu a tempo.`:`Sem resposta.`),u(e)},async checkAll({force:e=!1}={}){await Promise.all(Object.keys(i).map(t=>g.check(t,{force:e})))},subscribe(e){return s.add(e),()=>s.delete(e)}};return g}var W=Pa();function Fa(e){return W.backend(e)}var Ia=class extends w{static properties={_tick:{state:!0},_checking:{state:!0}};static styles=o`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 4px;
    }
    .breadcrumb {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.85rem;
      margin: 0 0 24px;
    }
    .hint {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    .backend {
      margin: 16px 0;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: 12px;
    }
    h2 {
      font-size: 1.1rem;
      margin: 0 0 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    dl {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 4px 16px;
      margin: 0;
      font-size: 0.9rem;
    }
    dt {
      color: var(--md-sys-color-on-surface-variant);
    }
    dd {
      margin: 0;
      overflow-wrap: anywhere;
    }
    code {
      font-size: 0.85em;
    }
    .ok {
      color: var(--md-sys-color-primary);
    }
    .down,
    .unset {
      color: var(--md-sys-color-error);
    }
    md-icon {
      --md-icon-size: 20px;
    }
    md-outlined-button {
      margin-top: 12px;
    }
  `;constructor(){super(),this._tick=0,this._checking=new Set}connectedCallback(){super.connectedCallback(),this._unsubscribe=W.subscribe(()=>this._tick++)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}async _check(e){this._checking=new Set([...this._checking,e]);let{reachable:t}=await W.check(e);this._checking=new Set([...this._checking].filter(t=>t!==e)),ot(`${e}: ${t?`respondendo`:`não responde`}`)}_source(e){let t=ua(`backends.${e}.url`);return t?t===`appshell.config.js`?ra:`variável de ambiente ${t}`:`não configurado`}_status({name:e,url:t,health:n}){if(!t)return x`<span class="unset">Endereço não configurado</span>`;if(this._checking.has(e))return x`Verificando…`;let{reachable:r,checkedAt:i,error:a}=W.status(e),o=i?` · ${new Date(i).toLocaleTimeString()}`:``;return r===!0?x`<span class="ok">Respondendo${o}</span>`:r===!1?x`<span class="down">Não responde${a?` (${a})`:``}${o}</span>`:n?`Ainda não verificado`:`Sem checagem de saúde (health) — o estado aparece após a primeira chamada`}_icon(e,t){let{reachable:n}=W.status(e);return t?n===!0?x`<md-icon class="ok">cloud_done</md-icon>`:n===!1?x`<md-icon class="down">cloud_off</md-icon>`:x`<md-icon>cloud</md-icon>`:x`<md-icon class="unset">link_off</md-icon>`}_renderBackend(e){let{name:t,url:n,auth:r,health:i,timeoutMs:a}=e;return x`
      <section class="backend" aria-labelledby="b-${t}">
        <h2 id="b-${t}">${this._icon(t,n)} ${t}</h2>
        <dl>
          <dt>Endereço</dt>
          <dd>${n?x`<code>${n}</code>`:x`<span class="unset">—</span>`}</dd>
          <dt>Definido em</dt>
          <dd>${this._source(t)}</dd>
          <dt>Login</dt>
          <dd>${r===`bearer`?`Envia o token de quem está logado (Bearer)`:`Não envia`}</dd>
          <dt>Tempo limite</dt>
          <dd>${a/1e3} s</dd>
          <dt>Estado</dt>
          <dd role="status">${this._status(e)}</dd>
        </dl>
        ${n&&i?x`<md-outlined-button ?disabled=${this._checking.has(t)} @click=${()=>this._check(t)}
              >Verificar agora</md-outlined-button
            >`:``}
      </section>
    `}render(){let e=W.list();return x`
      <p class="breadcrumb">Config &rsaquo; Backend</p>
      <h1>Backend</h1>
      <p class="hint">
        Os servidores que este app usa. Os endereços são definidos pelo app — em
        <code>${ra}</code> ou, por ambiente, em variáveis
        <code>VITE_APPSHELL_BACKENDS_&lt;NOME&gt;_URL</code> — e não podem ser alterados por aqui.
      </p>
      ${e.length?e.map(e=>this._renderBackend(e)):x`<p>
            Nenhum backend declarado. Declare em <code>backends</code> no
            <code>${ra}</code>, por exemplo
            <code>backends: { api: { url: 'https://api.exemplo.com', auth: 'bearer', health: '/health' } }</code>.
          </p>`}
    `}};customElements.define(`config-backend-view`,Ia);var La=class extends w{static properties={privacyUrl:{}};static styles=o`
    :host {
      display: block;
      border-top: 1px solid var(--md-sys-color-outline-variant);
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px 16px;
      max-width: 960px;
      margin: 0 auto;
      padding: 12px 16px;
    }
    p {
      flex: 1 1 320px;
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.4;
    }
    a {
      color: var(--md-sys-color-primary);
    }
    .actions {
      display: flex;
      gap: 8px;
      margin-left: auto;
    }
  `;render(){return x`
      <div class="content" role="region" aria-label="Consentimento de cookies">
        <p>
          Usamos o Google Analytics para entender como o app é usado — quais telas são abertas,
          sem nenhum dado seu de conta. Isso grava cookies no seu navegador. Você pode mudar de
          ideia a qualquer momento em Config › Privacidade.
          ${this.privacyUrl?x`<a href=${this.privacyUrl} target="_blank" rel="noopener">Saiba mais</a>`:``}
        </p>
        <div class="actions">
          <md-outlined-button @click=${()=>Ca.set(`denied`)}>Recusar</md-outlined-button>
          <md-outlined-button @click=${()=>Ca.set(`granted`)}>Aceitar</md-outlined-button>
        </div>
      </div>
    `}};customElements.define(`consent-banner`,La);var Ra=class extends w{static properties={label:{},expanded:{type:Boolean},nested:{type:Boolean,reflect:!0}};static styles=o`
    :host {
      display: block;
    }
    details > summary {
      list-style: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      height: 48px;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    :host([nested]) details > summary {
      padding-left: 32px;
      height: 40px;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    .chevron {
      transition: transform 0.2s ease;
      --md-icon-size: 20px;
    }
    details[open] .chevron {
      transform: rotate(180deg);
    }
  `;collapse(){let e=this.renderRoot.querySelector(`details`);e&&(e.open=!1)}render(){return x`
      <details ?open=${this.expanded}>
        <summary>
          <span>${this.label}</span>
          <md-icon class="chevron">expand_more</md-icon>
        </summary>
        <slot></slot>
      </details>
    `}};customElements.define(`nav-accordion`,Ra);function za(e){let t=e?.connection;return t?.type&&t.type!==`unknown`?t.type:t?.effectiveType??null}function Ba({win:e=globalThis,nav:t=globalThis.navigator}={}){let n=new Set,r=t?.onLine??!0,i=za(t);function a(e){let t={online:r,kind:i,change:e};n.forEach(e=>e(t))}let o=()=>{r=!0,i=za(t),a(`online`)},s=()=>{r=!1,a(`offline`)},c=()=>{let e=za(t);e!==i&&(i=e,r&&a(`change`))};function l(){r=t?.onLine??!0,i=za(t),e.addEventListener?.(`online`,o),e.addEventListener?.(`offline`,s),t?.connection?.addEventListener?.(`change`,c)}function u(){e.removeEventListener?.(`online`,o),e.removeEventListener?.(`offline`,s),t?.connection?.removeEventListener?.(`change`,c)}return{isOnline(){return n.size?r:t?.onLine??!0},kind(){return n.size?i:za(t)},subscribe(e){return n.size||l(),n.add(e),()=>{n.delete(e)&&!n.size&&u()}}}}var Va=Ba(),Ha=class extends w{static properties={_online:{state:!0},_kind:{state:!0}};static styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    md-icon {
      --md-icon-size: 16px;
    }
    .offline {
      color: var(--md-sys-color-error);
    }
  `;constructor(){super(),this._online=Va.isOnline(),this._kind=Va.kind()}connectedCallback(){super.connectedCallback(),this._online=Va.isOnline(),this._kind=Va.kind(),this._unsubscribe=Va.subscribe(({online:e,kind:t,change:n})=>{this._online=e,this._kind=t,n===`online`&&ot(`Conexão restabelecida`),n===`offline`&&ot(`Sem conexão. O app continua funcionando com o que já está em cache.`)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}render(){let e=this._online?this._kind?this._kind.toUpperCase():`Online`:`Offline`,t=this._online?`Conectado${this._kind?` · ${this._kind}`:``}`:`Sem conexão — o app continua funcionando com o que já está em cache`;return x`
      <span class=${this._online?``:`offline`} title=${t}>
        <md-icon>${this._online?`wifi`:`wifi_off`}</md-icon>
        ${e}
      </span>
    `}};customElements.define(`connection-status`,Ha);var Ua=new Intl.DateTimeFormat(`pt-BR`,{weekday:`short`,day:`2-digit`,month:`2-digit`}),Wa=new Intl.DateTimeFormat(`pt-BR`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),Ga=class extends w{static properties={_now:{state:!0}};static styles=o`
    :host {
      display: inline-flex;
      font-variant-numeric: tabular-nums;
    }
  `;constructor(){super(),this._now=new Date}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}render(){return x`<span>${Ua.format(this._now)} · ${Wa.format(this._now)}</span>`}};customElements.define(`app-clock`,Ga);var Ka=class extends w{static styles=o`
    :host {
      display: inline-flex;
      opacity: 0.8;
    }
  `;render(){return x`<span title="Versão do app">v${`0.1.0`}</span>`}};customElements.define(`app-version`,Ka);var qa=class extends w{static styles=o`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex: 0 0 auto;
      min-height: 32px;
      padding: 0 12px;
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface-variant);
      border-top: 1px solid var(--md-sys-color-outline);
      font-size: 0.75rem;
    }
    .start,
    .end {
      display: flex;
      align-items: center;
      gap: 12px;
      overflow: hidden;
      white-space: nowrap;
    }
  `;render(){return x`
      <div class="start">
        <connection-status></connection-status>
        <app-clock></app-clock>
      </div>
      <div class="end">
        <slot></slot>
        <app-version></app-version>
      </div>
    `}};customElements.define(`app-footer`,qa);var Ja=`not-found`;function G(e){let t=e.split(`/`).filter(Boolean),n=t.at(-1),r=n?.startsWith(`*`)?n.slice(1):null,i=r===null?t:t.slice(0,-1);if(i.some(e=>e.startsWith(`*`)))throw Error(`pattern('${e}'): *${i.find(e=>e.startsWith(`*`)).slice(1)} só pode aparecer no fim.`);return e=>{if(r===null?e.length!==i.length:e.length<=i.length)return null;let t={};for(let n=0;n<i.length;n++)if(i[n].startsWith(`:`))t[i[n].slice(1)]=e[n];else if(i[n]!==e[n])return null;return r!==null&&(t[r]=e.slice(i.length).join(`/`)),t}}var Ya=[{name:`home`,match:G(``)},{name:`conta-entrar`,match:G(`conta/entrar`)},{name:`conta-cadastro`,match:G(`conta/cadastro`)},{name:`conta-esqueci-senha`,match:G(`conta/esqueci-senha`)},{name:`conta-redefinir-senha`,match:G(`conta/redefinir-senha`)},{name:`conta-alterar-senha`,match:G(`conta/alterar-senha`)},{name:`conta`,match:G(`conta`)},{name:`config-backend`,match:e=>G(`config/backend`)(e)??G(`config/backend/servicos-rest`)(e)},{name:`config-privacidade`,match:G(`config/privacidade`)},{name:`config-acessibilidade`,match:G(`config/acessibilidade`)},{name:`config-notificacoes`,match:G(`config/notificacoes`)}];function Xa(e){return/(^|[&#/])access_token=|(^|[&#/])error_description=/.test(e)}function Za(e){return/(^|[&#/?])type=recovery(&|$)/.test(e)}function Qa(e){try{return decodeURIComponent(e)}catch{return e}}function $a(e){let t=e.replace(/^#\/?/,``),n=t.indexOf(`?`),r=n===-1?t:t.slice(0,n),i=n===-1?``:t.slice(n+1);return{segments:r.split(`/`).filter(Boolean).map(Qa),query:Object.fromEntries(new URLSearchParams(i))}}function eo(e,t=[]){let{segments:n,query:r}=$a(e);if(Xa(e))return{name:Za(e)?`conta-redefinir-senha`:`conta`,params:{},query:{},segments:[]};for(let e of[...t,...Ya]){let t=e.match(n,r);if(t)return{name:e.name,params:t,query:r,segments:n}}return{name:Ja,params:{},query:r,segments:n}}function to(e=``,t={}){let n=String(e).split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`),r=new URLSearchParams;for(let[e,n]of Object.entries(t))n!=null&&r.append(e,n);let i=r.toString();return`#/${n}${i?`?${i}`:``}`}function K(e,t){location.hash=to(e,t)}function no(e,{routes:t=[]}={}){let n=()=>e(eo(location.hash,t));return window.addEventListener(`hashchange`,n),n(),()=>window.removeEventListener(`hashchange`,n)}function ro(){K(``)}function io(){K(`conta/entrar`)}function ao(){K(`conta/cadastro`)}function oo(){K(`conta/esqueci-senha`)}function so(){K(`conta/alterar-senha`)}function co(){K(`conta`)}function lo(){K(`config/backend`)}function uo(){K(`config/privacidade`)}function fo(){K(`config/acessibilidade`)}function po(){K(`config/notificacoes`)}var q=ut(`auth:users`),mo=ut(`auth:session`),ho=ut(`auth:password-resets`),go=18e5,_o=6,vo=[`signIn`,`signOut`,`signUp`,`requestPasswordReset`,`resetPassword`,`changePassword`],yo=[`signIn`,`signOut`];function bo(e,t){try{let n=globalThis.localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function xo(e,t){t===null?globalThis.localStorage.removeItem(e):globalThis.localStorage.setItem(e,JSON.stringify(t))}function So(e){return e?{id:e.id,name:e.name,email:e.email,createdAt:e.createdAt}:null}function Co(){let e=bo(mo,null);return e?So(bo(q,[]).find(t=>t.id===e.userId)):null}function wo(){if(!globalThis.crypto?.subtle||!globalThis.crypto?.randomUUID)throw Error(`Login local indisponível: abra o app via HTTPS ou localhost.`)}async function To(e){wo();let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return Array.from(new Uint8Array(t),e=>e.toString(16).padStart(2,`0`)).join(``)}function Eo(e,t){return To(`${t}:${e}`)}async function Do(e,t){let n=crypto.randomUUID();return{...e,salt:n,passwordHash:await Eo(t,n)}}function Oo(e){if(!e||e.length<_o)throw Error(`A senha precisa ter pelo menos ${_o} caracteres.`)}function ko(e){xo(q,bo(q,[]).map(t=>t.id===e.id?e:t))}var Ao={passwordMinLength:_o,init({setUser:e}){e(Co());let t=t=>{(t.key===mo||t.key===q)&&e(Co())};return globalThis.addEventListener?.(`storage`,t),()=>globalThis.removeEventListener?.(`storage`,t)},async signUp({name:e,email:t,password:n}){Oo(n),wo();let r=bo(q,[]);if(r.some(e=>e.email===t))throw Error(`Já existe uma conta com este e-mail.`);let i=await Do({id:crypto.randomUUID(),name:e,email:t,createdAt:new Date().toISOString()},n);return xo(q,[...r,i]),xo(mo,{userId:i.id}),So(i)},async signIn({email:e,password:t}){let n=bo(q,[]).find(t=>t.email===e);if(!n||await Eo(t??``,n.salt)!==n.passwordHash)throw Error(`E-mail ou senha inválidos.`);return xo(mo,{userId:n.id}),So(n)},async signOut(){xo(mo,null)},async requestPasswordReset({email:e,redirectTo:t}){wo();let n=bo(q,[]).find(t=>t.email===e);if(!n)return{};let r=crypto.randomUUID();return xo(ho,[...bo(ho,[]).filter(e=>e.userId!==n.id&&e.expiresAt>Date.now()),{tokenHash:await To(r),userId:n.id,expiresAt:Date.now()+go}]),{previewUrl:`${t}${t.includes(`?`)?`&`:`?`}token=${encodeURIComponent(r)}`}},async resetPassword({token:e,password:t}){Oo(t);let n=Error(`Este link de redefinição é inválido ou expirou. Peça um novo.`);if(!e)throw n;let r=await To(e),i=bo(ho,[]),a=i.find(e=>e.tokenHash===r&&e.expiresAt>Date.now()),o=a&&bo(q,[]).find(e=>e.id===a.userId);if(!o)throw n;return ko(await Do(o,t)),xo(ho,i.filter(e=>e.userId!==o.id)),null},async changePassword({user:e,currentPassword:t,newPassword:n}){Oo(n);let r=bo(q,[]).find(t=>t.id===e.id);if(!r||await Eo(t??``,r.salt)!==r.passwordHash)throw Error(`Senha atual incorreta.`);ko(await Do(r,n))}},jo=new Set,Mo=new Set,J=null,No=null,Po=null;function Fo(e,t){Po=e??null,jo.forEach(e=>e(Po,t))}function Io(e){return String(e??``).trim().toLowerCase()}function Lo(e){if(!e)throw Error(`Informe seu e-mail.`)}function Ro(e){if(typeof J[e]!=`function`)throw Error(`Operação não disponível neste app.`)}function zo(e){if(!e||typeof e!=`object`)throw Error(`createAppShell: "auth" deve ser um objeto (o provedor de autenticação)`);for(let t of yo)if(typeof e[t]!=`function`)throw Error(`createAppShell: auth.${t} é obrigatório e deve ser uma função`);for(let t of[...vo,`init`,`getAccessToken`])if(e[t]!==void 0&&typeof e[t]!=`function`)throw Error(`createAppShell: auth.${t} deve ser uma função`);if(e.redirect!==void 0&&typeof e.redirect!=`boolean`)throw Error(`createAppShell: auth.redirect deve ser booleano`);let t=e.passwordMinLength;if(t!==void 0&&!(Number.isInteger(t)&&t>=1))throw Error(`createAppShell: auth.passwordMinLength deve ser um inteiro positivo`)}var Y={use(e){zo(e),No?.(),No=null,J=e,Fo(null,`providerChange`);let t=!1,n=J.init?.({setUser:(n,r)=>{J===e&&(Fo(n,r??(t?`external`:`restored`)),t=!0)}});typeof n==`function`&&(No=n)},supports(e){return typeof J?.[e]==`function`},isLocal(){return J===Ao},usesRedirect(){return J?.redirect===!0},passwordMinLength(){return J.passwordMinLength??_o},async getAccessToken(){return!Po||typeof J?.getAccessToken!=`function`?null:await J.getAccessToken()??null},getCurrentUser(){return Po},subscribe(e){return jo.add(e),e(Po),()=>jo.delete(e)},onSignUp(e){return Mo.add(e),()=>Mo.delete(e)},async signUp({name:e,email:t,password:n}){if(Ro(`signUp`),e=String(e??``).trim(),t=Io(t),!e)throw Error(`Informe seu nome.`);Lo(t);let r=await J.signUp({name:e,email:t,password:n});return Mo.forEach(e=>e(r)),Fo(r,`signUp`),r},async signIn({email:e,password:t}){let n=await J.signIn({email:Io(e),password:t});return Fo(n,`signIn`),n},async signOut(){await J.signOut(),Fo(null,`signOut`)},async requestPasswordReset({email:e,redirectTo:t=Bo()}){return Ro(`requestPasswordReset`),e=Io(e),Lo(e),await J.requestPasswordReset({email:e,redirectTo:t})??{}},async resetPassword({token:e=null,password:t}){Ro(`resetPassword`);let n=await J.resetPassword({token:e,password:t});return n&&Fo(n,`passwordReset`),n??null},async changePassword({currentPassword:e,newPassword:t}){if(Ro(`changePassword`),!Po)throw Error(`Entre na sua conta para trocar a senha.`);await J.changePassword({user:Po,currentPassword:e,newPassword:t})}};function Bo(){let{origin:e,pathname:t}=globalThis.location??{};return`${e??``}${t??``}${to(`conta/redefinir-senha`)}`}Y.use(Ao);var Vo=e=>ut(`notifications:${e}`),Ho=new Set,Uo=new Set,X=null,Wo=[];function Go(e){try{return JSON.parse(localStorage.getItem(Vo(e)))??[]}catch{return[]}}function Ko(e,t){localStorage.setItem(Vo(e),JSON.stringify(t)),e===X&&(Wo=t,qo())}function qo(){Ho.forEach(e=>e(Wo))}Y.subscribe(e=>{X=e?.id??null,Wo=X?Go(X):[],qo()}),Y.onSignUp(e=>{Jo.add(e.id,{title:`Bem-vindo(a), ${e.name}!`,body:`Sua conta foi criada. As notificações do app aparecerão aqui.`})}),globalThis.addEventListener?.(`storage`,e=>{X&&e.key===Vo(X)&&(Wo=Go(X),qo())});var Jo={subscribe(e){return Ho.add(e),e(Wo),()=>Ho.delete(e)},unreadCount(){return Wo.filter(e=>!e.read).length},add(e,{title:t,body:n=``}){let r={id:crypto.randomUUID(),title:t,body:n,read:!1,createdAt:new Date().toISOString()};return Ko(e,[r,...Go(e)]),Uo.forEach(t=>t(r,e)),r},onAdd(e){return Uo.add(e),()=>Uo.delete(e)},markRead(e){X&&Ko(X,Go(X).map(t=>t.id===e?{...t,read:!0}:t))},markAllRead(){X&&Ko(X,Go(X).map(e=>({...e,read:!0})))}},Yo=new Intl.DateTimeFormat(`pt-BR`,{day:`2-digit`,month:`2-digit`,hour:`2-digit`,minute:`2-digit`}),Xo=class extends w{static properties={_items:{state:!0}};static styles=o`
    :host {
      display: inline-flex;
      position: relative;
    }
    .badge {
      position: absolute;
      top: 4px;
      right: 4px;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 8px;
      background: var(--md-sys-color-error);
      color: var(--md-sys-color-on-error);
      font-size: 0.65rem;
      font-weight: 600;
      line-height: 16px;
      text-align: center;
      pointer-events: none;
    }
    md-menu {
      --md-menu-container-color: var(--md-sys-color-surface);
      min-width: 280px;
    }
    .menu-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 8px 4px 16px;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .empty {
      padding: 16px;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.875rem;
    }
    md-menu-item.unread [slot='headline'] {
      font-weight: 600;
    }
    md-menu-item md-icon[slot='start'] {
      color: var(--md-sys-color-primary);
    }
  `;constructor(){super(),this._items=[]}connectedCallback(){super.connectedCallback(),this._unsubscribe=Jo.subscribe(e=>this._items=e)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}_toggleMenu(){let e=this.renderRoot.querySelector(`md-menu`);e.open=!e.open}render(){let e=this._items.filter(e=>!e.read).length,t=e?`Notificações (${e} não lidas)`:`Notificações`;return x`
      <md-icon-button id="anchor" aria-label=${t} title=${t} @click=${this._toggleMenu}>
        <md-icon>${e?`notifications_active`:`notifications`}</md-icon>
      </md-icon-button>
      ${e?x`<span class="badge" aria-hidden="true">${e>99?`99+`:e}</span>`:``}

      <!-- popover: o menu vai para a top layer e não é cortado pelo header
           nem fica atrás do drawer/main (ver comentário em app-shell.js). -->
      <md-menu anchor="anchor" positioning="popover" menu-corner="start-end" anchor-corner="end-end">
        <div class="menu-header">
          <span>Notificações</span>
          ${e?x`<md-text-button @click=${()=>Jo.markAllRead()}>Marcar todas como lidas</md-text-button>`:``}
        </div>
        <md-divider></md-divider>
        ${this._items.length?this._items.map(e=>x`
                <md-menu-item class=${e.read?``:`unread`} @click=${()=>Jo.markRead(e.id)}>
                  <md-icon slot="start">${e.read?`drafts`:`mail`}</md-icon>
                  <div slot="headline">${e.title}</div>
                  ${e.body?x`<div slot="supporting-text">${e.body}</div>`:``}
                  <div slot="trailing-supporting-text">${Yo.format(new Date(e.createdAt))}</div>
                </md-menu-item>
              `):x`<div class="empty">Nenhuma notificação.</div>`}
      </md-menu>
    `}};customElements.define(`user-notifications`,Xo);var Zo=class extends w{static properties={_user:{state:!0}};static styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      font-size: 0.85rem;
      font-weight: 600;
    }
    md-menu {
      --md-menu-container-color: var(--md-sys-color-surface);
      min-width: 220px;
    }
    .who {
      padding: 8px 16px;
      line-height: 1.4;
    }
    .who .name {
      font-weight: 600;
    }
    .who .email {
      font-size: 0.8rem;
      color: var(--md-sys-color-on-surface-variant);
    }
  `;constructor(){super(),this._user=null}connectedCallback(){super.connectedCallback(),this._unsubscribe=Y.subscribe(e=>this._user=e)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}_initials(e){let t=e.trim().split(/\s+/);return((t[0]?.[0]??``)+(t.length>1?t.at(-1)[0]:``)).toUpperCase()}_toggleMenu(){let e=this.renderRoot.querySelector(`md-menu`);e.open=!e.open}render(){return this._user?x`
      <user-notifications></user-notifications>
      <md-icon-button
        id="anchor"
        aria-label=${`Conta de ${this._user.name}`}
        title=${this._user.name}
        @click=${this._toggleMenu}
      >
        <span class="avatar">${this._initials(this._user.name)}</span>
      </md-icon-button>
      <md-menu anchor="anchor" positioning="popover" menu-corner="start-end" anchor-corner="end-end">
        <div class="who">
          <div class="name">${this._user.name}</div>
          <div class="email">${this._user.email}</div>
        </div>
        <md-divider></md-divider>
        <md-menu-item @click=${co}>
          <md-icon slot="start">account_circle</md-icon>
          <div slot="headline">Minha conta</div>
        </md-menu-item>
        <md-menu-item @click=${()=>Y.signOut()}>
          <md-icon slot="start">logout</md-icon>
          <div slot="headline">Sair</div>
        </md-menu-item>
      </md-menu>
    `:x`
        <md-text-button @click=${io}>
          <md-icon slot="icon">login</md-icon>
          Entrar
        </md-text-button>
      `}};customElements.define(`user-status`,Zo);var Qo=class extends w{static properties={heading:{}};static styles=o`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 0 0 auto;
      min-height: 56px;
      padding: 0 8px;
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      border-bottom: 1px solid var(--md-sys-color-outline);
    }
    h1 {
      font-size: 1.1rem;
      margin: 0;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `;constructor(){super(),this.heading=`Fund Appshell`}render(){return x`
      <md-icon-button
        aria-label="Menu"
        @click=${()=>this.dispatchEvent(new CustomEvent(`menu-toggle`,{bubbles:!0,composed:!0}))}
      >
        <md-icon>menu</md-icon>
      </md-icon-button>
      <h1 @click=${ro}>${this.heading}</h1>
      <div class="actions">
        <slot></slot>
        <user-status></user-status>
      </div>
    `}};customElements.define(`app-header`,Qo);var $o=class extends w{static properties={mode:{reflect:!0},token:{},_user:{state:!0},_done:{state:!0},_error:{state:!0},_busy:{state:!0}};static styles=o`
    :host {
      display: block;
      max-width: 420px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 4px;
    }
    .subtitle {
      color: var(--md-sys-color-on-surface-variant);
      margin: 0 0 24px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    md-outlined-text-field {
      width: 100%;
    }
    md-filled-button {
      margin-top: 4px;
    }
    .error {
      color: var(--md-sys-color-error);
      font-size: 0.875rem;
      margin: 0;
    }
    .switch {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 24px;
      font-size: 0.875rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    .notice {
      margin-top: 32px;
      font-size: 0.8rem;
      color: var(--md-sys-color-on-surface-variant);
    }
    .profile {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 4px 16px;
      margin: 0 0 24px;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 12px;
      background: var(--md-sys-color-surface-variant);
    }
    .profile dt {
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.85rem;
    }
    .profile dd {
      margin: 0;
      word-break: break-all;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .forgot {
      align-self: flex-end;
      margin-top: -4px;
    }
    .done a {
      color: var(--md-sys-color-primary);
      word-break: break-all;
    }
  `;constructor(){super(),this.mode=`signin`,this.token=null,this._user=null,this._done=null,this._error=null,this._busy=!1}connectedCallback(){super.connectedCallback(),this._unsubscribe=Y.subscribe(e=>this._user=e)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}willUpdate(e){e.has(`mode`)&&(this._error=null,this._done=null)}_screen(){return this.mode===`reset`?`reset`:this._user?this.mode===`change`?`change`:`account`:this.mode===`change`?`signin`:this.mode}async _submit(e){e.preventDefault();let t=e.target;if(!t.reportValidity())return;let n=Object.fromEntries([...t.querySelectorAll(`md-outlined-text-field`)].map(e=>[e.name,e.value])),r=this._screen();if(this._error=null,`passwordConfirm`in n&&n.password!==n.passwordConfirm)this._error=`As senhas não conferem.`;else{this._busy=!0;try{switch(r){case`signup`:await Y.signUp(n),ro();break;case`forgot`:this._done=await Y.requestPasswordReset({email:n.email});break;case`reset`:this._done={user:await Y.resetPassword({token:this.token,password:n.password})};break;case`change`:await Y.changePassword({currentPassword:n.currentPassword,newPassword:n.password}),this._done={};break;default:await Y.signIn(n),ro()}}catch(e){this._error=e.message}finally{this._busy=!1}}}render(){let e=this._screen();return e===`account`?this._renderAccount():this._done?this._renderDone(e):[`forgot`,`reset`,`change`].includes(e)&&!Y.supports(es[e])?x`
        <h1>Senha</h1>
        <p class="subtitle">Este app não oferece essa operação.</p>
        <md-text-button @click=${io}>Voltar para o login</md-text-button>
      `:e===`forgot`?this._renderForgot():e===`reset`||e===`change`?this._renderNewPassword(e):this._renderForm(e)}_passwordField({name:e=`password`,label:t=`Senha`,autocomplete:n=`new-password`,hint:r=!0}={}){let i=Y.passwordMinLength();return x`<md-outlined-text-field
      name=${e}
      label=${t}
      type="password"
      autocomplete=${n}
      minlength=${r?i:0}
      supporting-text=${r?`Mínimo de ${i} caracteres.`:``}
      required
    ></md-outlined-text-field>`}_renderError(){return this._error?x`<p class="error" role="alert">${this._error}</p>`:``}_renderForgot(){return x`
      <h1>Esqueci minha senha</h1>
      <p class="subtitle">Informe o e-mail da sua conta e enviaremos um link para criar uma nova senha.</p>
      <form @submit=${this._submit} novalidate>
        <md-outlined-text-field
          name="email"
          label="E-mail"
          type="email"
          autocomplete="email"
          required
        ></md-outlined-text-field>
        ${this._renderError()}
        <md-filled-button type="submit" ?disabled=${this._busy}>Enviar link</md-filled-button>
      </form>
      <p class="switch">Lembrou a senha? <md-text-button @click=${io}>Entrar</md-text-button></p>
    `}_renderNewPassword(e){let t=e===`change`;return x`
      <h1>${t?`Alterar senha`:`Criar nova senha`}</h1>
      <p class="subtitle">
        ${t?`Confirme a senha atual e escolha a nova.`:`Escolha a nova senha da sua conta.`}
      </p>
      <form @submit=${this._submit} novalidate>
        ${t?this._passwordField({name:`currentPassword`,label:`Senha atual`,autocomplete:`current-password`,hint:!1}):``}
        ${this._passwordField({label:`Nova senha`})}
        ${this._passwordField({name:`passwordConfirm`,label:`Confirmar nova senha`,hint:!1})}
        ${this._renderError()}
        <div class="actions">
          <md-filled-button type="submit" ?disabled=${this._busy}>Salvar senha</md-filled-button>
          ${t?x`<md-text-button type="button" @click=${co}>Cancelar</md-text-button>`:``}
        </div>
      </form>
    `}_renderDone(e){if(e===`forgot`){let{previewUrl:e}=this._done;return x`
        <h1>Verifique seu e-mail</h1>
        <p class="subtitle">
          Se houver uma conta com esse e-mail, você vai receber um link para criar uma nova senha.
        </p>
        ${e?x`<p class="notice done">
              Modo local de demonstração: nenhum e-mail é enviado. O link seria este:
              <a href=${e}>${e}</a>
            </p>`:``}
        <md-text-button @click=${io}>Voltar para o login</md-text-button>
      `}let t=e===`change`||this._done.user;return x`
      <h1>Senha alterada</h1>
      <p class="subtitle">
        ${t?`Sua nova senha já está valendo.`:`Sua nova senha já está valendo. Entre com ela.`}
      </p>
      ${t?x`<md-filled-button @click=${co}>Minha conta</md-filled-button>`:x`<md-filled-button @click=${io}>Entrar</md-filled-button>`}
    `}_renderAccount(){let e=new Date(this._user.createdAt).toLocaleDateString(`pt-BR`);return x`
      <h1>Minha conta</h1>
      <p class="subtitle">Você está conectado.</p>
      <dl class="profile">
        <dt>Nome</dt>
        <dd>${this._user.name}</dd>
        <dt>E-mail</dt>
        <dd>${this._user.email}</dd>
        <dt>Desde</dt>
        <dd>${e}</dd>
      </dl>
      <div class="actions">
        ${Y.supports(`changePassword`)?x`<md-outlined-button @click=${so}>
              <md-icon slot="icon">password</md-icon>
              Alterar senha
            </md-outlined-button>`:``}
        <md-outlined-button @click=${()=>Y.signOut()}>
          <md-icon slot="icon">logout</md-icon>
          Sair
        </md-outlined-button>
      </div>
    `}async _signInWithRedirect(){this._error=null,this._busy=!0;try{await Y.signIn({})}catch(e){this._error=e.message,this._busy=!1}}_renderRedirect(){return x`
      <h1>Entrar</h1>
      <p class="subtitle">Você será levado à página de login da sua conta e depois volta para o app.</p>
      ${this._renderError()}
      <md-filled-button ?disabled=${this._busy} @click=${this._signInWithRedirect}>
        <md-icon slot="icon">login</md-icon>
        Entrar
      </md-filled-button>
    `}_renderForm(e){if(Y.usesRedirect()&&!(e===`signup`&&Y.supports(`signUp`)))return this._renderRedirect();let t=e===`signup`&&Y.supports(`signUp`);return x`
      <h1>${t?`Criar conta`:`Entrar`}</h1>
      <p class="subtitle">
        ${t?`Preencha os dados abaixo para criar sua conta.`:`Acesse com seu e-mail e senha.`}
      </p>

      <form @submit=${this._submit} novalidate>
        ${t?x`<md-outlined-text-field
              name="name"
              label="Nome"
              autocomplete="name"
              required
            ></md-outlined-text-field>`:``}
        <md-outlined-text-field
          name="email"
          label="E-mail"
          type="email"
          autocomplete="email"
          required
        ></md-outlined-text-field>
        ${t?this._passwordField():this._passwordField({autocomplete:`current-password`,hint:!1})}
        ${!t&&Y.supports(`requestPasswordReset`)?x`<md-text-button class="forgot" type="button" @click=${oo}>
              Esqueci minha senha
            </md-text-button>`:``}
        ${t?x`<md-outlined-text-field
              name="passwordConfirm"
              label="Confirmar senha"
              type="password"
              autocomplete="new-password"
              required
            ></md-outlined-text-field>`:``}
        ${this._renderError()}
        <md-filled-button type="submit" ?disabled=${this._busy}>
          ${t?`Criar conta`:`Entrar`}
        </md-filled-button>
      </form>

      ${t?x`<p class="switch">Já tem conta? <md-text-button @click=${io}>Entrar</md-text-button></p>`:Y.supports(`signUp`)?x`<p class="switch">
              Não tem conta? <md-text-button @click=${ao}>Criar conta</md-text-button>
            </p>`:``}
      ${Y.isLocal()?x`<p class="notice">
            Modo local de demonstração: as contas ficam salvas apenas neste navegador até o backend
            de autenticação ser ligado.
          </p>`:``}
    `}},es={forgot:`requestPasswordReset`,reset:`resetPassword`,change:`changePassword`};customElements.define(`auth-view`,$o);var ts=class extends w{static properties={path:{}};static styles=o`
    :host {
      display: block;
      max-width: 640px;
      margin: 0 auto;
      padding: 16px 24px 64px;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 8px;
    }
    p {
      color: var(--md-sys-color-on-surface-variant);
    }
    code {
      background: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-on-surface-variant);
      padding: 1px 4px;
      border-radius: 4px;
      overflow-wrap: anywhere;
    }
  `;constructor(){super(),this.path=``}render(){return x`
      <h1>Página não encontrada</h1>
      <p>Não existe nada no endereço <code>#/${this.path}</code>.</p>
      <md-filled-button @click=${ro}>Ir para o início</md-filled-button>
    `}};customElements.define(`not-found-view`,ts);var ns=new Set([`access_token`,`refresh_token`,`id_token`,`token`,`code`,`password`,`senha`]);function rs(e,t={}){let n=Object.fromEntries(Object.entries(t.query??{}).filter(([e])=>!ns.has(e.toLowerCase())));return`${e}${to((t.segments??[]).join(`/`),n)}`}function is({route:e={},title:t=``,baseUrl:n=``}){let r=e.name??``;return{page_location:rs(n,e),page_title:t?`${t} — ${r}`:r,route_name:r}}function as(e){return`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(e)}`}function os(e){return{analytics_storage:e?`granted`:`denied`,ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`}}function ss(e,{doc:t,win:n,cookiePrefix:r,params:i}){n.dataLayer=n.dataLayer||[];function a(){n.dataLayer.push(arguments)}n.gtag=a,a(`consent`,`default`,os(!0)),a(`js`,new Date),a(`config`,e,{send_page_view:!1,...r?{cookie_prefix:r}:{},...i});let o=t.createElement(`script`);o.async=!0,o.src=as(e),t.head.appendChild(o)}function cs(e,t=``){let n=`${t}_ga`;return e===n||e.startsWith(`${n}_`)}function ls(e,t,n){let r=(e.cookie??``).split(`;`).map(e=>e.split(`=`)[0].trim()).filter(e=>e&&cs(e,n)),i=(t.location?.hostname??``).split(`.`),a=[null,...i.map((e,t)=>`.${i.slice(t).join(`.`)}`)];for(let t of r)for(let n of a)e.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${n?`; domain=${n}`:``}`}var Z={config:null,installed:!1,enabled:!1,lastView:null,env:null};function us({doc:e,win:t}={}){return{doc:e??Z.env?.doc??globalThis.document,win:t??Z.env?.win??globalThis.window}}function ds(e){let{route:t,title:n,loc:r}=Z.lastView,i=r??e.location,a=`${i.origin}${i.pathname}`;e.gtag?.(`event`,`page_view`,is({route:t,title:n,baseUrl:a}))}function fs(e){let{config:t}=Z;Z.installed?e.win.gtag?.(`consent`,`update`,os(!0)):(ss(t.id,{...e,cookiePrefix:t.cookiePrefix,params:t.params}),Z.installed=!0),Z.enabled=!0}var ps={init(e,{doc:t,win:n,consent:r=null}={}){let i=us({doc:t,win:n});return!e||e.provider!==`ga4`||!i.doc||!i.win?!1:(Z.config?.id===e.id||(Z={config:e,installed:!1,enabled:!1,lastView:null,env:{doc:t,win:n}},(e.requireConsent===!1||r===`granted`)&&fs(i)),Z.enabled)},needsConsent(){return!!Z.config&&Z.config.requireConsent!==!1},setConsent(e,t){if(!Z.config)return!1;let n=us(t);return e===`granted`?(Z.enabled||(fs(n),Z.lastView&&ds(n.win)),!0):(Z.enabled&&(n.win.gtag?.(`consent`,`update`,os(!1)),ls(n.doc,n.win,Z.config.cookiePrefix)),Z.enabled=!1,!1)},trackPageView(e,t=``,{win:n,loc:r}={}){Z.lastView={route:e,title:t,loc:r};let i=us({win:n}).win;return!Z.enabled||!i?!1:(ds(i),!0)},track(e,t={},{win:n}={}){let r=us({win:n}).win;return!Z.enabled||!r||!e?!1:(r.gtag?.(`event`,e,t),!0)},reset(){Z={config:null,installed:!1,enabled:!1,lastView:null,env:null}}},ms={"shell:ready":`{ shell } — <app-shell> renderizou pela primeira vez`,"auth:login":`{ user, reason } — signIn | signUp | passwordReset | restored | external | (motivo do provedor)`,"auth:logout":`{ user, reason } — signOut | providerChange | external | (motivo do provedor, ex.: expired)`,"auth:signup":`{ user } — conta nova criada (antes do auth:login correspondente)`,"network:online":`{ online, kind } — a conexão voltou`,"network:offline":`{ online, kind } — a conexão caiu`,"network:change":`{ online, kind } — mudou o tipo de rede (wifi, 4g...) sem cair`,"route:change":`{ name, params, query, initial } — rota resolvida (initial: a da carga da página)`,"app:visible":`{} — o app voltou ao primeiro plano (aba/PWA retomada)`,"app:hidden":`{} — o app foi para o segundo plano`,"pwa:update-available":`{} — há versão nova esperando (o toast "Atualizar" aparece)`,"pwa:offline-ready":`{} — o service worker terminou o cache; o app já abre sem rede`,"pwa:installed":`{} — o usuário instalou o app`,"consent:change":`{ consent } — granted | denied`,"a11y:change":`{ preferences } — tema, fonte ou tamanho do texto mudou`,"notification:new":`{ notification, userId } — notificação nova no sino do cabeçalho (notificationService.add)`,"push:permission-change":`{ permission } — granted | denied | default`,"push:subscribed":`{ subscription } — inscrição criada e entregue ao backend (push.onSubscribe)`,"push:unsubscribed":`{} — inscrição desfeita`,"push:subscription-change":`{ subscription } — o navegador trocou a inscrição; a nova já foi reentregue`,"push:received":`{ title, body, url, data } — push chegou com o app aberto (a notificação do sistema aparece igual)`,"push:clicked":`{ url, data, action } — o usuário tocou na notificação; o shell navega até url depois`,"backend:reachable":`{ backend, url } — o backend respondeu (de novo)`,"backend:unreachable":`{ backend, url, error } — o backend parou de responder (rede, tempo limite, 502/503/504)`,"backend:unauthorized":`{ backend, url, status } — o backend respondeu 401 (sessão vencida ou ausente)`,"share:click":`{ network, url } — o usuário clicou em uma opção de compartilhamento`};function hs(e,t){if(!Object.hasOwn(ms,e))throw Error(`shellEvents.${t}: evento desconhecido "${e}" (veja SHELL_EVENTS)`)}function gs(e,t){if(typeof e!=`function`)throw Error(`shellEvents.${t}: o listener deve ser uma função`)}function _s(e,t){console.error(`[appshell] listener de "${e}" falhou:`,t)}function vs(e,t,n){try{let r=t(...n);typeof r?.catch==`function`&&r.catch(t=>_s(e,t))}catch(t){_s(e,t)}}function ys(){let e=new Map,t=new Set;return{on(t,n){hs(t,`on`),gs(n,`on`);let r=e=>n(e);return e.has(t)||e.set(t,new Set),e.get(t).add(r),()=>e.get(t).delete(r)},once(e,t){gs(t,`once`);let n=this.on(e,e=>(n(),t(e)));return n},onAny(e){gs(e,`onAny`);let n=(t,n)=>e(t,n);return t.add(n),()=>t.delete(n)},emit(n,r={}){hs(n,`emit`);for(let t of[...e.get(n)??[]])vs(n,t,[r]);for(let e of[...t])vs(n,e,[n,r])}}}var Q=ys();function bs(e,t){let n=null,r=!0,i=t.subscribe((t,i)=>{if(t??=null,r){r=!1,n=t,t&&e.emit(`auth:login`,{user:t,reason:`restored`});return}let a=n?.id!==t?.id;n&&a&&e.emit(`auth:logout`,{user:n,reason:i}),t&&a&&e.emit(`auth:login`,{user:t,reason:i}),n=t}),a=t.onSignUp(t=>e.emit(`auth:signup`,{user:t}));return()=>{i(),a()}}function xs(e,t){return t.subscribe(({online:t,kind:n,change:r})=>{e.emit(`network:${r}`,{online:t,kind:n})})}function Ss(e,t){return t.onAdd((t,n)=>e.emit(`notification:new`,{notification:t,userId:n}))}function Cs(e,t){return t.subscribe(({type:t,...n})=>e.emit(`push:${t}`,n))}function ws(e,t){return t.subscribe(({type:t,...n})=>e.emit(`backend:${t}`,n))}function Ts(e,{consent:t,accessibility:n}){let r=t.subscribe(t=>e.emit(`consent:change`,{consent:t})),i=n.subscribe(t=>e.emit(`a11y:change`,{preferences:t}));return()=>{r(),i()}}var Es={"conta-entrar":`Entrar`,"conta-cadastro":`Criar conta`,"conta-esqueci-senha":`Esqueci minha senha`,"conta-redefinir-senha":`Criar nova senha`,"conta-alterar-senha":`Alterar senha`,conta:`Minha conta`,"config-backend":`Backend`,"config-acessibilidade":`Acessibilidade`,"config-privacidade":`Privacidade`,"config-notificacoes":`Notificações`,[Ja]:`Página não encontrada`},Ds=class extends w{static properties={routes:{attribute:!1},home:{attribute:!1},title:{attribute:!1},drawer:{attribute:!1},headerActions:{attribute:!1},footerItems:{attribute:!1},analytics:{attribute:!1},_route:{state:!0},_drawerOpen:{state:!0},_updateAvailable:{state:!0},_user:{state:!0},_consent:{state:!0}};static styles=o`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    main {
      flex: 1 1 auto;
      min-height: 0;
      overflow-y: auto;
    }
    /* O foco vai para o <main> por script (link "Ir para o conteúdo" e
       troca de rota) só para o leitor de tela começar dali; o anel em
       volta da tela inteira não ajuda ninguém. */
    main:focus {
      outline: none;
    }
    /* Link "Ir para o conteúdo" (WCAG 2.4.1) — o mesmo de .a11y-skip-link
       em src/a11y/a11y.css, repetido porque o CSS do documento não entra
       no shadow DOM. Invisível até receber foco pelo teclado. */
    .skip-link {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 1000;
      padding: 12px 16px;
      border-radius: 4px;
      background: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      font-weight: 700;
      transform: translateY(-200%);
    }
    .skip-link:focus {
      transform: none;
      outline: 2px solid var(--md-sys-color-inverse-primary);
      outline-offset: 2px;
    }
    /* Cada região da página vira seu próprio contexto de empilhamento:
       um z-index qualquer lá dentro (ex.: tooltip de gráfico com
       z-index: 1, cabeçalho sticky de tabela) passa a valer só entre os
       vizinhos da região, sem poder empatar com o z-index do drawer e
       aparecer por cima dele. isolation não cria bloco de contenção, então
       position: fixed dentro das views continua relativo à viewport. */
    app-header,
    main,
    consent-banner,
    app-footer {
      isolation: isolate;
    }
    /* Cinto e suspensório: além do isolamento acima e do z-index do
       drawer (ver firstUpdated), bloqueia clique em qualquer coisa da
       página por trás enquanto o drawer estiver aberto — o
       scrim opaco já a esconde, mas um componente com camadas internas
       próprias (ex.: md-text-button) pode escapar do empilhamento do
       drawer e continuar clicável. */
    main[inert],
    consent-banner[inert],
    app-footer[inert] {
      pointer-events: none;
    }
    md-navigation-drawer-modal {
      /* Scrim opaco (não os 32% do Material): com o drawer aberto, nada
         da página por trás fica visível ao lado do painel. */
      --md-navigation-drawer-modal-scrim-color: #000;
      --md-navigation-drawer-modal-scrim-opacity: 1;
      /* Sem isso, o painel do drawer cai no fallback interno do componente
         (branco fixo, #fff) em vez de usar a cor de superfície do tema —
         em tema escuro isso destoa e pode ser lido como "sem fundo
         próprio". Usa a superfície do app para garantir um painel sólido
         e coerente com claro/escuro. */
      --md-navigation-drawer-modal-container-color: var(--md-sys-color-surface);
    }
    .drawer-content {
      padding-top: 8px;
    }
    .update-toast {
      position: fixed;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 8px;
      max-width: calc(100% - 32px);
      padding: 8px 8px 8px 16px;
      border-radius: 4px;
      background: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 10px rgba(0, 0, 0, 0.12);
    }
    .update-toast span {
      font-size: 0.875rem;
    }
    .update-toast md-text-button {
      --md-text-button-label-text-color: var(--md-sys-color-inverse-primary);
      flex-shrink: 0;
    }
  `;constructor(){super(),this.routes=[],this.title=``,this.drawer={sections:[],shellSections:{conta:!0,config:!0}},this.headerActions=null,this.footerItems=null,this.analytics={provider:`none`},this.share={enabled:!0,title:`Compartilhar este app`,networks:[`whatsapp`,`telegram`,`facebook`,`x`,`linkedin`,`copy`],text:``,url:``},this._copied=!1,this._route={name:`home`},this._routed=!1,this._drawerOpen=!1,this._updateAvailable=!1,this._user=null,this._consent=null,this._swRegistration=null,this._updateSW=ta({onNeedRefresh:()=>{this._updateAvailable=!0,Q.emit(`pwa:update-available`)},onOfflineReady:()=>Q.emit(`pwa:offline-ready`),onRegisteredSW:(e,t)=>{this._swRegistration=t,t?.update()}})}connectedCallback(){super.connectedCallback(),this._consent=Ca.get(),ps.init(this.analytics,{consent:this._consent}),this._unsubscribeConsent=Ca.subscribe(e=>{this._consent=e,ps.setConsent(e)}),this._unsubscribe=no(e=>{this._route=e,this._drawerOpen=!1,ct(this._routeTitle(e),this.title),this._routed&&this.updateComplete.then(()=>this._focusMain()),Q.emit(`route:change`,{name:e.name,params:e.params,query:e.query,initial:!this._routed}),this._routed=!0,ps.trackPageView(e,this.title)},{routes:this.routes}),this._unsubscribeAuth=Y.subscribe(e=>this._user=e),this._onVisibilityChange=()=>{document.visibilityState===`visible`?(this._swRegistration?.update(),Q.emit(`app:visible`)):Q.emit(`app:hidden`)},document.addEventListener(`visibilitychange`,this._onVisibilityChange),this._onAppInstalled=()=>Q.emit(`pwa:installed`),window.addEventListener(`appinstalled`,this._onAppInstalled)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.(),this._unsubscribeAuth?.(),this._unsubscribeConsent?.(),document.removeEventListener(`visibilitychange`,this._onVisibilityChange),window.removeEventListener(`appinstalled`,this._onAppInstalled)}firstUpdated(){let e=this.shadowRoot.querySelector(`md-navigation-drawer-modal`),t=document.createElement(`style`);t.textContent=`
      .md3-navigation-drawer-modal,
      .md3-navigation-drawer-modal__scrim {
        z-index: 1;
      }
    `,e.shadowRoot.appendChild(t),Q.emit(`shell:ready`,{shell:this})}updated(e){e.has(`_drawerOpen`)&&this._drawerOpen&&this.shadowRoot.querySelectorAll(`nav-accordion`).forEach(e=>e.collapse())}_routeTitle(e){let t=this.routes.find(t=>t.name===e.name);if(!t)return Es[e.name]??``;let{title:n}=t;return typeof n==`function`?n({params:e.params,query:e.query}):n}_focusMain(){st(this.shadowRoot.querySelector(`main`))}_selectDrawerItem(e){e(),this._drawerOpen=!1}render(){return x`
      <a
        class="skip-link"
        href="#"
        @click=${e=>{e.preventDefault(),this._focusMain()}}
        >Ir para o conteúdo</a
      >

      <app-header .heading=${this.title} @menu-toggle=${()=>this._drawerOpen=!this._drawerOpen}>
        ${this.headerActions?this.headerActions():``}
      </app-header>

      <md-navigation-drawer-modal
        .opened=${this._drawerOpen}
        @navigation-drawer-changed=${e=>this._drawerOpen=e.detail.opened}
      >
        <div class="drawer-content">
          ${this.drawer.sections.map(e=>this._renderDrawerSection(e))}
          ${this.drawer.shellSections.conta?x`
                <nav-accordion label="Conta">
                  <md-list>${this._renderAccountItems()}</md-list>
                </nav-accordion>
              `:``}
          ${this.drawer.shellSections.config?x`
                <nav-accordion label="Config">
                  <md-list>
                    <md-list-item type="button" @click=${()=>this._selectDrawerItem(lo)}>
                      <md-icon slot="start">dns</md-icon>
                      Backend
                    </md-list-item>
                    ${T.config.enabled?x`
                          <md-list-item
                            type="button"
                            @click=${()=>this._selectDrawerItem(fo)}
                          >
                            <md-icon slot="start">accessibility_new</md-icon>
                            Acessibilidade
                          </md-list-item>
                        `:``}
                    ${U.isConfigured()?x`
                          <md-list-item
                            type="button"
                            @click=${()=>this._selectDrawerItem(po)}
                          >
                            <md-icon slot="start">notifications_active</md-icon>
                            Notificações
                          </md-list-item>
                        `:``}
                    ${this._asksConsent()?x`
                          <md-list-item type="button" @click=${()=>this._selectDrawerItem(uo)}>
                            <md-icon slot="start">privacy_tip</md-icon>
                            Privacidade
                          </md-list-item>
                        `:``}
                  </md-list>
                </nav-accordion>
              `:``}
          ${this._isShareEnabled()?x`
                <nav-accordion label=${this.share?.title||`Compartilhar este app`}>
                  <md-list>${this._renderShareItems()}</md-list>
                </nav-accordion>
              `:``}
        </div>
      </md-navigation-drawer-modal>

      <main ?inert=${this._drawerOpen}>${this._renderRoute()}</main>

      ${this._asksConsent()&&this._consent===null?x`<consent-banner ?inert=${this._drawerOpen} .privacyUrl=${this.analytics.privacyUrl}></consent-banner>`:``}

      <app-footer ?inert=${this._drawerOpen}>${this.footerItems?this.footerItems():``}</app-footer>

      ${this._updateAvailable?x`
            <div class="update-toast" role="status">
              <span>Uma nova versão está disponível.</span>
              <md-text-button @click=${()=>this._updateSW(!0)}>Atualizar</md-text-button>
            </div>
          `:``}
    `}_renderDrawerSection(e){if(e.render)return x`
        <nav-accordion label=${e.label}>${e.render()}</nav-accordion>
      `;let t=e.items.filter(e=>!e.visible||e.visible(this._user));return x`
      <nav-accordion label=${e.label}>
        <md-list>
          ${t.map(e=>x`
              <md-list-item type="link" href=${e.href}>
                ${e.icon?x`<md-icon slot="start">${e.icon}</md-icon>`:``}
                ${e.label}
              </md-list-item>
            `)}
        </md-list>
      </nav-accordion>
    `}_asksConsent(){return this.analytics.provider===`ga4`&&this.analytics.requireConsent!==!1}_renderAccountItems(){return this._user?x`
        <md-list-item type="button" @click=${()=>this._selectDrawerItem(co)}>
          <md-icon slot="start">account_circle</md-icon>
          <div slot="headline">Minha conta</div>
          <div slot="supporting-text">${this._user.email}</div>
        </md-list-item>
        <md-list-item type="button" @click=${()=>this._selectDrawerItem(()=>Y.signOut())}>
          <md-icon slot="start">logout</md-icon>
          Sair
        </md-list-item>
      `:x`
      <md-list-item type="button" @click=${()=>this._selectDrawerItem(io)}>
        <md-icon slot="start">login</md-icon>
        Entrar
      </md-list-item>
      ${Y.supports(`signUp`)?x`<md-list-item type="button" @click=${()=>this._selectDrawerItem(ao)}>
            <md-icon slot="start">person_add</md-icon>
            Criar conta
          </md-list-item>`:``}
    `}_isShareEnabled(){return this.drawer.shellSections?.compartilhar===!1||this.drawer.shellSections?.share===!1?!1:!!(this.share?.enabled&&this.share?.networks?.length>0)}_share(e){let t=this.share?.url||(typeof window<`u`?window.location.href:``),n=this.share?.text||this.title||``;if(Q.emit(`share:click`,{network:e,url:t}),ps.track(`share`,{method:e,content_type:`app`}),e===`copy`){typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{ot(`Link copiado para a área de transferência`),this._copied=!0,this.requestUpdate(),setTimeout(()=>{this._copied=!1,this.requestUpdate()},2e3)}).catch(()=>{});return}if(e===`native`){typeof navigator<`u`&&navigator.share&&navigator.share({title:this.title,text:n,url:t}).catch(()=>{}),this._drawerOpen=!1;return}let r={whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent(n?`${n} ${t}`:t)}`,telegram:`https://t.me/share/url?url=${encodeURIComponent(t)}${n?`&text=${encodeURIComponent(n)}`:``}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`,x:`https://x.com/intent/tweet?url=${encodeURIComponent(t)}${n?`&text=${encodeURIComponent(n)}`:``}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t)}`,email:`mailto:?subject=${encodeURIComponent(this.title)}&body=${encodeURIComponent(n?`${n} - ${t}`:t)}`}[e];r&&(typeof window<`u`&&window.open(r,`_blank`,`noopener,noreferrer`),this._drawerOpen=!1)}_renderShareIcon(e){switch(e){case`whatsapp`:return x`
          <svg slot="start" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path
              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.26C9.15 12.42 10.74 14.88 13.2 15.94C15.24 16.82 15.66 16.64 16.11 16.6C16.55 16.56 17.54 16.01 17.74 15.44C17.95 14.88 17.95 14.39 17.89 14.29C17.83 14.19 17.66 14.13 17.41 14.01C17.16 13.88 15.93 13.28 15.7 13.2C15.48 13.11 15.31 13.07 15.15 13.32C14.99 13.56 14.52 14.13 14.38 14.29C14.23 14.45 14.09 14.47 13.84 14.35C13.6 14.23 12.79 13.97 11.84 13.12C11.1 12.46 10.6 11.64 10.46 11.39C10.31 11.15 10.44 11.01 10.57 10.89C10.68 10.78 10.82 10.6 10.95 10.45C11.08 10.3 11.12 10.19 11.21 10.03C11.3 9.86 11.25 9.72 11.19 9.6C11.13 9.47 10.64 8.27 10.44 7.77C10.24 7.29 10.04 7.35 9.88 7.35C9.74 7.34 9.57 7.34 9.53 7.34Z"
            />
          </svg>
        `;case`telegram`:return x`
          <svg slot="start" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
            />
          </svg>
        `;case`facebook`:return x`
          <svg slot="start" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
            />
          </svg>
        `;case`x`:return x`
          <svg slot="start" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        `;case`linkedin`:return x`
          <svg slot="start" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            />
          </svg>
        `;case`copy`:return x`<md-icon slot="start">content_copy</md-icon>`;case`native`:return x`<md-icon slot="start">share</md-icon>`;case`email`:return x`<md-icon slot="start">mail</md-icon>`;default:return x`<md-icon slot="start">share</md-icon>`}}_shareLabel(e){switch(e){case`whatsapp`:return`WhatsApp`;case`telegram`:return`Telegram`;case`facebook`:return`Facebook`;case`x`:return`X (Twitter)`;case`linkedin`:return`LinkedIn`;case`copy`:return this._copied?`Link copiado!`:`Copiar link`;case`native`:return`Mais opções...`;case`email`:return`E-mail`;default:return e}}_renderShareItems(){return(this.share?.networks||[]).map(e=>x`
        <md-list-item type="button" @click=${()=>this._share(e)}>
          ${this._renderShareIcon(e)}
          ${this._shareLabel(e)}
        </md-list-item>
      `)}_renderRoute(){let e=this.routes.find(e=>e.name===this._route.name);if(e)return e.render({params:this._route.params,query:this._route.query});switch(this._route.name){case`home`:return this.home();case`conta-entrar`:return x`<auth-view mode="signin"></auth-view>`;case`conta-cadastro`:return x`<auth-view mode="signup"></auth-view>`;case`conta-esqueci-senha`:return x`<auth-view mode="forgot"></auth-view>`;case`conta-redefinir-senha`:return x`<auth-view mode="reset" .token=${this._route.query.token??null}></auth-view>`;case`conta-alterar-senha`:return x`<auth-view mode="change"></auth-view>`;case`conta`:return x`<auth-view></auth-view>`;case`config-backend`:return x`<config-backend-view></config-backend-view>`;case`config-acessibilidade`:return T.config.enabled?x`<config-accessibility-view></config-accessibility-view>`:x`<not-found-view .path=${this._route.segments.join(`/`)}></not-found-view>`;case`config-privacidade`:return this._asksConsent()?x`<config-privacy-view .privacyUrl=${this.analytics.privacyUrl}></config-privacy-view>`:x`<not-found-view .path=${this._route.segments.join(`/`)}></not-found-view>`;case`config-notificacoes`:return U.isConfigured()?x`<config-notifications-view></config-notifications-view>`:x`<not-found-view .path=${this._route.segments.join(`/`)}></not-found-view>`;case Ja:default:return x`<not-found-view .path=${this._route.segments.join(`/`)}></not-found-view>`}}};customElements.define(`app-shell`,Ds);var Os=[`conta`,`config`,`compartilhar`,`share`],ks=[`whatsapp`,`telegram`,`facebook`,`x`,`linkedin`,`copy`],As=[`whatsapp`,`telegram`,`facebook`,`x`,`twitter`,`linkedin`,`copy`,`clipboard`,`native`,`email`];function js(e){if(e===!1||e===null)return{enabled:!1};if(e===void 0||e===!0)return{enabled:!0,title:`Compartilhar este app`,networks:[...ks],text:``,url:``};if(typeof e!=`object`||Array.isArray(e))throw Error(`createAppShell: "share" deve ser um objeto ou boolean`);let{enabled:t=!0,title:n=`Compartilhar este app`,networks:r=ks,text:i=``,url:a=``}=e;if(typeof t!=`boolean`)throw Error(`createAppShell: share.enabled deve ser true ou false`);if(typeof n!=`string`)throw Error(`createAppShell: share.title deve ser uma string`);if(!Array.isArray(r))throw Error(`createAppShell: share.networks deve ser um array`);for(let e of r)if(typeof e!=`string`||!As.includes(e.toLowerCase()))throw Error(`createAppShell: share.networks não reconhece "${e}" (use ${ks.map(e=>`"${e}"`).join(`, `)})`);if(typeof i!=`string`)throw Error(`createAppShell: share.text deve ser uma string`);if(typeof a!=`string`)throw Error(`createAppShell: share.url deve ser uma string`);return{enabled:t,title:n||`Compartilhar este app`,networks:r.map(e=>e.toLowerCase()===`twitter`?`x`:e.toLowerCase()===`clipboard`?`copy`:e.toLowerCase()),text:i,url:a}}function Ms(e){let t=new Set;for(let n of e){if(!n.name)throw Error(`createAppShell: toda rota precisa de "name"`);if(t.has(n.name))throw Error(`createAppShell: nome de rota duplicado "${n.name}"`);if(t.add(n.name),typeof n.match!=`function`)throw Error(`createAppShell: rota "${n.name}" precisa de "match"`);if(typeof n.render!=`function`)throw Error(`createAppShell: rota "${n.name}" precisa de "render"`);if(n.title!==void 0&&typeof n.title!=`string`&&typeof n.title!=`function`)throw Error(`createAppShell: "title" da rota "${n.name}" deve ser texto ou ({ params, query }) => texto`)}}function Ns(e){let t=e.sections||[],n=new Set;for(let e of t){if(!e.id)throw Error(`createAppShell: toda seção do drawer precisa de "id"`);if(n.has(e.id))throw Error(`createAppShell: id de seção duplicado "${e.id}"`);if(n.add(e.id),!e.label)throw Error(`createAppShell: seção "${e.id}" precisa de "label"`);let t=e.items!==void 0,r=e.render!==void 0;if(t===r)throw Error(`createAppShell: seção "${e.id}" precisa de "items" ou "render" (não os dois, nem nenhum)`);if(r&&typeof e.render!=`function`)throw Error(`createAppShell: "render" da seção "${e.id}" deve ser uma função`);if(t&&!Array.isArray(e.items))throw Error(`createAppShell: "items" da seção "${e.id}" deve ser um array`)}let r={conta:!0,config:!0,...e.shellSections};for(let e of Object.keys(r))if(!Os.includes(e))throw Error(`createAppShell: shellSections não reconhece "${e}" (use "conta" ou "config")`);return{sections:t,shellSections:r}}function Ps(e){if(typeof e!=`object`||!e||Array.isArray(e))throw Error(`createAppShell: "on" deve ser um objeto { "evento": listener }`);for(let[t,n]of Object.entries(e)){if(!Object.hasOwn(ms,t))throw Error(`createAppShell: on não reconhece o evento "${t}" (veja SHELL_EVENTS)`);if(typeof n!=`function`)throw Error(`createAppShell: on["${t}"] deve ser uma função`)}return e}function Fs(e){if(!e||typeof e!=`object`)throw Error(`createAppShell: config é obrigatório`);let{mount:t,routes:n=[],home:r,title:i,drawer:a={},headerActions:o=null,footerItems:s=null,analytics:c=null,auth:l=null,push:u=null,share:d=void 0,on:f={},debug:p=!1}=e;if(!t)throw Error(`createAppShell: "mount" é obrigatório`);if(typeof r!=`function`)throw Error(`createAppShell: "home" deve ser uma função`);if(!i)throw Error(`createAppShell: "title" é obrigatório`);if(o!==null&&typeof o!=`function`)throw Error(`createAppShell: "headerActions" deve ser uma função`);if(s!==null&&typeof s!=`function`)throw Error(`createAppShell: "footerItems" deve ser uma função`);if(typeof p!=`boolean`)throw Error(`createAppShell: "debug" deve ser true ou false`);return Ms(n),l!==null&&zo(l),{mount:t,routes:n,home:r,title:i,drawer:Ns(a),headerActions:o,footerItems:s,analytics:ca(c),auth:l,push:ma(u),share:js(d),on:Ps(f),debug:p}}var Is=null;function Ls({on:e,debug:t}){Is?.();let n=Object.entries(e).map(([e,t])=>Q.on(e,t));t&&n.push(Q.onAny((e,t)=>console.info(`[appshell] ${e}`,t))),n.push(bs(Q,Y),xs(Q,Va),Ss(Q,Jo),Cs(Q,U),ws(Q,W),Q.on(`network:online`,()=>W.checkAll({force:!0})),Q.on(`app:visible`,()=>W.checkAll()),Ts(Q,{consent:Ca,accessibility:T})),Is=()=>n.forEach(e=>e())}function Rs(e,t=Fa){if(!e?.backend||!e.path)return e;let n=t(e.backend);return{onSubscribe:t=>n.post(e.path,t),onUnsubscribe:t=>n.delete(e.path,{body:t}),...e}}function zs(e){let t=da(e),{mount:n,routes:r,home:i,title:a,drawer:o,headerActions:s,footerItems:c,analytics:l,auth:u,push:d,share:f,on:p,debug:m}=Fs({...t,push:Rs(t?.push)}),h=typeof n==`string`?document.querySelector(n):n;if(!h)throw Error(`createAppShell: elemento não encontrado para mount "${n}"`);u&&Y.use(u),W.use(la.config.backends??{},{getAccessToken:()=>Y.getAccessToken()}),Ls({on:p,debug:m}),U.use(d),W.checkAll({force:!0});let g=document.createElement(`app-shell`);return g.routes=r,g.home=i,g.title=a,g.drawer=o,g.headerActions=s,g.footerItems=c,g.analytics=l,g.share=f,h.replaceChildren(g),g}T.apply();var Bs=[{id:`all`,name:`Todos os Modelos`,icon:`apps`},{id:`sports`,name:`Times & Esportes ⚽`,icon:`sports_soccer`},{id:`music`,name:`Música & Bandas 🎸`,icon:`music_note`},{id:`memories`,name:`Pets & Memórias ❤️`,icon:`favorite`},{id:`pop-culture`,name:`Geek & Cinema 🎮`,icon:`movie`},{id:`bambu-mods`,name:`Upgrades Bambu A1 🖨️`,icon:`precision_manufacturing`}],Vs=[{id:`team-crest-3d`,title:`Escudo de Mesa 3D do Seu Time do Coração`,category:`sports`,shortDescription:`Escudo do seu clube em alto-relevo multicor com base de apoio de mesa.`,description:`Demonstre a paixão pelo seu time no escritório, na sala ou na estante de troféus! Escudo em relevo profundo destacando cada linha do brasão do seu clube (Flamengo, Palmeiras, Corinthians, São Paulo, Santos, Grêmio, Vasco, Real Madrid, etc.). A base de apoio texturizada garante firmeza na mesa e permite personalizar com o seu nome gravado.`,designer:`Foot3D Studio`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/28419`,license:`Creative Commons (CC BY-NC 4.0)`,estimatedMinutes:85,filamentGrams:68,dimensions:`120 × 40 × 135 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!0,tags:[`Futebol`,`Time`,`Escudo`,`Torcida`,`Paixão`,`Personalizado`],previewIcon:`sports_soccer`,emotionalPrompt:`Qual é o seu time do coração? (Ex: Flamengo, Palmeiras, Corinthians, São Paulo...)`},{id:`trophy-cup`,title:`Taça dos Campeões com Base Personalizada`,category:`sports`,shortDescription:`Troféu dourado para o campeão do churrasco, da pelada ou do videogame!`,description:`Eternize momentos épicos com amigos e família! A icônica taça dos campeões impressa em PLA Silk Dourado com acabamento de metal brilhante. A base conta com espaço para placa comemorativa personalizada com o título da conquista.`,designer:`VictorTrophies`,source:`Printables`,sourceUrl:`https://www.printables.com/model/59201-champions-cup-trophy`,license:`Creative Commons (CC BY-SA 4.0)`,estimatedMinutes:110,filamentGrams:74,dimensions:`90 × 90 × 160 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!0,tags:[`Troféu`,`Campeão`,`Amigos`,`Churrasco`,`Videogame`,`Ouro`],previewIcon:`emoji_events`,emotionalPrompt:`Qual texto deseja gravar na base? (Ex: Campeão da Pelada 2026)`},{id:`spotify-code-keychain`,title:`Chaveiro Spotify Code — "A Nossa Música" Escaneável`,category:`music`,shortDescription:`Aponte o celular e a música do casal ou da sua banda toca no Spotify na hora!`,description:`O presente mais emocionante para namorados, amigos ou familiares apaixonados por música! O código do Spotify da sua canção marcante é impresso com relevo de alta precisão. Basta abrir a busca da câmera do Spotify no celular, apontar para o chaveiro e a música começa a tocar imediatamente.`,designer:`SoundWaves 3D`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/35210`,license:`Creative Commons (CC BY 4.0)`,estimatedMinutes:24,filamentGrams:14,dimensions:`65 × 18 × 4 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Muito Fácil`,featured:!0,tags:[`Música`,`Spotify`,`Presente`,`Casal`,`Namorados`,`Romântico`],previewIcon:`qr_code_2`,emotionalPrompt:`Qual a música e artista para gerar o código? (Ex: Coldplay - Yellow)`},{id:`guitar-amp-pick-holder`,title:`Mini Amplificador de Guitarra Porta-Palhetas`,category:`music`,shortDescription:`Estilo clássico Marshall vintage com tampa para guardar até 15 palhetas.`,description:`Criado especialmente para os amantes da guitarra, violão e do bom Rock! Réplica nostálgica dos clássicos amplificadores valvulados, com botões de ganho em relevo, grade frontal e compartimento superior articulado que guarda com muito estilo todas as suas palhetas musicais.`,designer:`RockerMods`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/41902`,license:`Creative Commons (CC BY-NC 4.0)`,estimatedMinutes:65,filamentGrams:42,dimensions:`70 × 50 × 60 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!0,tags:[`Música`,`Guitarra`,`Amplificador`,`Rock`,`Palhetas`,`Músico`],previewIcon:`speaker`,emotionalPrompt:`Cores preferidas (Sugerimos Charcoal Black com detalhes Silk Gold)`},{id:`rock-hand-headphone-stand`,title:`Suporte de Headphone "Rock Hand" (Chifrinho do Rock)`,category:`music`,shortDescription:`Escultura da mão com o símbolo clássico do Rock para apoiar seu fone com atitude!`,description:`Para quem tem alma rocker e metaleira! Escultura estilizada da mão fazendo o lendário sinal do rock ("maloik"). Possui base pesada com centro de gravidade rebaixado para apoiar headsets gamers pesados e fones profissionais de estúdio sem qualquer risco de tombar.`,designer:`MetalHead Design`,source:`Printables`,sourceUrl:`https://www.printables.com/model/78410-rock-hand-headphone-stand`,license:`Creative Commons (CC BY-SA 4.0)`,estimatedMinutes:195,filamentGrams:135,dimensions:`120 × 110 × 220 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Médio`,featured:!0,tags:[`Música`,`Rock`,`Headphone`,`Metal`,`Gamer`,`Atitude`],previewIcon:`front_hand`,emotionalPrompt:`Cor favorita (Fica impecável em Charcoal Black fosco ou Silk Silver)`},{id:`custom-pet-keychain`,title:`Chaveiro Silhueta de Pet com Nome Gravado`,category:`memories`,shortDescription:`Homenagem emocionante ao seu amigo de 4 patas (Cachorro ou Gato) com nome.`,description:`Leve o amor pelo seu animal de estimação sempre com você! Silhueta estilizada da raça do seu cachorro (Golden, Buldogue, Vira-Lata Caramelo, Poodle, Pastor, etc.) ou gato, com o nome do seu pet gravado em relevo nítido e argola reforçada. Um dos presentes mais carinhosos que existem.`,designer:`PawPrint Studio`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/22194`,license:`Creative Commons (CC BY 4.0)`,estimatedMinutes:28,filamentGrams:16,dimensions:`55 × 45 × 4 mm`,recommendedMaterial:`PETG`,supports:!1,difficulty:`Muito Fácil`,featured:!0,tags:[`Pet`,`Cachorro`,`Gato`,`Amor`,`Família`,`Personalizado`],previewIcon:`pets`,emotionalPrompt:`Qual é o nome e a raça/tipo do seu pet? (Ex: Bob - Golden Retriever)`},{id:`lithophane-nightlight`,title:`Luminária Litofania Fotográfica (Foto Revelada pela Luz)`,category:`memories`,shortDescription:`A foto da família, casamento ou filhos se revela magicamente ao acender a luz!`,description:`Uma das maiores mágicas da tecnologia 3D! À primeira vista, parece apenas uma placa decorativa branca. Mas quando colocada contra uma fonte de luz, a variação microscópica de espessura de camadas revela a fotografia da sua família ou casal com riqueza emocionante de detalhes em tons de cinza.`,designer:`LumiPhoto Lab`,source:`Printables`,sourceUrl:`https://www.printables.com/model/19820-curved-lithophane-frame`,license:`Creative Commons (CC BY 4.0)`,estimatedMinutes:140,filamentGrams:58,dimensions:`120 × 25 × 140 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!0,tags:[`Fotografia`,`Família`,`Casamento`,`Bebê`,`Luz`,`Emocionante`],previewIcon:`lightbulb`,emotionalPrompt:`Foto para litofania (você poderá anexar ou enviar no WhatsApp)`},{id:`baby-yoda-grogu-planter`,title:`Vaso & Porta-Treco Baby Yoda (Grogu) Apaixonante`,category:`pop-culture`,shortDescription:`O personagem mais amado da galáxia para suculentas ou organizar sua mesa.`,description:`Impossível não sorrir ao olhar para ele! O pequeno Grogu esculpido com olhos expressivos e suas orelhinhas características abraçando o vasinho. Perfeito para plantas suculentas na janela ou como organizador de canetas e clipes que traz alegria à sua mesa de trabalho.`,designer:`GalacticPrinters`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/15890`,license:`Creative Commons (CC BY-NC 4.0)`,estimatedMinutes:115,filamentGrams:76,dimensions:`110 × 90 × 85 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!0,tags:[`Star Wars`,`Grogu`,`Baby Yoda`,`Fofo`,`Suculenta`,`Geek`],previewIcon:`sentiment_satisfied`,emotionalPrompt:`Cor preferida (Sugerimos Bambu Green ou Jade White)`},{id:`pokeball-spring-box`,title:`Pokébola Articulada com Mecanismo de Mola`,category:`pop-culture`,shortDescription:`Aperte o botão central e ela se abre sozinha como nos desenhos!`,description:`Nostalgia pura para quem cresceu sonhando em ser um treinador Pokémon! Mecanismo com mola integrada 100% impressa em 3D. Basta apertar o botão central para a tampa se abrir com um clique satisfatório. Espaço interno ideal para alianças, moedas ou dados de RPG.`,designer:`PokeMakers`,source:`Printables`,sourceUrl:`https://www.printables.com/model/44120-functional-pokeball`,license:`Creative Commons (CC BY-SA 4.0)`,estimatedMinutes:80,filamentGrams:52,dimensions:`75 × 75 × 75 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!1,tags:[`Pokemon`,`Pokébola`,`Nostalgia`,`Games`,`Anos 90`,`Geek`],previewIcon:`catching_pokemon`,emotionalPrompt:`Modelo preferido: Clássica (Vermelho/Branco) ou Great Ball (Azul/Branco)`},{id:`retro-cassette-box`,title:`Caixa Fita Cassete Retrô Anos 80 com Dobradiça`,category:`music`,shortDescription:`Design vintage de fita K7 para guardar memórias, fones ou cartões.`,description:`Para os apaixonados pelo charme dos anos 80 e a era de ouro da música analógica! Uma caixinha charmosa com proporções reais de fita cassete, furação dos carretéis e trava tipo clique para guardar fones de ouvido, cartões de visita ou pendrives.`,designer:`VintageWave`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/30281`,license:`Creative Commons (CC BY 4.0)`,estimatedMinutes:52,filamentGrams:36,dimensions:`100 × 64 × 18 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil`,featured:!1,tags:[`Música`,`Anos 80`,`Retrô`,`Fita K7`,`Vintage`,`Nostalgia`],previewIcon:`album`,emotionalPrompt:`Texto ou nome de banda para o rótulo da fita (Ex: Rock Classics Vol. 1)`},{id:`flexi-rex`,title:`Flexi Rex Articulado`,category:`pop-culture`,shortDescription:`O dinossauro articulado mais amado pelas crianças e colecionadores.`,description:`O dinossauro articulado mais famoso do mundo 3D! Sai da mesa da Bambu A1 com todas as vértebras e mandíbula soltas e articuladas sem suportes. Um sucesso garantido para os filhos e crianças da família.`,designer:`KirbyDowney & Airic`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/14293`,license:`Creative Commons (CC BY-SA 4.0)`,estimatedMinutes:42,filamentGrams:32,dimensions:`95 × 140 × 30 mm`,recommendedMaterial:`PLA`,supports:!1,difficulty:`Fácil (Sem suportes)`,featured:!1,tags:[`Articulado`,`Dinossauro`,`Crianças`,`Brinquedo`,`Print-in-Place`],previewIcon:`smart_toy`,emotionalPrompt:`Cor favorita da criança para o dinossauro`},{id:`bambu-poop-chute`,title:`Bambu A1 — Coletor de Purga (Poop Chute & Bucket)`,category:`bambu-mods`,shortDescription:`O acessório nº 1 para Bambu A1: recolhe os restos de troca de cor do AMS Lite.`,description:`O acessório indispensável para a impressora do seu filho! Encaixa no eixo X da Bambu A1 e direciona as sobras das trocas de cores do AMS Lite direto para o cesto, mantendo o ambiente de impressão impecável.`,designer:`BambuCommunity Studio`,source:`MakerWorld`,sourceUrl:`https://makerworld.com/en/models/48592`,license:`Creative Commons (CC BY 4.0)`,estimatedMinutes:110,filamentGrams:85,dimensions:`120 × 95 × 110 mm`,recommendedMaterial:`PETG`,supports:!1,difficulty:`Fácil`,featured:!1,tags:[`Bambu A1`,`Upgrade`,`Poop Chute`,`Organização`,`Prático`],previewIcon:`delete_sweep`,emotionalPrompt:`Cor preferida (Sugerimos Charcoal Black ou Bambu Green)`}],Hs=class extends w{static properties={model:{type:Object}};static styles=o`
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
  `;render(){if(!this.model)return null;let e=this.model;return x`
      <div class="card">
        <div class="image-container">
          <div class="badges-overlay">
            <span class="source-badge">
              <md-icon style="--md-icon-size: 14px">cloud_download</md-icon>
              ${e.source}
            </span>
            <span class="free-badge">Grátis</span>
          </div>
          <md-icon class="model-icon">${e.previewIcon||`category`}</md-icon>
        </div>

        <div class="content">
          <h3 class="title">${e.title}</h3>
          <p class="desc">${e.shortDescription}</p>

          <div class="specs-grid">
            <div class="spec-item" title="Tempo estimado na Bambu Lab A1">
              <md-icon>timer</md-icon>
              <div class="spec-text"><strong>~${e.estimatedMinutes}m</strong> na A1</div>
            </div>
            <div class="spec-item" title="Peso de filamento aproximado">
              <md-icon>scale</md-icon>
              <div class="spec-text"><strong>~${e.filamentGrams}g</strong> ${e.recommendedMaterial}</div>
            </div>
            <div class="spec-item" title="Dimensões (L × C × A)">
              <md-icon>straighten</md-icon>
              <div class="spec-text">${e.dimensions}</div>
            </div>
            <div class="spec-item" title="Suportes necessários">
              <md-icon>${e.supports?`construction`:`check_circle`}</md-icon>
              <div class="spec-text">${e.supports?`Com suportes`:`Sem suportes`}</div>
            </div>
          </div>

          <div class="actions">
            <md-filled-button
              class="order-btn"
              @click=${()=>K(`modelo/${e.id}`)}
            >
              <md-icon slot="icon">shopping_bag</md-icon>
              Configurar & Pedir
            </md-filled-button>

            <md-icon-button
              class="source-btn"
              title="Abrir no ${e.source} (download do STL/3MF)"
              href=${e.sourceUrl}
              target="_blank"
            >
              <md-icon>open_in_new</md-icon>
            </md-icon-button>
          </div>
        </div>
      </div>
    `}};customElements.define(`model-card`,Hs);var Us=class extends w{static properties={search:{type:String},selectedCategory:{type:String},selectedMaterial:{type:String},sortBy:{type:String}};static styles=o`
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
  `;constructor(){super(),this.search=``,this.selectedCategory=`all`,this.selectedMaterial=`all`,this.sortBy=`popular`}_getFilteredModels(){let e=[...Vs];if(this.selectedCategory!==`all`&&(e=e.filter(e=>e.category===this.selectedCategory)),this.selectedMaterial!==`all`&&(e=e.filter(e=>e.recommendedMaterial===this.selectedMaterial)),this.search.trim()){let t=this.search.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t)))}return this.sortBy===`time`?e.sort((e,t)=>e.estimatedMinutes-t.estimatedMinutes):this.sortBy===`weight`?e.sort((e,t)=>e.filamentGrams-t.filamentGrams):e.sort((e,t)=>+!!t.featured-!!e.featured),e}render(){let e=this._getFilteredModels();return x`
      <div class="hero">
        <div class="hero-badge">
          <md-icon style="--md-icon-size: 16px">favorite</md-icon>
          Paixões em 3D • Bambu Lab A1 Studio
        </div>
        <h1 class="hero-title">Dê Vida às Suas Paixões: <span>Times, Música, Pets & Geek</span></h1>
        <p class="hero-subtitle">
          Escolha modelos 3D carregados de sentimento e significado (escudos de clubes, chaveiros Spotify Code escaneáveis,
          homenagens a pets e ícones da música e do cinema) ou encomende peças personalizadas na nossa Bambu Lab A1.
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
          @click=${()=>K(`pedido-personalizado`)}
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
              @input=${e=>this.search=e.target.value}
            />
          </div>

          <select
            class="sort-select"
            .value=${this.sortBy}
            @change=${e=>this.sortBy=e.target.value}
          >
            <option value="popular">Destaques & Populares</option>
            <option value="time">Mais Rápidos de Imprimir</option>
            <option value="weight">Mais Leves (Menos Filamento)</option>
          </select>
        </div>

        <div class="chips-row">
          ${Bs.map(e=>x`
              <button
                class="chip-btn ${this.selectedCategory===e.id?`active`:``}"
                @click=${()=>this.selectedCategory=e.id}
              >
                <md-icon>${e.icon}</md-icon>
                ${e.name}
              </button>
            `)}
        </div>
      </div>

      ${e.length===0?x`
            <div class="empty-state">
              <md-icon>search_off</md-icon>
              <h3>Nenhum modelo encontrado</h3>
              <p>Tente ajustar a busca ou limpe os filtros para ver todos os modelos disponíveis.</p>
              <md-outlined-button
                @click=${()=>{this.search=``,this.selectedCategory=`all`}}
              >
                Limpar Filtros
              </md-outlined-button>
            </div>
          `:x`
            <div class="grid">
              ${e.map(e=>x`<model-card .model=${e}></model-card>`)}
            </div>
          `}
    `}};customElements.define(`catalog-view`,Us);var Ws=[{id:`PLA`,name:`PLA Básico / Seda`,description:`Biodegradável, acabamento impecável, ideal para miniaturas, decoração e brinquedos.`,bedTemp:`65°C`,nozzleTemp:`220°C`,strength:`Boa`,finish:`Acetinado ou Seda Brilhante`,badge:`Mais Popular`},{id:`PETG`,name:`PETG Resistente`,description:`Resistente a impacto, raios UV e calor (até 75°C). Ideal para peças mecânicas e uso externo.`,bedTemp:`75°C`,nozzleTemp:`245°C`,strength:`Alta`,finish:`Semi-brilhante translúcido ou opaco`,badge:`Alta Resistência`},{id:`TPU`,name:`TPU 95A Flexível`,description:`Borracha flexível elástica. Excelente para capas, gaxetas, amortecedores e peças dobráveis.`,bedTemp:`50°C`,nozzleTemp:`230°C`,strength:`Ultra-flexível`,finish:`Emborrachado`,badge:`Especial`}],Gs=[{id:`bambu-green`,name:`Bambu Green`,hex:`#00AE42`,textColor:`#ffffff`},{id:`matte-black`,name:`Charcoal Black`,hex:`#1E1E1E`,textColor:`#ffffff`},{id:`jade-white`,name:`Jade White`,hex:`#F5F5F5`,textColor:`#222222`},{id:`lava-red`,name:`Lava Red`,hex:`#D32F2F`,textColor:`#ffffff`},{id:`ocean-blue`,name:`Cobalt Blue`,hex:`#1976D2`,textColor:`#ffffff`},{id:`sun-yellow`,name:`Sunflower Yellow`,hex:`#FBC02D`,textColor:`#222222`},{id:`silk-silver`,name:`Silk Silver`,hex:`#B0BEC5`,textColor:`#222222`},{id:`silk-gold`,name:`Silk Gold`,hex:`#FFD54F`,textColor:`#222222`},{id:`neon-orange`,name:`Neon Orange`,hex:`#FF6D00`,textColor:`#ffffff`},{id:`sakura-pink`,name:`Sakura Pink`,hex:`#F48FB1`,textColor:`#222222`}],Ks=[{id:`0.12`,name:`0.12mm — Alta Definição`,description:`Camadas quase invisíveis. Perfeito para miniaturas, estátuas e joias.`,multiplier:1.5},{id:`0.20`,name:`0.20mm — Padrão Bambu Studio`,description:`Equilíbrio ideal entre acabamento primoroso e tempo de impressão.`,multiplier:1,recommended:!0},{id:`0.28`,name:`0.28mm — Rápido / Funcional`,description:`Maior velocidade para suportes mecânicos, organizadores e protótipos.`,multiplier:.75}],qs=[{id:`15%`,name:`15% Giroide (Padrão)`,factor:1},{id:`25%`,name:`25% Grade (Reforçado)`,factor:1.15},{id:`50%`,name:`50% Estrutural (Forte)`,factor:1.4},{id:`100%`,name:`100% Maciço (Indestrutível)`,factor:1.9}],Js={model:`Bambu Lab A1`,buildVolume:`256 × 256 × 256 mm³`,maxSpeed:`500 mm/s`,acceleration:`10.000 mm/s²`,nozzleDiameter:`0.4 mm (Hotend de Troca Rápida)`,maxNozzleTemp:`300 °C`,maxBedTemp:`100 °C (Chapa PEI Texturizada)`,multiColorSupport:`AMS Lite (até 4 carretéis)`,autoCalibration:`Compensação ativa de fluxo + Nivelamento totalmente automático`},Ys=`siteprint3d:orders`,Xs=[{id:`queued`,label:`Na Fila`,icon:`schedule`,color:`#f59e0b`,desc:`Aguardando na fila de impressão`},{id:`slicing`,label:`Fatiando (Bambu Studio)`,icon:`layers`,color:`#0284c7`,desc:`Gerando arquivo .gcode / .3mf`},{id:`printing`,label:`Imprimindo no Bambu A1`,icon:`precision_manufacturing`,color:`#16a34a`,desc:`Trabalho ativo na impressora`},{id:`ready`,label:`Pronto para Retirada`,icon:`verified`,color:`#059669`,desc:`Peça finalizada e inspecionada`},{id:`completed`,label:`Concluído`,icon:`done_all`,color:`#64748b`,desc:`Entregue ao cliente`},{id:`cancelled`,label:`Cancelado`,icon:`cancel`,color:`#ef4444`,desc:`Pedido cancelado`}];function Zs(e){return Xs.find(t=>t.id===e)||Xs[0]}var Qs=new Map;function $s(e){return typeof localStorage<`u`?localStorage.getItem(e):Qs.get(e)||null}function ec(e,t){typeof localStorage<`u`&&localStorage.setItem(e,t),Qs.set(e,t)}function tc(){try{let e=$s(Ys);if(e)return JSON.parse(e)}catch(e){console.warn(`[SitePrint3D] Falha ao ler pedidos do localStorage:`,e)}let e=[{id:`PED-1024`,createdAt:new Date(Date.now()-24e5).toISOString(),modelId:`team-crest-3d`,modelTitle:`Escudo de Mesa 3D do Seu Time do Coração`,sourceUrl:`https://makerworld.com/en/models/28419`,material:`PLA`,colorName:`Lava Red`,colorHex:`#D32F2F`,customizationText:`Flamengo — com base preta e letras douradas`,quality:`0.20mm — Padrão Bambu`,infill:`15% Giroide`,scale:100,quantity:1,estimatedMinutes:85,filamentGrams:68,customerName:`Lucas (Filho)`,customerPhone:`(11) 98765-4321`,deliveryType:`Retirada no estúdio`,notes:`Fazer acabamento com base de apoio firme`,status:`printing`},{id:`PED-1025`,createdAt:new Date(Date.now()-9e5).toISOString(),modelId:`spotify-code-keychain`,modelTitle:`Chaveiro Spotify Code — "A Nossa Música"`,sourceUrl:`https://makerworld.com/en/models/35210`,material:`PLA`,colorName:`Jade White`,colorHex:`#F5F5F5`,customizationText:`Queen - Bohemian Rhapsody`,quality:`0.12mm — Alta Definição`,infill:`100% Maciço`,scale:100,quantity:2,estimatedMinutes:24,filamentGrams:14,customerName:`Wagner Marques`,customerPhone:`(11) 99999-8888`,deliveryType:`Presente especial de aniversário`,notes:`Código em alto-relevo preto para leitura fácil pela câmera`,status:`queued`},{id:`PED-1026`,createdAt:new Date(Date.now()-72e5).toISOString(),modelId:`custom-pet-keychain`,modelTitle:`Chaveiro Silhueta de Pet com Nome Gravado`,sourceUrl:`https://makerworld.com/en/models/22194`,material:`PETG`,colorName:`Silk Gold`,colorHex:`#FFD54F`,customizationText:`Golden Retriever — Bob`,quality:`0.20mm — Padrão Bambu`,infill:`25% Grade`,scale:100,quantity:1,estimatedMinutes:28,filamentGrams:16,customerName:`Mariana`,customerPhone:`(11) 97777-6666`,deliveryType:`Retirada no estúdio`,notes:`Nome do pet gravado em relevo no verso`,status:`ready`}];return nc(e),e}function nc(e){try{ec(Ys,JSON.stringify(e)),typeof window<`u`&&window.dispatchEvent(new CustomEvent(`siteprint-orders-updated`,{detail:{count:e.length}}))}catch(e){console.error(`[SitePrint3D] Falha ao salvar pedidos:`,e)}}var $={list(){return tc()},get(e){return tc().find(t=>t.id===e)||null},create(e){let t=tc(),n={id:`PED-${t.length>0?Math.max(...t.map(e=>parseInt(e.id.replace(/\D/g,``)||`1000`,10)))+1:1001}`,createdAt:new Date().toISOString(),status:`queued`,...e};t.unshift(n),nc(t);try{Jo.add({title:`Novo pedido ${n.id}`,body:`${n.customerName} pediu ${n.modelTitle} (${n.colorName})`,href:`#/pedidos`})}catch{}return n},updateStatus(e,t){let n=tc(),r=n.find(t=>t.id===e);if(!r)return null;r.status=t,nc(n);let i=Zs(t);try{Jo.add({title:`Status atualizado: ${r.id}`,body:`${r.modelTitle} agora está em: ${i.label}`,href:`#/pedidos`})}catch{}return r},delete(e){nc(tc().filter(t=>t.id!==e))},generateWhatsAppText(e){return`*Solicitação de Impressão 3D — Bambu Lab A1*\n\n*Pedido:* ${e.id}\n*Modelo:* ${e.modelTitle}\n`+(e.customizationText?`*Personalização (Time / Música / Pet / Nome):* ${e.customizationText}\n`:``)+`*Material:* ${e.material}\n*Cor Escolhida:* ${e.colorName}\n*Qualidade:* ${e.quality}\n*Infill:* ${e.infill||`15%`}\n*Escala:* ${e.scale||100}%\n*Quantidade:* ${e.quantity||1}\n*Tempo Estimado:* ~${e.estimatedMinutes||45} min\n*Peso Estimado:* ~${e.filamentGrams||30}g\n`+(e.sourceUrl?`*Link do Modelo:* ${e.sourceUrl}\n`:``)+`\n*Cliente:* ${e.customerName}\n*Contato:* ${e.customerPhone}\n*Entrega/Retirada:* ${e.deliveryType}\n`+(e.notes?`*Observações:* ${e.notes}\n`:``)+`
_Enviado pelo SitePrint 3D (Bambu Lab A1)_`},generateWhatsAppUrl(e){let t=this.generateWhatsAppText(e);return`https://api.whatsapp.com/send?text=${encodeURIComponent(t)}`}},rc=class extends w{static properties={open:{type:Boolean},model:{type:Object},config:{type:Object},customerName:{type:String},customerPhone:{type:String},deliveryType:{type:String},notes:{type:String}};static styles=o`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      box-sizing: border-box;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .modal {
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 20px;
      max-width: 520px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
      padding: 24px;
      transform: translateY(20px);
      transition: transform 0.25s ease;
    }

    .backdrop.open .modal {
      transform: translateY(0);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 1.3rem;
      margin: 0;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .summary-card {
      background: var(--md-sys-color-surface-variant);
      border-radius: 12px;
      padding: 14px;
      margin-bottom: 20px;
      border: 1px solid var(--md-sys-color-outline);
    }

    .summary-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .summary-specs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 0.8rem;
    }

    .pill {
      background: var(--md-sys-color-surface);
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .color-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.95rem;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus, select:focus, textarea:focus {
      border-color: #00ae42;
      box-shadow: 0 0 0 2px rgba(0, 174, 66, 0.2);
    }

    .actions-footer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 24px;
    }

    .buttons-row {
      display: flex;
      gap: 10px;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
      width: 100%;
    }

    .confirm-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
      flex: 1;
    }

    .cancel-btn {
      flex: 1;
    }

    .help-text {
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
      margin-top: 4px;
    }
  `;constructor(){super(),this.open=!1,this.model=null,this.config={},this.customerName=``,this.customerPhone=``,this.deliveryType=`Retirada no estúdio`,this.notes=``}close(){this.open=!1,this.dispatchEvent(new CustomEvent(`close`))}_gatherOrderData(){let e=this.model||{},t=this.config||{};return{modelId:e.id||`personalizado`,modelTitle:e.title||`Modelo 3D`,sourceUrl:e.sourceUrl||``,material:t.material||`PLA`,colorName:t.color?.name||`Bambu Green`,colorHex:t.color?.hex||`#00AE42`,customizationText:t.customizationText||``,quality:t.quality?.name||`0.20mm`,infill:t.infill||`15%`,scale:t.scale||100,quantity:t.quantity||1,estimatedMinutes:Math.round((e.estimatedMinutes||45)*(t.quality?.multiplier||1)*(t.scale?(t.scale/100)**2:1)),filamentGrams:Math.round((e.filamentGrams||30)*(t.scale?(t.scale/100)**3:1)*(t.quantity||1)),customerName:this.customerName||`Cliente`,customerPhone:this.customerPhone||`Não informado`,deliveryType:this.deliveryType,notes:this.notes||t.notes||``}}_submitLocal(){if(!this.customerName.trim()){alert(`Por favor informe seu nome.`);return}let e=this._gatherOrderData();$.create(e),this.close(),K(`pedidos`)}_submitWhatsApp(){if(!this.customerName.trim()){alert(`Por favor informe seu nome.`);return}let e=this._gatherOrderData(),t=$.create(e),n=$.generateWhatsAppUrl(t);this.close(),window.open(n,`_blank`),K(`pedidos`)}render(){let e=this.model||{},t=this.config||{};return x`
      <div class="backdrop ${this.open?`open`:``}" @click=${e=>e.target.classList.contains(`backdrop`)&&this.close()}>
        <div class="modal">
          <div class="header">
            <h2>
              <md-icon style="color: #00ae42">shopping_bag</md-icon>
              Confirmar Pedido de Impressão
            </h2>
            <md-icon-button @click=${this.close}>
              <md-icon>close</md-icon>
            </md-icon-button>
          </div>

          <div class="summary-card">
            <div class="summary-title">
              <span>${e.title||`Modelo 3D`}</span>
            </div>
            <div class="summary-specs">
              <span class="pill">
                <strong>Material:</strong> ${t.material||`PLA`}
              </span>
              <span class="pill">
                <span class="color-dot" style="background: ${t.color?.hex||`#00AE42`}"></span>
                ${t.color?.name||`Bambu Green`}
              </span>
              <span class="pill">
                <strong>Qualidade:</strong> ${t.quality?.id||`0.20`}mm
              </span>
              <span class="pill">
                <strong>Escala:</strong> ${t.scale||100}%
              </span>
              <span class="pill">
                <strong>Qtd:</strong> ${t.quantity||1}x
              </span>
              ${t.customizationText?x`
                    <span class="pill" style="border-color: #ff9800; background: rgba(255, 152, 0, 0.12)">
                      <strong style="color: #ff9800">Personalização:</strong> ${t.customizationText}
                    </span>
                  `:``}
            </div>
          </div>

          <div class="form-group">
            <label>Seu Nome *</label>
            <input
              type="text"
              placeholder="Ex: João da Silva"
              .value=${this.customerName}
              @input=${e=>this.customerName=e.target.value}
              required
            />
          </div>

          <div class="form-group">
            <label>Seu WhatsApp / Telefone *</label>
            <input
              type="tel"
              placeholder="Ex: (11) 98765-4321"
              .value=${this.customerPhone}
              @input=${e=>this.customerPhone=e.target.value}
              required
            />
            <div class="help-text">Usado para avisar assim que sua peça sair da impressora!</div>
          </div>

          <div class="form-group">
            <label>Opção de Retirada ou Entrega</label>
            <select
              .value=${this.deliveryType}
              @change=${e=>this.deliveryType=e.target.value}
            >
              <option value="Retirada no estúdio">Retirada no estúdio / local</option>
              <option value="Combinar entrega">Combinar entrega / envio</option>
            </select>
          </div>

          <div class="form-group">
            <label>Observações Adicionais (Opcional)</label>
            <textarea
              rows="2"
              placeholder="Ex: se tiver duas cores no AMS Lite, cor secundária preta..."
              .value=${this.notes}
              @input=${e=>this.notes=e.target.value}
            ></textarea>
          </div>

          <div class="actions-footer">
            <md-filled-button class="whatsapp-btn" @click=${this._submitWhatsApp}>
              <md-icon slot="icon">chat</md-icon>
              Pedir & Enviar via WhatsApp Direto
            </md-filled-button>

            <div class="buttons-row">
              <md-outlined-button class="cancel-btn" @click=${this.close}>
                Voltar
              </md-outlined-button>

              <md-filled-button class="confirm-btn" @click=${this._submitLocal}>
                <md-icon slot="icon">check</md-icon>
                Adicionar à Fila
              </md-filled-button>
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define(`order-dialog`,rc);var ic=class extends w{static properties={modelId:{type:String},selectedMaterial:{type:String},selectedColor:{type:Object},selectedQuality:{type:Object},selectedInfill:{type:String},scale:{type:Number},quantity:{type:Number},customizationText:{type:String},notes:{type:String},dialogOpen:{type:Boolean}};static styles=o`
    :host {
      display: block;
      max-width: 1040px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .back-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      cursor: pointer;
      color: var(--md-sys-color-primary);
      font-weight: 600;
      font-size: 0.95rem;
    }

    .layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 32px;
    }

    .visual-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .preview-box {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      border-radius: 20px;
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      position: relative;
      border: 1px solid var(--md-sys-color-outline);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .preview-box md-icon.main-icon {
      font-size: 110px;
      --md-icon-size: 110px;
      color: #00ae42;
      filter: drop-shadow(0 4px 16px rgba(0, 174, 66, 0.4));
    }

    .bed-badge {
      position: absolute;
      bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      color: #cbd5e1;
    }

    .bed-badge md-icon {
      color: #00ae42;
      --md-icon-size: 16px;
    }

    .source-box {
      background: var(--md-sys-color-surface-variant);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .source-info {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .source-info strong {
      color: var(--md-sys-color-on-surface);
      display: block;
      font-size: 0.95rem;
      margin-bottom: 2px;
    }

    .info-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0 0 8px;
      color: var(--md-sys-color-on-surface);
      line-height: 1.25;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--md-sys-color-on-surface);
      margin: 0;
    }

    .personalization-card {
      background: rgba(255, 152, 0, 0.08);
      border: 2px dashed #ff9800;
      border-radius: 16px;
      padding: 16px;
      margin-top: 6px;
    }

    .personalization-card .section-title {
      margin-top: 0;
      color: #e65100;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
      margin: 16px 0 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .materials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .material-card {
      border: 2px solid var(--md-sys-color-outline);
      border-radius: 12px;
      padding: 10px;
      background: var(--md-sys-color-surface);
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }

    .material-card:hover {
      border-color: #00ae42;
    }

    .material-card.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.08);
    }

    .material-name {
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 2px;
    }

    .material-badge {
      font-size: 0.7rem;
      color: #00ae42;
      font-weight: 600;
    }

    .colors-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .color-swatch {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 2px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--md-sys-color-on-surface);
      transition: all 0.2s;
    }

    .color-swatch:hover {
      border-color: #00ae42;
    }

    .color-swatch.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.1);
      font-weight: 700;
    }

    .color-circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .options-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .field-label {
      font-size: 0.82rem;
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    select, input {
      width: 100%;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.9rem;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
    }

    select:focus, input:focus {
      border-color: #00ae42;
    }

    .summary-bar {
      background: var(--md-sys-color-surface-variant);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 16px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    .summary-metrics {
      display: flex;
      gap: 20px;
    }

    .metric-item {
      display: flex;
      flex-direction: column;
    }

    .metric-label {
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .metric-val {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--md-sys-color-on-surface);
    }

    .metric-val span {
      color: #00ae42;
    }

    .order-cta-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
      padding: 0 12px;
    }

    @media (max-width: 800px) {
      .layout {
        grid-template-columns: 1fr;
      }
      .materials-grid {
        grid-template-columns: 1fr;
      }
    }
  `;constructor(){super(),this.selectedMaterial=`PLA`,this.selectedColor=Gs[0],this.selectedQuality=Ks[1],this.selectedInfill=`15%`,this.scale=100,this.quantity=1,this.customizationText=``,this.notes=``,this.dialogOpen=!1}_getModel(){return Vs.find(e=>e.id===this.modelId)||Vs[0]}_getCalculatedTime(e){let t=this.selectedQuality?.multiplier||1,n=(this.scale/100)**2;return Math.round(e*t*n*this.quantity)}_getCalculatedGrams(e){let t=(this.scale/100)**3,n=qs.find(e=>e.id===this.selectedInfill)?.factor||1;return Math.round(e*t*n*this.quantity)}render(){let e=this._getModel(),t=this._getCalculatedTime(e.estimatedMinutes),n=this._getCalculatedGrams(e.filamentGrams);return x`
      <div class="back-nav" @click=${()=>K(``)}>
        <md-icon>arrow_back</md-icon>
        Voltar ao Catálogo de Modelos
      </div>

      <div class="layout">
        <!-- Visual & Source -->
        <div class="visual-col">
          <div class="preview-box">
            <md-icon class="main-icon">${e.previewIcon||`category`}</md-icon>
            <div class="bed-badge">
              <md-icon>check_circle</md-icon>
              Compatível c/ Bambu Lab A1 (Mesa 256×256 mm)
            </div>
          </div>

          <div class="source-box">
            <div class="source-info">
              <strong>${e.source}: ${e.designer}</strong>
              Licença: ${e.license}
            </div>
            <md-outlined-button href=${e.sourceUrl} target="_blank">
              <md-icon slot="icon">open_in_new</md-icon>
              Ver Arquivo 3D
            </md-outlined-button>
          </div>
        </div>

        <!-- Details & Configurator -->
        <div class="info-col">
          <div>
            <h1>${e.title}</h1>
            <p class="description">${e.description}</p>
          </div>

          ${e.emotionalPrompt?x`
                <div class="personalization-card">
                  <div class="section-title">
                    <md-icon style="color: #ff9800">favorite</md-icon>
                    Personalização Afetiva & Especial
                  </div>
                  <div class="field-label">${e.emotionalPrompt}</div>
                  <input
                    type="text"
                    placeholder="Digite sua personalização aqui..."
                    .value=${this.customizationText}
                    @input=${e=>this.customizationText=e.target.value}
                  />
                </div>
              `:``}

          <!-- 1. Material -->
          <div>
            <div class="section-title">
              <md-icon style="color: #00ae42">layers</md-icon>
              1. Escolha o Material
            </div>
            <div class="materials-grid">
              ${Ws.map(e=>x`
                  <div
                    class="material-card ${this.selectedMaterial===e.id?`active`:``}"
                    @click=${()=>this.selectedMaterial=e.id}
                  >
                    <div class="material-name">${e.id}</div>
                    <div class="material-badge">${e.badge}</div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 2. Cor do Filamento -->
          <div>
            <div class="section-title">
              <md-icon style="color: #00ae42">palette</md-icon>
              2. Escolha a Cor do Filamento (${this.selectedColor.name})
            </div>
            <div class="colors-grid">
              ${Gs.map(e=>x`
                  <div
                    class="color-swatch ${this.selectedColor.id===e.id?`active`:``}"
                    @click=${()=>this.selectedColor=e}
                  >
                    <span class="color-circle" style="background: ${e.hex}"></span>
                    ${e.name}
                  </div>
                `)}
            </div>
          </div>

          <!-- 3. Parâmetros de Impressão -->
          <div class="options-row">
            <div>
              <div class="field-label">Qualidade / Altura de Camada</div>
              <select
                .value=${this.selectedQuality.id}
                @change=${e=>{this.selectedQuality=Ks.find(t=>t.id===e.target.value)||Ks[1]}}
              >
                ${Ks.map(e=>x`<option value=${e.id}>${e.name}</option>`)}
              </select>
            </div>

            <div>
              <div class="field-label">Preenchimento (Infill)</div>
              <select
                .value=${this.selectedInfill}
                @change=${e=>this.selectedInfill=e.target.value}
              >
                ${qs.map(e=>x`<option value=${e.id}>${e.name}</option>`)}
              </select>
            </div>
          </div>

          <!-- 4. Escala e Quantidade -->
          <div class="options-row">
            <div>
              <div class="field-label">Escala (% do tamanho original)</div>
              <select
                .value=${String(this.scale)}
                @change=${e=>this.scale=Number(e.target.value)}
              >
                <option value="75">75% (Compacto)</option>
                <option value="100">100% (Original - ${e.dimensions})</option>
                <option value="125">125% (Maior)</option>
                <option value="150">150% (Grande)</option>
              </select>
            </div>

            <div>
              <div class="field-label">Quantidade de Peças</div>
              <input
                type="number"
                min="1"
                max="20"
                .value=${String(this.quantity)}
                @input=${e=>this.quantity=Math.max(1,Number(e.target.value)||1)}
              />
            </div>
          </div>

          <!-- Summary & Order CTA -->
          <div class="summary-bar">
            <div class="summary-metrics">
              <div class="metric-item">
                <span class="metric-label">Tempo na Bambu A1</span>
                <span class="metric-val">~<span>${t}</span> min</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Peso Estimado</span>
                <span class="metric-val">~<span>${n}</span>g</span>
              </div>
            </div>

            <md-filled-button class="order-cta-btn" @click=${()=>this.dialogOpen=!0}>
              <md-icon slot="icon">shopping_bag</md-icon>
              Pedir Esta Impressão
            </md-filled-button>
          </div>
        </div>
      </div>

      <!-- Order Dialog Modal -->
      <order-dialog
        ?open=${this.dialogOpen}
        .model=${e}
        .config=${{material:this.selectedMaterial,color:this.selectedColor,quality:this.selectedQuality,infill:this.selectedInfill,scale:this.scale,quantity:this.quantity,customizationText:this.customizationText,notes:this.notes}}
        @close=${()=>this.dialogOpen=!1}
      ></order-dialog>
    `}};customElements.define(`model-detail-view`,ic);var ac=class extends w{static properties={orders:{type:Array},filterTab:{type:String}};static styles=o`
    :host {
      display: block;
      max-width: 980px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 16px;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 800;
      margin: 0;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .tabs-row {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--md-sys-color-outline);
      padding-bottom: 12px;
      overflow-x: auto;
    }

    .tab-btn {
      padding: 8px 16px;
      border-radius: 999px;
      border: 1px solid transparent;
      background: none;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }

    .tab-btn.active {
      background: var(--md-sys-color-surface-variant);
      color: #00ae42;
      border-color: #00ae42;
    }

    .order-card {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 18px;
      padding: 20px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: border-color 0.2s;
    }

    .order-card:hover {
      border-color: #00ae42;
    }

    .order-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .order-id-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .order-id {
      font-weight: 800;
      font-size: 1.15rem;
      color: var(--md-sys-color-on-surface);
    }

    .order-date {
      font-size: 0.8rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
    }

    .status-badge md-icon {
      --md-icon-size: 16px;
    }

    .stepper {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 16px 0;
      padding: 12px;
      background: var(--md-sys-color-surface-variant);
      border-radius: 12px;
      overflow-x: auto;
    }

    .step-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface-variant);
      white-space: nowrap;
    }

    .step-item.active {
      color: #00ae42;
    }

    .step-item.passed {
      color: #64748b;
    }

    .step-arrow {
      color: var(--md-sys-color-outline);
    }

    .order-body {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }

    .model-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
      margin-bottom: 6px;
    }

    .order-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 0.82rem;
      margin-bottom: 8px;
    }

    .order-tag {
      background: var(--md-sys-color-surface-variant);
      padding: 4px 10px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .color-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .customer-info {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant);
      background: var(--md-sys-color-surface-variant);
      padding: 12px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .customer-info strong {
      color: var(--md-sys-color-on-surface);
    }

    .order-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 14px;
      border-top: 1px solid var(--md-sys-color-outline);
    }

    .action-group-right {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
    }

    .advance-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
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

    @media (max-width: 650px) {
      .order-body {
        grid-template-columns: 1fr;
      }
    }
  `;constructor(){super(),this.orders=[],this.filterTab=`all`,this._onOrdersUpdated=()=>this._load()}connectedCallback(){super.connectedCallback(),this._load(),window.addEventListener(`siteprint-orders-updated`,this._onOrdersUpdated)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`siteprint-orders-updated`,this._onOrdersUpdated)}_load(){this.orders=$.list()}_advanceStatus(e){let t=[`queued`,`slicing`,`printing`,`ready`,`completed`],n=t.indexOf(e.status);if(n>=0&&n<t.length-1){let r=t[n+1];$.updateStatus(e.id,r),this._load()}}_delete(e){confirm(`Tem certeza que deseja remover este pedido da fila?`)&&($.delete(e),this._load())}_getFilteredOrders(){return this.filterTab===`active`?this.orders.filter(e=>[`queued`,`slicing`,`printing`].includes(e.status)):this.filterTab===`ready`?this.orders.filter(e=>[`ready`,`completed`].includes(e.status)):this.orders}render(){let e=this._getFilteredOrders(),t=this.orders.filter(e=>[`queued`,`slicing`,`printing`].includes(e.status)).length;return x`
      <div class="header-row">
        <div>
          <h1>
            <md-icon style="color: #00ae42">receipt_long</md-icon>
            Fila de Impressão Bambu Lab A1
          </h1>
          <div style="font-size: 0.9rem; color: var(--md-sys-color-on-surface-variant)">
            Acompanhe em tempo real o status de produção, fatiamento e impressão das peças.
          </div>
        </div>

        <md-filled-button
          style="--md-filled-button-container-color: #00ae42"
          @click=${()=>K(``)}
        >
          <md-icon slot="icon">add</md-icon>
          Novo Pedido
        </md-filled-button>
      </div>

      <div class="tabs-row">
        <button
          class="tab-btn ${this.filterTab===`all`?`active`:``}"
          @click=${()=>this.filterTab=`all`}
        >
          Todos (${this.orders.length})
        </button>
        <button
          class="tab-btn ${this.filterTab===`active`?`active`:``}"
          @click=${()=>this.filterTab=`active`}
        >
          Em Produção (${t})
        </button>
        <button
          class="tab-btn ${this.filterTab===`ready`?`active`:``}"
          @click=${()=>this.filterTab=`ready`}
        >
          Prontos & Concluídos (${this.orders.length-t})
        </button>
      </div>

      ${e.length===0?x`
            <div class="empty-state">
              <md-icon>inbox</md-icon>
              <h3>Nenhum pedido nesta aba</h3>
              <p>Escolha um modelo gratuito do catálogo e solicite sua primeira impressão 3D!</p>
              <md-filled-button
                style="--md-filled-button-container-color: #00ae42"
                @click=${()=>K(``)}
              >
                Explorar Catálogo
              </md-filled-button>
            </div>
          `:e.map(e=>{let t=Zs(e.status);return x`
              <div class="order-card">
                <div class="order-top">
                  <div class="order-id-group">
                    <span class="order-id">${e.id}</span>
                    <span class="order-date">
                      ${new Date(e.createdAt).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`2-digit`,hour:`2-digit`,minute:`2-digit`})}
                    </span>
                  </div>

                  <span
                    class="status-badge"
                    style="background: ${t.color}22; color: ${t.color}; border: 1px solid ${t.color}66"
                  >
                    <md-icon>${t.icon}</md-icon>
                    ${t.label}
                  </span>
                </div>

                <!-- Stepper Visual -->
                <div class="stepper">
                  <div class="step-item ${e.status===`queued`?`active`:`passed`}">
                    <md-icon style="--md-icon-size: 16px">schedule</md-icon>
                    1. Na Fila
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${e.status===`slicing`?`active`:[`printing`,`ready`,`completed`].includes(e.status)?`passed`:``}">
                    <md-icon style="--md-icon-size: 16px">layers</md-icon>
                    2. Fatiando (Bambu Studio)
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${e.status===`printing`?`active`:[`ready`,`completed`].includes(e.status)?`passed`:``}">
                    <md-icon style="--md-icon-size: 16px">precision_manufacturing</md-icon>
                    3. Imprimindo na A1
                  </div>
                  <md-icon class="step-arrow" style="--md-icon-size: 14px">chevron_right</md-icon>
                  <div class="step-item ${e.status===`ready`?`active`:e.status===`completed`?`passed`:``}">
                    <md-icon style="--md-icon-size: 16px">verified</md-icon>
                    4. Pronto
                  </div>
                </div>

                <div class="order-body">
                  <div>
                    <div class="model-title">${e.modelTitle}</div>
                    ${e.customizationText?x`<div style="font-size: 0.9rem; color: #e65100; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                          <md-icon style="--md-icon-size: 18px; color: #ff9800">favorite</md-icon>
                          Personalização: ${e.customizationText}
                        </div>`:``}
                    <div class="order-tags">
                      <span class="order-tag">
                        <strong>Material:</strong> ${e.material}
                      </span>
                      <span class="order-tag">
                        <span class="color-dot" style="background: ${e.colorHex}"></span>
                        ${e.colorName}
                      </span>
                      <span class="order-tag">
                        <strong>Escala:</strong> ${e.scale}%
                      </span>
                      <span class="order-tag">
                        <strong>Qtd:</strong> ${e.quantity}x
                      </span>
                      <span class="order-tag">
                        <strong>Tempo:</strong> ~${e.estimatedMinutes} min
                      </span>
                      <span class="order-tag">
                        <strong>Peso:</strong> ~${e.filamentGrams}g
                      </span>
                    </div>

                    ${e.notes?x`<div style="font-size: 0.85rem; color: var(--md-sys-color-on-surface-variant)">
                          <strong>Observações:</strong> ${e.notes}
                        </div>`:``}
                  </div>

                  <div class="customer-info">
                    <div><strong>Cliente:</strong> ${e.customerName}</div>
                    <div><strong>Contato:</strong> ${e.customerPhone}</div>
                    <div><strong>Entrega:</strong> ${e.deliveryType}</div>
                  </div>
                </div>

                <div class="order-actions">
                  <md-filled-button
                    class="whatsapp-btn"
                    @click=${()=>window.open($.generateWhatsAppUrl(e),`_blank`)}
                  >
                    <md-icon slot="icon">chat</md-icon>
                    Compartilhar / Notificar WhatsApp
                  </md-filled-button>

                  <div class="action-group-right">
                    ${e.status!==`completed`&&e.status!==`cancelled`?x`
                          <md-filled-button
                            class="advance-btn"
                            @click=${()=>this._advanceStatus(e)}
                          >
                            <md-icon slot="icon">fast_forward</md-icon>
                            Avançar Etapa
                          </md-filled-button>
                        `:``}

                    <md-icon-button
                      title="Excluir pedido"
                      @click=${()=>this._delete(e.id)}
                    >
                      <md-icon>delete</md-icon>
                    </md-icon-button>
                  </div>
                </div>
              </div>
            `})}
    `}};customElements.define(`orders-view`,ac);var oc=class extends w{static properties={title:{type:String},url:{type:String},material:{type:String},color:{type:Object},scale:{type:Number},quantity:{type:Number},notes:{type:String},customerName:{type:String},customerPhone:{type:String},deliveryType:{type:String}};static styles=o`
    :host {
      display: block;
      max-width: 760px;
      margin: 0 auto;
      padding: 16px 20px 80px;
    }

    .card {
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 800;
      margin: 0 0 8px;
      color: var(--md-sys-color-on-surface);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .subtitle {
      color: var(--md-sys-color-on-surface-variant);
      margin: 0 0 24px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-size: 0.88rem;
      font-weight: 700;
      margin-bottom: 6px;
      color: var(--md-sys-color-on-surface);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 12px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-size: 0.95rem;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus, select:focus, textarea:focus {
      border-color: #00ae42;
      box-shadow: 0 0 0 2px rgba(0, 174, 66, 0.2);
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .colors-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .color-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid var(--md-sys-color-outline);
      background: var(--md-sys-color-surface);
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface);
      transition: all 0.2s;
    }

    .color-chip:hover {
      border-color: #00ae42;
    }

    .color-chip.active {
      border-color: #00ae42;
      background: rgba(0, 174, 66, 0.12);
      font-weight: 700;
    }

    .color-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 28px;
    }

    .whatsapp-btn {
      --md-filled-button-container-color: #25d366;
      --md-filled-button-label-text-color: #ffffff;
    }

    .submit-btn {
      --md-filled-button-container-color: #00ae42;
      --md-filled-button-label-text-color: #ffffff;
    }

    @media (max-width: 600px) {
      .card {
        padding: 20px;
      }
      .row {
        grid-template-columns: 1fr;
      }
    }
  `;constructor(){super(),this.title=``,this.url=``,this.material=`PLA`,this.color=Gs[0],this.scale=100,this.quantity=1,this.notes=``,this.customerName=``,this.customerPhone=``,this.deliveryType=`Retirada no estúdio`}_submit(e=!1){if(!this.title.trim()){alert(`Por favor digite o nome ou descrição do modelo.`);return}if(!this.customerName.trim()){alert(`Por favor digite o seu nome.`);return}let t=$.create({modelId:`custom`,modelTitle:this.title.trim(),sourceUrl:this.url.trim(),material:this.material,colorName:this.color.name,colorHex:this.color.hex,quality:`0.20mm — Padrão Bambu`,infill:`15% Giroide`,scale:this.scale,quantity:this.quantity,estimatedMinutes:60,filamentGrams:50,customerName:this.customerName.trim(),customerPhone:this.customerPhone.trim()||`Não informado`,deliveryType:this.deliveryType,notes:this.notes.trim()});e&&window.open($.generateWhatsAppUrl(t),`_blank`),K(`pedidos`)}render(){return x`
      <div class="card">
        <h1>
          <md-icon style="color: #00ae42">add_circle</md-icon>
          Solicitar Impressão de Modelo Próprio
        </h1>
        <p class="subtitle">
          Encontrou um modelo no <strong>MakerWorld</strong>, <strong>Printables</strong>,
          <strong>Thingiverse</strong> ou tem seu próprio arquivo 3D? Envie o link ou especificações
          para avaliarmos e colocarmos na fila da Bambu Lab A1.
        </p>

        <div class="form-group">
          <label>Nome do Modelo / Peça Desejada *</label>
          <input
            type="text"
            placeholder="Ex: Suporte para headset gamer modelo Astro A50"
            .value=${this.title}
            @input=${e=>this.title=e.target.value}
            required
          />
        </div>

        <div class="form-group">
          <label>Link do Modelo (MakerWorld, Printables, Thingiverse, Google Drive...) *</label>
          <input
            type="url"
            placeholder="https://makerworld.com/en/models/..."
            .value=${this.url}
            @input=${e=>this.url=e.target.value}
          />
        </div>

        <div class="row">
          <div class="form-group">
            <label>Material Preferido</label>
            <select
              .value=${this.material}
              @change=${e=>this.material=e.target.value}
            >
              ${Ws.map(e=>x`<option value=${e.id}>${e.name}</option>`)}
            </select>
          </div>

          <div class="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              min="1"
              max="20"
              .value=${String(this.quantity)}
              @input=${e=>this.quantity=Number(e.target.value)||1}
            />
          </div>
        </div>

        <div class="form-group">
          <label>Cor do Filamento (${this.color.name})</label>
          <div class="colors-grid">
            ${Gs.map(e=>x`
                <div
                  class="color-chip ${this.color.id===e.id?`active`:``}"
                  @click=${()=>this.color=e}
                >
                  <span class="color-dot" style="background: ${e.hex}"></span>
                  ${e.name}
                </div>
              `)}
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Seu Nome *</label>
            <input
              type="text"
              placeholder="Ex: Wagner Marques"
              .value=${this.customerName}
              @input=${e=>this.customerName=e.target.value}
              required
            />
          </div>

          <div class="form-group">
            <label>Seu WhatsApp / Telefone *</label>
            <input
              type="tel"
              placeholder="Ex: (11) 98765-4321"
              .value=${this.customerPhone}
              @input=${e=>this.customerPhone=e.target.value}
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label>Forma de Entrega</label>
          <select
            .value=${this.deliveryType}
            @change=${e=>this.deliveryType=e.target.value}
          >
            <option value="Retirada no estúdio">Retirada no estúdio / local</option>
            <option value="Combinar envio">Combinar envio</option>
          </select>
        </div>

        <div class="form-group">
          <label>Observações ou Instruções Especiais</label>
          <textarea
            rows="3"
            placeholder="Ex: escala de 80%, infill mais denso para suportar peso, etc."
            .value=${this.notes}
            @input=${e=>this.notes=e.target.value}
          ></textarea>
        </div>

        <div class="actions">
          <md-filled-button
            class="whatsapp-btn"
            @click=${()=>this._submit(!0)}
          >
            <md-icon slot="icon">chat</md-icon>
            Enviar Solicitação Direto via WhatsApp
          </md-filled-button>

          <md-filled-button
            class="submit-btn"
            @click=${()=>this._submit(!1)}
          >
            <md-icon slot="icon">check</md-icon>
            Adicionar à Fila de Impressão
          </md-filled-button>
        </div>
      </div>
    `}};customElements.define(`custom-order-view`,oc);var sc=class extends w{static styles=o`
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
  `;render(){return x`
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
          @click=${()=>K(``)}
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
          <div class="spec-value">${Js.buildVolume}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">speed</md-icon>
          <div class="spec-label">Velocidade Máxima</div>
          <div class="spec-value">${Js.maxSpeed}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">rocket_launch</md-icon>
          <div class="spec-label">Aceleração</div>
          <div class="spec-value">${Js.acceleration}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">palette</md-icon>
          <div class="spec-label">Multicolor</div>
          <div class="spec-value">${Js.multiColorSupport}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">architecture</md-icon>
          <div class="spec-label">Bico Hotend</div>
          <div class="spec-value">${Js.nozzleDiameter}</div>
        </div>

        <div class="spec-card">
          <md-icon class="spec-icon">grid_on</md-icon>
          <div class="spec-label">Mesa de Impressão</div>
          <div class="spec-value">${Js.maxBedTemp}</div>
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
          @click=${()=>K(``)}
        >
          <md-icon slot="icon">shopping_cart</md-icon>
          Fazer um Pedido
        </md-filled-button>
      </div>
    `}};customElements.define(`printer-info-view`,sc);var cc=class extends w{static properties={count:{type:Number}};static styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .queue-btn {
      position: relative;
    }

    .badge {
      position: absolute;
      top: 4px;
      right: 4px;
      background: #00ae42;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 700;
      min-width: 18px;
      height: 18px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      pointer-events: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;constructor(){super(),this.count=0,this._onUpdate=()=>this._loadCount()}connectedCallback(){super.connectedCallback(),this._loadCount(),window.addEventListener(`siteprint-orders-updated`,this._onUpdate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`siteprint-orders-updated`,this._onUpdate)}_loadCount(){let e=$.list();this.count=e.filter(e=>[`queued`,`slicing`,`printing`].includes(e.status)).length}render(){return x`
      <div class="queue-btn">
        <md-icon-button
          title="Ver Fila de Impressão (${this.count} em andamento)"
          @click=${()=>K(`pedidos`)}
        >
          <md-icon>receipt_long</md-icon>
        </md-icon-button>
        ${this.count>0?x`<span class="badge">${this.count}</span>`:``}
      </div>

      <md-icon-button
        title="Solicitar Modelo Próprio"
        @click=${()=>K(`pedido-personalizado`)}
      >
        <md-icon>add_circle</md-icon>
      </md-icon-button>
    `}};customElements.define(`header-quick-actions`,cc);var lc=class extends w{static styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00ae42;
      box-shadow: 0 0 6px rgba(0, 174, 66, 0.8);
    }
  `;render(){return x`
      <span class="dot"></span>
      <span>Bambu Lab A1 (256³ mm)</span>
    `}};customElements.define(`footer-status`,lc),zs({mount:`#app`,home:()=>x`<catalog-view></catalog-view>`,routes:[{name:`modelo-detalhe`,match:G(`modelo/:id`),title:`Configurar Modelo 3D`,render:({id:e})=>x`<model-detail-view .modelId=${e}></model-detail-view>`},{name:`pedidos`,match:G(`pedidos`),title:`Fila de Impressão Bambu A1`,render:()=>x`<orders-view></orders-view>`},{name:`pedido-personalizado`,match:G(`pedido-personalizado`),title:`Solicitar Modelo Próprio`,render:()=>x`<custom-order-view></custom-order-view>`},{name:`impressora`,match:G(`impressora`),title:`Bambu Lab A1 — Estúdio`,render:()=>x`<printer-info-view></printer-info-view>`}],drawer:{sections:[{id:`estudio-3d`,label:`Estúdio 3D`,items:[{label:`Catálogo de Modelos`,icon:`view_cozy`,href:`#/`},{label:`Fila de Impressão & Pedidos`,icon:`receipt_long`,href:`#/pedidos`},{label:`Solicitar Modelo Próprio`,icon:`add_circle`,href:`#/pedido-personalizado`},{label:`Sobre a Bambu Lab A1`,icon:`precision_manufacturing`,href:`#/impressora`}]}],shellSections:{conta:!0,config:!0,compartilhar:!0}},headerActions:()=>x`<header-quick-actions></header-quick-actions>`,footerItems:()=>x`<footer-status></footer-status>`,share:{enabled:!0,title:`SitePrint 3D — Estúdio Bambu Lab A1`,text:`Escolha modelos 3D gratuitos e encomende impressões feitas na Bambu Lab A1!`}});