export const studentExercises = [
  {
    id: 'ex-1',
    title: 'Exercício 1: Card Utility-First',
    slideRef: 'Slides 4, 10 e 11',
    level: 'Iniciante',
    objective: 'Transformar um card cru de HTML em um componente polido com padding, borda suave, cantos arredondados, sombra e hierarquia tipográfica.',
    unСоde: `<div class="card-sem-estilo">
  <span>NOVIDADE</span>
  <h2>Card de Demonstração</h2>
  <p>Descrição do componente com leitura confortável e contraste equilibrado.</p>
  <button>Saiba mais</button>
</div>`,
    solutionCode: `<article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
  <span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 dark:bg-blue-950 dark:text-blue-400">
    NOVIDADE
  </span>
  <h2 class="mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
    Card de Demonstração
  </h2>
  <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
    Descrição do componente com leitura confortável e contraste equilibrado.
  </p>
  <button class="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800">
    Saiba mais
  </button>
</article>`,
    explanation: [
      { utility: 'rounded-3xl', desc: 'Aplica raio de curvatura acentuado nas bordas (24px).' },
      { utility: 'border border-slate-200', desc: 'Cria delimitação sutil em fundo claro.' },
      { utility: 'bg-white / dark:bg-slate-900', desc: 'Alterna a cor do card conforme o tema ativo.' },
      { utility: 'p-6', desc: 'Espaçamento interno equivalente a 1.5rem (24px).' },
      { utility: 'shadow-xl hover:shadow-2xl', desc: 'Elevação suave e feedback ao passar o cursor.' },
      { utility: 'tracking-widest uppercase', desc: 'Estiliza tags e labels para visual moderno e legível.' },
      { utility: 'font-black tracking-tight', desc: 'Dá destaque ao título principal.' }
    ]
  },
  {
    id: 'ex-2',
    title: 'Exercício 2: Estados & Variantes em Botões',
    slideRef: 'Slides 5, 7 e 15',
    level: 'Iniciante / Intermediário',
    objective: 'Implementar um botão totalmente interativo cobrindo hover, active (efeito de clique/press), foco acessível via teclado e estado desabilitado.',
    unСоde: `<button>
  Confirmar Envio
</button>`,
    solutionCode: `<button class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100">
  Confirmar Envio
</button>`,
    explanation: [
      { utility: 'hover:bg-blue-700', desc: 'Feedback imediato de hover escurecendo o tom do azul.' },
      { utility: 'active:scale-95', desc: 'Sensação tátil de clique reduzindo a escala em 5%.' },
      { utility: 'focus-visible:ring-4', desc: 'Acessibilidade de teclado: anel visível quando focado por Tab.' },
      { utility: 'disabled:opacity-50', desc: 'Deixa claro visualmente quando a ação está bloqueada.' },
      { utility: 'transition duration-200', desc: 'Suaviza a troca entre todos os estados.' }
    ]
  },
  {
    id: 'ex-3',
    title: 'Exercício 3: Grid Responsivo Mobile-First & group-hover',
    slideRef: 'Slides 10, 13, 14 e 16',
    level: 'Intermediário',
    objective: 'Construir um catálogo onde os itens começam em 1 coluna (mobile), vão para 2 colunas em telas sm (640px) e 4 colunas em lg (1024px), usando group-hover na imagem do card.',
    unСоde: `<div class="grid-produtos">
  <div class="item">
    <img src="..." />
    <h3>Nome do Produto</h3>
    <span>R$ 199</span>
  </div>
</div>`,
    solutionCode: `<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <article class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div class="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Headphones" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <h3 class="mt-3 font-bold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
      Headphones Pro
    </h3>
    <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">R$ 899,90</p>
  </article>
</div>`,
    explanation: [
      { utility: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', desc: 'Mobile-first: 1 col base -> 2 cols em sm -> 4 cols em telas grandes.' },
      { utility: 'gap-6', desc: 'Espaçamento consistente entre linhas e colunas.' },
      { utility: 'group', desc: 'Marca o card como elemento pai de referência para interação.' },
      { utility: 'group-hover:scale-110', desc: 'Efeito de zoom suave na foto ao passar o mouse em qualquer parte do card pai.' },
      { utility: 'group-hover:text-blue-600', desc: 'Destaque na cor do título ao passar o mouse no card.' }
    ]
  },
  {
    id: 'ex-4',
    title: 'Exercício 4: Switch Toggle com peer-checked (Zero JS)',
    slideRef: 'Slide 17',
    level: 'Intermediário / Avançado',
    objective: 'Construir um switch liga/desliga funcional utilizando a pseudo-classe peer e peer-checked com checkbox sem precisar de código JavaScript para a animação.',
    unСоde: `<label>
  <input type="checkbox" />
  <span>Notificações push</span>
</label>`,
    solutionCode: `<label class="relative inline-flex cursor-pointer items-center gap-3 select-none">
  <input type="checkbox" class="peer sr-only" />
  <div class="h-7 w-12 rounded-full bg-slate-300 transition-colors duration-300 peer-checked:bg-blue-600 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 dark:bg-slate-700 dark:peer-focus-visible:ring-blue-800"></div>
  <div class="absolute left-1 top-1 size-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>
  <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Notificações push</span>
</label>`,
    explanation: [
      { utility: 'sr-only', desc: 'Oculta o input visualmente mas o mantém 100% acessível para leitores de tela.' },
      { utility: 'peer', desc: 'Transforma o input em irmão de referência para os seletores subsequentes.' },
      { utility: 'peer-checked:bg-blue-600', desc: 'Altera o fundo do pill quando o checkbox é marcado.' },
      { utility: 'peer-checked:translate-x-5', desc: 'Desloca a bolinha para a direita dinamicamente.' },
      { utility: 'peer-focus-visible:ring-4', desc: 'Garante foco acessível mesmo com o input invisível.' }
    ]
  },
  {
    id: 'ex-5',
    title: 'Exercício 5: Accordion Nativo com details & open:',
    slideRef: 'Slide 18',
    level: 'Intermediário',
    objective: 'Criar um Accordion expansível usando HTML nativo (<details> e <summary>) estilizado pelo Tailwind com a variante open:.',
    unСоde: `<details>
  <summary>O que é utility-first?</summary>
  <p>Utility-first significa construir interfaces compondo classes pequenas e utilitárias direto no markup.</p>
</details>`,
    solutionCode: `<details class="group rounded-2xl border border-slate-200 bg-white p-5 transition-all open:border-blue-500 open:bg-blue-50/50 open:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:open:border-blue-500 dark:open:bg-blue-950/20">
  <summary class="flex cursor-pointer items-center justify-between font-bold text-slate-800 marker:hidden dark:text-slate-100">
    <span>O que é utility-first?</span>
    <span class="text-xl transition-transform duration-300 group-open:rotate-180 text-blue-600">▾</span>
  </summary>
  <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
    Utility-first significa compor estilos através de classes com responsabilidade única diretamente no JSX/HTML, eliminando o atrito de alternar entre arquivos CSS e inventar nomes de classes arbitrárias.
  </p>
</details>`,
    explanation: [
      { utility: 'marker:hidden', desc: 'Remove a seta padrão do navegador do elemento <summary>.' },
      { utility: 'open:bg-blue-50/50', desc: 'Aplica estilização específica quando o accordion está no estado aberto.' },
      { utility: 'group-open:rotate-180', desc: 'Gira o ícone indicador com animação quando o pai está aberto.' },
      { utility: 'transition-all', desc: 'Garante suavidade na expansão do bloco.' }
    ]
  },
  {
    id: 'ex-6',
    title: 'Exercício 6: Dark Mode & Design Tokens com @theme',
    slideRef: 'Slides 19, 20 e 23',
    level: 'Avançado',
    objective: 'Utilizar as variáveis semânticas do tema (@theme) para alternar entre tema claro e escuro automaticamente com a classe .dark.',
    unСоde: `<section>
  <div>
    <h2>Tema Dinâmico</h2>
    <p>Este painel se adapta instantaneamente ao modo escuro.</p>
  </div>
</section>`,
    solutionCode: `<section class="rounded-3xl border border-border bg-surface p-8 text-foreground shadow-lg transition-colors duration-300">
  <div class="flex items-center justify-between border-b border-border pb-4">
    <div>
      <span class="text-xs font-semibold uppercase tracking-wider text-primary">Design System</span>
      <h2 class="text-2xl font-bold">Tema Dinâmico com Tokens</h2>
    </div>
    <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Token Ativo</span>
  </div>
  <p class="mt-4 text-sm leading-relaxed text-muted">
    Este bloco utiliza <code>bg-surface</code>, <code>text-foreground</code>, <code>border-border</code> e <code>text-primary</code> configurados no <code>@theme</code>.
  </p>
</section>`,
    explanation: [
      { utility: 'bg-surface & text-foreground', desc: 'Tokens semânticos configurados no @theme de acordo com :root e .dark.' },
      { utility: 'border-border', desc: 'Borda com contraste ideal para ambos os temas automaticamente.' },
      { utility: 'text-primary / bg-primary/10', desc: 'Uso da cor primária com opacidade dinâmica.' },
      { utility: 'transition-colors duration-300', desc: 'Transição suave ao alternar entre light e dark mode.' }
    ]
  }
];
