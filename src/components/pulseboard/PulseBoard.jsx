import React, { useState, useMemo } from 'react';
import { initialMetrics, initialProducts, recentActivities } from '../../data/pulseData';
import { StatsGrid } from './StatsGrid';
import { ProductCard } from '../ui/ProductCard';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import {
  Search,
  Filter,
  ShoppingBag,
  Plus,
  Sparkles,
  X,
  CheckCircle,
  Clock,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export function PulseBoard() {
  const [metrics] = useState(initialMetrics);
  const [products, setProducts] = useState(initialProducts);
  const [activities] = useState(recentActivities);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemsCount, setCartItemsCount] = useState(3);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = ['Todos', 'Áudio & Gadgets', 'Periféricos', 'Wearables', 'Setup & Office', 'Acessórios'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product) => {
    setCartItemsCount((prev) => prev + 1);
    showToast(`"${product.title}" adicionado ao carrinho!`);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl ring-1 ring-white/10 dark:bg-white dark:text-slate-900 animate-bounce">
          <CheckCircle className="size-5 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero / Header Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white shadow-xl sm:p-8 lg:p-10">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-100 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            Trilha 4 · Projeto Avançado PulseBoard
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            PulseBoard Dashboard
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl">
            Projeto prático unificando <strong>Tailwind CSS 4.3</strong>, <strong>React</strong> e <strong>Vite 8</strong>. Estruturado com arquitetura mobile-first, design tokens <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-mono">@theme</code>, estados interativos, acessibilidade e composição de componentes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm text-xs font-semibold">
              <Layers className="size-4 text-blue-200" />
              <span>Mobile-First Grid</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm text-xs font-semibold">
              <ShoppingBag className="size-4 text-blue-200" />
              <span>{cartItemsCount} Itens no Carrinho</span>
            </div>
          </div>
        </div>

        {/* Decorative backdrop glow */}
        <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Metric Cards (Mobile-first Grid) */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Métricas do Sistema
            </h2>
            <p className="text-xs text-muted">
              Grid responsivo (1 coluna base, 2 colunas sm, 4 colunas lg)
            </p>
          </div>
        </div>
        <StatsGrid metrics={metrics} />
      </section>

      {/* Main Content Area: Products Grid + Sidebar Activities */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Products Section (3 cols on lg) */}
        <div className="space-y-6 lg:col-span-3">
          {/* Controls: Search & Categories */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'border border-border bg-surface text-muted hover:bg-surface-hover hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-64">
              <Input
                placeholder="Buscar produto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={Search}
              />
            </div>
          </div>

          {/* Product Grid Header */}
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Catálogo Dinâmico
              </span>
              <h3 className="text-lg font-bold text-foreground">
                Produtos ({filteredProducts.length})
              </h3>
            </div>
            <span className="text-xs text-muted">
              Demonstrando <code className="font-mono text-xs">group-hover:scale-105</code>
            </span>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={setActiveModalProduct}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <Filter className="mx-auto size-10 text-muted opacity-40" />
              <h4 className="mt-3 text-base font-bold text-foreground">
                Nenhum produto encontrado
              </h4>
              <p className="mt-1 text-xs text-muted">
                Tente alterar os termos de busca ou selecione outra categoria.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todos');
                }}
              >
                Limpar Filtros
              </Button>
            </Card>
          )}
        </div>

        {/* Sidebar: Recent Activities & Tech Specs */}
        <aside className="space-y-6 lg:col-span-1">
          {/* Card de Atividades Recentes */}
          <Card padding="p-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h4 className="text-sm font-bold text-foreground">
                Atividade Recente
              </h4>
              <span className="flex size-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="mt-4 space-y-4">
              {activities.map((act) => (
                <div key={act.id} className="flex items-start gap-3 text-xs">
                  <Avatar src={act.avatar} name={act.user} size="sm" status={act.status} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {act.user}
                    </p>
                    <p className="text-muted leading-tight mt-0.5">
                      {act.action}
                    </p>
                    <span className="mt-1 flex items-center gap-1 text-[10px] text-muted">
                      <Clock className="size-3" />
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card Conceitual dos Slides */}
          <Card padding="p-5" className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/20">
            <div className="flex items-center gap-2">
              <Badge variant="blue">Slide 24</Badge>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                Arquitetura
              </h4>
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Este dashboard cumpre o <strong>Modelo de Componentização</strong> completo:
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-foreground/80 font-medium">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-600" />
                1. <strong>Básicos:</strong> Button, Input, Badge, Avatar
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-600" />
                2. <strong>Compostos:</strong> ProductCard, StatsCard
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-600" />
                3. <strong>Layouts:</strong> Navbar, Grid, Aside
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-600" />
                4. <strong>Projeto:</strong> PulseBoard Interativo
              </li>
            </ul>
          </Card>
        </aside>
      </div>

      {/* Product Details Modal */}
      {activeModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-surface-hover text-muted hover:text-foreground cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <Badge variant={activeModalProduct.badgeVariant || 'blue'}>
                  {activeModalProduct.category}
                </Badge>
                <span className="text-xl font-black text-foreground">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(activeModalProduct.price)}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-foreground">
                {activeModalProduct.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {activeModalProduct.description}
              </p>

              <div className="mt-6 flex items-center justify-end gap-3 border-t border-border pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModalProduct(null)}
                >
                  Fechar
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    handleAddToCart(activeModalProduct);
                    setActiveModalProduct(null);
                  }}
                  icon={ShoppingBag}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
