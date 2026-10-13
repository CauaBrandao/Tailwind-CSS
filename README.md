# 🚀 SPA · Tailwind CSS 4.3 + React + Vite 8 — Guia & Aplicação Completa

> **Projeto e Laboratório Prático desenvolvido para a aula de SPA (Single Page Application)**  
> Baseado integralmente na apostila oficial *"Tailwind CSS 4.3 + React + Vite 8: Guia rápido para alunos"*.

---

## 🎯 Objetivo da Aula Atendido

O foco desta entrega é sair do HTML sem estilos para uma interface rica, acessível, responsiva e componentizada:
- ✅ **Modelo Utility-First**: composição direta com classes atômicas sem inchaço de seletores CSS.
- ✅ **Setup Moderno**: Tailwind CSS v4 com `@tailwindcss/vite` e compilador de alto desempenho.
- ✅ **Responsividade Mobile-First**: grids e layouts adaptativos (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- ✅ **Estados e Variantes**: `hover:`, `active:scale-95`, `focus-visible:ring-4`, `disabled:opacity-50`.
- ✅ **Pseudo-classes Avançadas**:
  - `group-hover:*` para efeitos em cartões e catálogo.
  - `peer` e `peer-checked:*` para switches sem necessidade de JavaScript.
  - `details` e `open:*` para accordions nativos sem dependências.
- ✅ **Design Tokens & Dark Mode**: configuração do `@theme`, variáveis CSS em `:root` e `.dark`, e alternância com persistência.
- ✅ **Componentização React**: componentes atômicos (`Button`, `Input`, `Badge`, `Avatar`, `Switch`, `Accordion`) e compostos (`ProductCard`, `LoginForm`).

---

## 🧭 As 4 Trilhas Práticas Implementadas

A aplicação conta com um painel interativo completo acessível via barra de navegação:

### 1. ⚡ PulseBoard (Projeto Avançado — Trilha 4)
- **Dashboard com Métricas em Grid Responsivo**: KPIs de usuários, receita, conversão e desempenho Vite/Tailwind.
- **Catálogo de Produtos com Busca & Filtro de Categorias**: cards interativos com badge, preço formatado em BRL e zoom com `group-hover:scale-105`.
- **Feedback & Carrinho**: toast dinâmico e modal detalhado de produto acessível.
- **Painel Lateral**: atividades recentes e resumo arquitetural da aula.

### 2. 🧪 Tailwind Play (Laboratório Interativo — Trilha 1 / Slide 25)
- Experimentação ao vivo de:
  - **Flexbox**: ajuste de direção, alinhamento e gaps com prévia imediata.
  - **Grid Mobile-First**: demonstração visual dos breakpoints (`base`, `sm:`, `lg:`).
  - **Estados**: botões para testar `hover`, `active`, `focus-visible` e `disabled`.
  - **Group-Hover**: teste prático do comportamento pai/filho.
  - **Peer-Checked**: toggle switch funcional com zero JS.
  - **Details & Open**: accordion nativo.
- Botão para copiar o código JSX/HTML com um clique.

### 3. 🧩 Componentes React (Biblioteca de UI — Trilha 3 / Slides 22-24)
- `<Button />`: variantes `primary`, `secondary`, `outline`, `danger`, `ghost`; tamanhos `sm`, `md`, `lg`; estados de foco e disabled.
- `<Input />`: acessível com `label`, `error`, `helperText`, ícone embutido e foco com anel `focus-visible:ring-4`.
- `<Badge />`: status coloridos com ponto pulsante.
- `<Avatar />`: avatares de fotos reais ou iniciais de fallback com indicador de presença.
- `<Switch />`: switch acessível construído com `peer-checked`.
- `<Accordion />`: expansão nativa com animação da seta via `group-open:rotate-180`.
- `<ProductCard />` e `<LoginForm />`: componentes compostos prontos para produção.

### 4. 📝 Versão do Aluno (Exercícios Guiados — Trilha 2 / Slide 3)
- 6 exercícios cobrindo do básico ao avançado:
  - **Ex 01**: Card Utility-First (Slide 4, 10, 11)
  - **Ex 02**: Estados & Variantes em Botões (Slide 5, 7, 15)
  - **Ex 03**: Grid Responsivo & group-hover (Slide 10, 13, 14, 16)
  - **Ex 04**: Switch Toggle com peer-checked (Slide 17)
  - **Ex 05**: Accordion Nativo com details & open: (Slide 18)
  - **Ex 06**: Dark Mode & Design Tokens com @theme (Slide 19, 20)
- Mecanismo didático com:
  - Enunciado e código cru (HTML sem classes)
  - Botão **"Revelar Solução"** para tentar sozinho primeiro
  - Tabela explicativa detalhada de cada classe Tailwind usada
  - Botão de **"Marcar Concluído"** com barra de progresso do aluno.

### 5. 📖 Guia Rápido & Checklist (Slides 27-31)
- **Cheat Sheet de Consulta Rápida**: busca instantânea de classes por categoria.
- **Checklist de Entrega do Aluno**: validação de critérios antes da entrega da aula.
- **Configuração de Referência**: comandos e arquivos de configuração.

---

## 🛠️ Como Executar o Projeto

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção (Vite 8)
npm run build
```

Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

## 📁 Estrutura de Arquivos

```
Tailwind-CSS/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Cabeçalho com abas e Dark Mode
│   │   ├── ui/                        # Biblioteca de componentes atômicos e compostos
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Switch.jsx
│   │   │   ├── Accordion.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── LoginForm.jsx
│   │   ├── pulseboard/                # Trilha 4: Dashboard PulseBoard
│   │   │   ├── PulseBoard.jsx
│   │   │   └── StatsGrid.jsx
│   │   ├── play/                      # Trilha 1: Laboratório Tailwind Play
│   │   │   └── TailwindPlay.jsx
│   │   ├── exercises/                 # Trilha 2: Exercícios guiados do aluno
│   │   │   └── StudentExercises.jsx
│   │   ├── components-view/           # Trilha 3: Demonstração dos componentes
│   │   │   └── ComponentShowcase.jsx
│   │   └── cheatsheet/                # Consulta rápida e Checklist
│   │       └── CheatSheet.jsx
│   ├── data/
│   │   ├── exerciseData.js            # Enunciados, gabaritos e explicações
│   │   └── pulseData.js               # Métricas e produtos do dashboard
│   ├── App.jsx                        # Orquestrador da aplicação
│   ├── index.css                      # Tailwind v4 @import, @theme e @custom-variant
│   └── main.jsx                       # Ponto de entrada React 19
├── vite.config.js                     # Configuração com @tailwindcss/vite
├── package.json
└── README.md
```
