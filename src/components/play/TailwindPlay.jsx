import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Switch } from '../ui/Switch';
import {
  Copy,
  Check,
  Code2,
  Sliders,
  Layers,
  Sparkles,
  RefreshCw,
  Eye
} from 'lucide-react';

export function TailwindPlay() {
  const [activeCategory, setActiveCategory] = useState('flex');
  const [copied, setCopied] = useState(false);

  // Playground state for customizer
  const [padding, setPadding] = useState('p-6');
  const [rounded, setRounded] = useState('rounded-2xl');
  const [shadow, setShadow] = useState('shadow-xl');
  const [bgColor, setBgColor] = useState('bg-white');
  const [hasBorder, setHasBorder] = useState(true);
  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [justifyContent, setJustifyContent] = useState('justify-between');
  const [alignItems, setAlignItems] = useState('items-center');
  const [gap, setGap] = useState('gap-4');
  const [isTestChecked, setIsTestChecked] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <section className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="blue">Trilha 1 · Slide 25</Badge>
            <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Tailwind Play — Laboratório Interativo
            </h1>
          </div>
          <p className="mt-1 text-sm text-muted">
            Experimente as classes do slide em tempo real sem precisar recompilar. Observe, ajuste e copie o código.
          </p>
        </div>

        {/* Category selector pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-0">
          {[
            { id: 'flex', label: 'Flexbox (Slide 12)' },
            { id: 'grid', label: 'Grid (Slide 13)' },
            { id: 'states', label: 'Estados (Slide 15)' },
            { id: 'group', label: 'Group-Hover (Slide 16)' },
            { id: 'peer', label: 'Peer-Checked (Slide 17)' },
            { id: 'details', label: 'Details & Open (Slide 18)' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'border border-border bg-surface text-muted hover:bg-surface-hover hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Playground Cards based on activeCategory */}
      {activeCategory === 'flex' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Controls Panel */}
          <div className="space-y-4 lg:col-span-5">
            <Card padding="p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Sliders className="size-4 text-blue-600" />
                Controles do Flexbox
              </h3>
              <p className="mt-1 text-xs text-muted">
                Alterne os seletores e veja a reação imediata no container da direita.
              </p>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-foreground">Direção (flex-row / flex-col):</label>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {['flex-row', 'flex-col'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setFlexDirection(d)}
                        className={`rounded-lg py-2 font-mono font-medium transition cursor-pointer ${
                          flexDirection === d
                            ? 'bg-blue-600 text-white'
                            : 'border border-border bg-surface-hover text-muted hover:text-foreground'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-foreground">Distribuição Horizontal (justify-*):</label>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {['justify-between', 'justify-center', 'justify-start', 'justify-end'].map((j) => (
                      <button
                        key={j}
                        onClick={() => setJustifyContent(j)}
                        className={`rounded-lg py-2 font-mono font-medium transition cursor-pointer ${
                          justifyContent === j
                            ? 'bg-blue-600 text-white'
                            : 'border border-border bg-surface-hover text-muted hover:text-foreground'
                        }`}
                      >
                        {j}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-foreground">Alinhamento Vertical (items-*):</label>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    {['items-center', 'items-start', 'items-end'].map((a) => (
                      <button
                        key={a}
                        onClick={() => setAlignItems(a)}
                        className={`rounded-lg py-2 font-mono font-medium transition cursor-pointer ${
                          alignItems === a
                            ? 'bg-blue-600 text-white'
                            : 'border border-border bg-surface-hover text-muted hover:text-foreground'
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-foreground">Espaçamento (gap-*):</label>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    {['gap-2', 'gap-4', 'gap-8'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGap(g)}
                        className={`rounded-lg py-2 font-mono font-medium transition cursor-pointer ${
                          gap === g
                            ? 'bg-blue-600 text-white'
                            : 'border border-border bg-surface-hover text-muted hover:text-foreground'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview & Code */}
          <div className="space-y-4 lg:col-span-7">
            <Card padding="p-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Preview em Tempo Real
                </span>
                <span className="font-mono text-xs text-muted">
                  flex {flexDirection} {justifyContent} {alignItems} {gap}
                </span>
              </div>

              {/* Render Target */}
              <div className="mt-6 min-h-[220px] rounded-2xl border-2 border-dashed border-blue-400/40 bg-blue-50/20 p-6 dark:bg-blue-950/10">
                <div
                  className={`flex h-full w-full ${flexDirection} ${justifyContent} ${alignItems} ${gap} p-4 rounded-xl bg-surface border border-border shadow-md transition-all`}
                >
                  <div className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm">
                    <span className="size-2 rounded-full bg-white" />
                    Item 1: Produto
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm">
                    <span className="size-2 rounded-full bg-white" />
                    Item 2: Preço R$ 890
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white shadow-sm">
                    <span className="size-2 rounded-full bg-white" />
                    Item 3: Botão Comprar
                  </div>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-slate-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-mono text-xs text-slate-400">JSX / HTML Resultante</span>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        `<div class="flex ${flexDirection} ${justifyContent} ${alignItems} ${gap}">\n  <span>Produto</span>\n  <span>R$ 890</span>\n  <button>Comprar</button>\n</div>`
                      )
                    }
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="mt-3 overflow-x-auto font-mono text-xs text-blue-300">
                  {`<div class="flex ${flexDirection} ${justifyContent} ${alignItems} ${gap}">
  <div class="rounded-xl bg-blue-600 px-4 py-2 text-white">Item 1</div>
  <div class="rounded-xl bg-indigo-600 px-4 py-2 text-white">Item 2</div>
  <div class="rounded-xl bg-emerald-600 px-4 py-2 text-white">Item 3</div>
</div>`}
                </pre>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeCategory === 'grid' && (
        <Card padding="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-2">
            <div>
              <h3 className="text-base font-bold text-foreground">
                Grid Responsivo Mobile-First (Slides 13 & 14)
              </h3>
              <p className="text-xs text-muted">
                Redimensione o navegador ou visualize os breakpoints: 1 coluna no celular, 2 em tablets (sm), 4 em desktop (lg).
              </p>
            </div>
            <code className="font-mono text-xs bg-surface-hover px-2.5 py-1 rounded-lg border border-border text-blue-600 dark:text-blue-400">
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
            </code>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500/10 text-lg font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{num}
                </div>
                <h4 className="mt-3 font-bold text-foreground">Coluna #{num}</h4>
                <p className="mt-1 text-xs text-muted">
                  {num === 1 && 'Base mobile (tela inteira)'}
                  {num === 2 && 'Dupla coluna em telas >= 640px (sm)'}
                  {num === 3 && 'Distribuição automática em grade'}
                  {num === 4 && 'Quatro colunas em telas >= 1024px (lg)'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeCategory === 'states' && (
        <Card padding="p-6">
          <h3 className="text-base font-bold text-foreground">
            Estados & Variantes Interativas (Slide 15)
          </h3>
          <p className="text-xs text-muted mt-1">
            Teste cada um dos estados: passe o mouse (<code className="font-mono">hover:</code>), clique mantendo pressionado (<code className="font-mono">active:scale-95</code>), navegue usando o Tab do teclado (<code className="font-mono">focus-visible:ring-4</code>), e teste o estado desabilitado (<code className="font-mono">disabled:opacity-50</code>).
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-3 rounded-2xl border border-border p-5 bg-surface-hover/30">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                1. Botão Primário Normal
              </span>
              <p className="text-xs text-muted">Interaja livremente:</p>
              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 cursor-pointer"
              >
                Passe o Mouse / Clique
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-border p-5 bg-surface-hover/30">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                2. Teste de Foco Acessível (Tab)
              </span>
              <p className="text-xs text-muted">Pressione TAB para acionar:</p>
              <button
                type="button"
                className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-emerald-700 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 cursor-pointer"
              >
                Foco Via Teclado (Tab)
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-border p-5 bg-surface-hover/30">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                3. Estado Disabled
              </span>
              <p className="text-xs text-muted">Ação desativada com opacity-50:</p>
              <button
                type="button"
                disabled
                className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
              >
                Botão Desabilitado
              </button>
            </div>
          </div>
        </Card>
      )}

      {activeCategory === 'group' && (
        <Card padding="p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="text-base font-bold text-foreground">
                group & group-hover (Slide 16)
              </h3>
              <p className="text-xs text-muted">
                Passe o mouse no card inteiro. Note que a foto dá zoom (<code className="font-mono">group-hover:scale-105</code>) e o título muda de cor (<code className="font-mono">group-hover:text-blue-600</code>).
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <article className="group max-w-sm overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=80"
                  alt="Smartwatch Pulse"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Wearable Premium
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-blue-600">
                  Smart Watch Pulse Elite
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Quando o elemento pai possui a classe <code>group</code>, qualquer filho pode reagir com <code>group-hover:*</code>.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-base font-black text-foreground">R$ 1.299,00</span>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </article>
          </div>
        </Card>
      )}

      {activeCategory === 'peer' && (
        <Card padding="p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="text-base font-bold text-foreground">
                peer & peer-checked (Slide 17) — Zero Javascript!
              </h3>
              <p className="text-xs text-muted">
                A animação deste toggle é 100% controlada por CSS puro do Tailwind usando pseudo-classes irmãs.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 py-6 text-center">
            <label className="relative inline-flex cursor-pointer items-center gap-4 select-none">
              {/* O input irmão marcado como peer */}
              <input
                type="checkbox"
                checked={isTestChecked}
                onChange={(e) => setIsTestChecked(e.target.checked)}
                className="peer sr-only"
              />
              {/* Fundo do pill */}
              <div className="h-8 w-14 rounded-full bg-slate-300 transition-colors duration-300 peer-checked:bg-blue-600 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-500/30 dark:bg-slate-700 dark:peer-checked:bg-blue-500" />
              {/* Bolinha do toggle */}
              <div className="absolute top-1 left-1 size-6 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6" />
              <span className="text-base font-bold text-foreground">
                {isTestChecked ? 'Ligado (peer-checked ativo)' : 'Desligado'}
              </span>
            </label>

            <div className="max-w-md rounded-2xl bg-surface-hover p-4 text-xs text-muted text-left border border-border">
              <strong className="text-foreground">Como funciona:</strong>
              <p className="mt-1">
                1. <code className="font-mono text-blue-600">peer</code> no input informa ao Tailwind que seus irmãos podem reagir a ele.
              </p>
              <p className="mt-1">
                2. <code className="font-mono text-blue-600">peer-checked:bg-blue-600</code> muda a cor de fundo.
              </p>
              <p className="mt-1">
                3. <code className="font-mono text-blue-600">peer-checked:translate-x-6</code> desloca a bolinha para a direita.
              </p>
            </div>
          </div>
        </Card>
      )}

      {activeCategory === 'details' && (
        <Card padding="p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="text-base font-bold text-foreground">
                details & open: (Slide 18) — Accordion Nativo do HTML
              </h3>
              <p className="text-xs text-muted">
                Sem bibliotecas terceiras de accordion: usa a tag semântica <code className="font-mono">&lt;details&gt;</code> estilizada com <code className="font-mono">open:*</code>.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 max-w-2xl mx-auto">
            <details className="group rounded-2xl border border-border bg-surface p-5 transition-all open:border-blue-500 open:bg-blue-50/50 open:shadow-md dark:open:bg-blue-950/20">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground select-none marker:hidden">
                <span>O que significa "Utility-First"?</span>
                <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600">
                  ▾
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted border-t border-border/50 pt-3">
                Significa que ao invés de inventar nomes de classes para cada componente (ex: .card-header-v2), você compõe classes utilitárias diretas (ex: flex, p-4, rounded-xl, font-bold). Isso garante consistência com a escala de design tokens e evita inchaço de arquivos CSS.
              </p>
            </details>

            <details className="group rounded-2xl border border-border bg-surface p-5 transition-all open:border-blue-500 open:bg-blue-50/50 open:shadow-md dark:open:bg-blue-950/20">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground select-none marker:hidden">
                <span>Por que usar Vite 8 com Tailwind CSS 4.3?</span>
                <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600">
                  ▾
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted border-t border-border/50 pt-3">
                O Tailwind v4 utiliza o novíssimo compilador Oxide escrito em Rust e integração nativa via plugin oficial @tailwindcss/vite. O tempo de build cai drasticamente para milissegundos e elimina arquivos pesados de configuração como tailwind.config.js e postcss.config.js.
              </p>
            </details>
          </div>
        </Card>
      )}
    </div>
  );
}
