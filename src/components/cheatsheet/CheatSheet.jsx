import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  Search,
  CheckSquare,
  Square,
  BookOpen,
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
  Code
} from 'lucide-react';

const cheatsheetData = [
  {
    category: 'Layout (Slide 29)',
    items: [
      { name: 'flex', desc: 'Ativa container flexível unidirecional' },
      { name: 'grid', desc: 'Ativa container em grade bidimensional' },
      { name: 'hidden', desc: 'Oculta o elemento (display: none)' },
      { name: 'relative', desc: 'Posicionamento relativo para referenciar filhos absolutos' },
      { name: 'absolute', desc: 'Posicionamento absoluto livre' },
      { name: 'items-center', desc: 'Alinha itens no centro do eixo transversal' },
      { name: 'justify-between', desc: 'Distribui itens com espaço máximo entre eles' },
    ],
  },
  {
    category: 'Estados & Variantes (Slide 15 & 29)',
    items: [
      { name: 'hover:*', desc: 'Aplica estilo quando o cursor passa sobre o elemento' },
      { name: 'focus-visible:*', desc: 'Acessibilidade: aplica anel/estilo quando navegado por Tab' },
      { name: 'active:*', desc: 'Aplica estilo durante o clique do mouse (ex: active:scale-95)' },
      { name: 'disabled:*', desc: 'Aplica estilo em botões/inputs bloqueados (disabled:opacity-50)' },
      { name: 'group-hover:*', desc: 'Altera filhos quando o elemento pai com "group" recebe hover' },
      { name: 'peer-checked:*', desc: 'Altera elementos irmãos quando o input "peer" é marcado' },
      { name: 'open:*', desc: 'Estiliza tags <details> quando o accordion é expandido' },
      { name: 'dark:*', desc: 'Estilos ativos exclusivamente quando o tema escuro estiver ativo' },
    ],
  },
  {
    category: 'Spacing & Sizing (Slide 8, 9 & 29)',
    items: [
      { name: 'p-4 / px-6 / py-3', desc: 'Padding interno em escala padronizada (p-4 = 1rem = 16px)' },
      { name: 'm-4 / mx-auto', desc: 'Margem externa; mx-auto centraliza horizontalmente' },
      { name: 'gap-4', desc: 'Distância entre filhos em containers Flex e Grid' },
      { name: 'w-full / max-w-xl', desc: 'Largura total e largura máxima limite' },
      { name: 'size-10', desc: 'Define width e height simultaneamente (w-10 h-10)' },
      { name: 'aspect-square', desc: 'Proporção 1:1 perfeita (quadrado)' },
      { name: 'min-h-screen', desc: 'Altura mínima de 100% da viewport' },
    ],
  },
  {
    category: 'Tipografia & Cores (Slide 8, 10 & 11)',
    items: [
      { name: 'text-sm / text-xl / text-4xl', desc: 'Tamanho da fonte com escala equilibrada' },
      { name: 'font-bold / font-black', desc: 'Peso da fonte (700 bold, 900 black)' },
      { name: 'tracking-tight / tracking-widest', desc: 'Espaçamento entre letras (-0.025em / +0.1em)' },
      { name: 'leading-relaxed', desc: 'Altura de linha confortável para leitura' },
      { name: 'bg-blue-600 / text-white', desc: 'Cores de fundo e texto da paleta' },
      { name: 'bg-blue-500/20', desc: 'Cores com transparência e canal alfa direto' },
      { name: 'rounded-2xl / rounded-3xl', desc: 'Bordas arredondadas modernas' },
      { name: 'shadow-xl', desc: 'Sombra de elevação com desfoque refinado' },
    ],
  },
  {
    category: 'Responsividade Mobile-First (Slide 14 & 29)',
    items: [
      { name: 'sem prefixo (base)', desc: 'Mobile padrão (telas de qualquer tamanho inicial)' },
      { name: 'sm:*', desc: 'A partir de 640px (tablets e smartphones grandes)' },
      { name: 'md:*', desc: 'A partir de 768px (tablets verticais)' },
      { name: 'lg:*', desc: 'A partir de 1024px (laptops e desktops)' },
      { name: 'xl:*', desc: 'A partir de 1280px (monitores grandes)' },
      { name: '2xl:*', desc: 'A partir de 1536px (telas ultra-wide)' },
    ],
  },
];

const initialChecklist = [
  { id: 'c1', label: 'A interface está próxima ao Figma e design proposto?', checked: true },
  { id: 'c2', label: 'O layout funciona perfeitamente em mobile e desktop (mobile-first)?', checked: true },
  { id: 'c3', label: 'Os estados hover, focus e disabled fazem sentido e dão feedback claro?', checked: true },
  { id: 'c4', label: 'As classes utilizadas podem ser justificadas e explicadas?', checked: true },
  { id: 'c5', label: 'Há labels associados, foco visível de teclado e boa hierarquia tipográfica?', checked: true },
  { id: 'c6', label: 'O código evita duplicação desnecessária e extrai componentes React reutilizáveis?', checked: true },
];

export function CheatSheet() {
  const [searchTerm, setSearchTerm] = useState('');
  const [checklist, setChecklist] = useState(initialChecklist);

  const toggleCheck = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const filteredCategories = cheatsheetData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) =>
          i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          i.desc.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const allChecked = checklist.every((i) => i.checked);

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <section className="border-b border-border pb-6">
        <div className="flex items-center gap-2">
          <Badge variant="blue">Slides 27, 28, 29 & 30</Badge>
          <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Guia Rápido, Cheat Sheet & Checklist
          </h1>
        </div>
        <p className="mt-1 text-sm text-muted">
          Consulte as classes da aula, valide a acessibilidade e confira os itens antes de entregar o projeto de SPA.
        </p>
      </section>

      {/* Checklist do Aluno (Slide 30) */}
      <section>
        <Card padding="p-6" className="border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-border/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Slide 30 · Critérios de Avaliação
              </span>
              <h2 className="text-xl font-bold text-foreground">
                Checklist de Entrega do Aluno
              </h2>
            </div>
            {allChecked ? (
              <Badge variant="green" withDot>
                Todos os Requisitos Concluídos!
              </Badge>
            ) : (
              <span className="text-xs text-muted font-medium">
                Marque cada item conforme validar
              </span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCheck(item.id)}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition cursor-pointer ${
                  item.checked
                    ? 'border-emerald-500/40 bg-emerald-50/40 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-100'
                    : 'border-border bg-surface text-foreground hover:bg-surface-hover'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                  {item.checked ? <CheckSquare className="size-5" /> : <Square className="size-5 text-muted" />}
                </div>
                <span className="text-xs sm:text-sm font-semibold leading-snug">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </Card>
      </section>

      {/* Searchable Cheat Sheet (Slide 29) */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Cheat Sheet de Classes Essenciais (Slide 29)
            </h2>
            <p className="text-xs text-muted">
              Filtragem instantânea de utilitários por propriedade ou descrição.
            </p>
          </div>

          <div className="w-full sm:w-72">
            <Input
              placeholder="Pesquisar classe (ex: hover, p-4, flex)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={Search}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredCategories.map((cat, idx) => (
            <Card key={idx} padding="p-6">
              <h3 className="border-b border-border pb-3 text-sm font-bold text-foreground flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs font-normal text-muted">{cat.items.length} utilitários</span>
              </h3>

              <div className="mt-4 divide-y divide-border">
                {cat.items.map((item, i) => (
                  <div key={i} className="py-2.5 flex items-start justify-between gap-4 text-xs">
                    <code className="rounded-lg bg-blue-500/10 px-2 py-0.5 font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0">
                      {item.name}
                    </code>
                    <span className="text-right text-muted leading-tight">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Slide 6 & 19 Quick Config Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">
          Configuração do Ambiente (Slide 6 & 19)
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card padding="p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              vite.config.js (Slide 6)
            </span>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs text-blue-300">
{`import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}
            </pre>
          </Card>

          <Card padding="p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              src/index.css (Slide 6, 19 & 20)
            </span>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs text-blue-300">
{`@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
}`}
            </pre>
          </Card>
        </div>
      </section>

      {/* Slide 31: Links Oficiais */}
      <section className="border-t border-border pt-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
          Referências Principais (Slide 31)
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Tailwind CSS Docs', href: 'https://tailwindcss.com/docs' },
            { label: 'Tailwind + Vite Guide', href: 'https://tailwindcss.com/docs/installation/using-vite' },
            { label: 'Responsive Design', href: 'https://tailwindcss.com/docs/responsive-design' },
            { label: 'React Official Docs', href: 'https://react.dev' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 text-xs font-semibold text-foreground hover:border-blue-500 hover:text-blue-600 transition"
            >
              <span>{link.label}</span>
              <ExternalLink className="size-3.5 text-muted" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
