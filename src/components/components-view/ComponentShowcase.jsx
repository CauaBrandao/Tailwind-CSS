import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Switch } from '../ui/Switch';
import { Accordion } from '../ui/Accordion';
import { ProductCard } from '../ui/ProductCard';
import { LoginForm } from '../ui/LoginForm';
import {
  Send,
  Trash2,
  Download,
  Search,
  Mail,
  ShieldCheck,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

export function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [switchState, setSwitchState] = useState(true);

  const sampleProduct = {
    id: 99,
    title: 'Pulse Pro Wireless Headphones',
    category: 'Áudio & Gadgets',
    price: 899.90,
    rating: 4.9,
    reviews: 142,
    badge: 'Mais Vendido',
    badgeVariant: 'blue',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    description: 'Cancelamento ativo de ruído híbrido, drivers de titânio de 40mm e bateria de 45h.',
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <section className="border-b border-border pb-6">
        <div className="flex items-center gap-2">
          <Badge variant="purple">Trilha 3 · Slides 22 & 24</Badge>
          <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Biblioteca de Componentes React + Tailwind
          </h1>
        </div>
        <p className="mt-1 text-sm text-muted">
          Componentes atômicos e compostos reutilizáveis configurados com props e tipagem visual sem classes dinâmicas quebradas (Slide 23).
        </p>
      </section>

      {/* 1. Botões */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            1. Botões (<code className="font-mono text-sm">&lt;Button /&gt;</code>)
          </h2>
          <span className="text-xs text-muted">Variantes, tamanhos, ícones e estados</span>
        </div>

        <Card padding="p-6">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
                Variantes de Cor
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" icon={Send}>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline" icon={Download}>Outline</Button>
                <Button variant="danger" icon={Trash2}>Danger</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
                Tamanhos
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 2. Inputs & Campos de Formulário */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            2. Inputs Acessíveis (<code className="font-mono text-sm">&lt;Input /&gt;</code>)
          </h2>
          <span className="text-xs text-muted">Labels semânticos, foco visível e validação</span>
        </div>

        <Card padding="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Input
              label="Nome Completo"
              placeholder="Digite seu nome..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="Exibição padrão com helper text"
            />
            <Input
              label="E-mail com Ícone"
              type="email"
              placeholder="seu.email@exemplo.com"
              icon={Mail}
              helperText="Campo com prefixo de ícone"
            />
            <Input
              label="Validação com Erro"
              placeholder="Ex: CPF ou Matrícula"
              error="Documento inválido ou já cadastrado"
              required
            />
          </div>
        </Card>
      </section>

      {/* 3. Badges, Avatares e Switches */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            3. Badges, Avatares & Switches
          </h2>
          <span className="text-xs text-muted">Elementos visuais atômicos</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Badges */}
          <Card padding="p-5">
            <h3 className="text-sm font-bold text-foreground mb-3">Badges de Status</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue" withDot>Em Progresso</Badge>
              <Badge variant="green" withDot>Concluído</Badge>
              <Badge variant="amber" withDot>Pendente</Badge>
              <Badge variant="purple">Design System</Badge>
              <Badge variant="rose">Urgente</Badge>
              <Badge variant="slate">Rascunho</Badge>
            </div>
          </Card>

          {/* Avatars */}
          <Card padding="p-5">
            <h3 className="text-sm font-bold text-foreground mb-3">Avatares com Status</h3>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120"
                name="Cauã Brandão"
                size="lg"
                status="online"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120"
                name="Marina Silveira"
                size="md"
                status="busy"
              />
              <Avatar
                name="Ana Beatriz"
                size="md"
                status="online"
              />
              <Avatar
                name="Rodrigo Faro"
                size="sm"
                status="away"
              />
            </div>
          </Card>

          {/* Switches */}
          <Card padding="p-5">
            <h3 className="text-sm font-bold text-foreground mb-3">Switches (peer-checked)</h3>
            <div className="space-y-3">
              <Switch
                checked={switchState}
                onChange={setSwitchState}
                label="Atualizações automáticas"
                description="Receber alertas em tempo real"
              />
              <Switch
                checked={false}
                label="Modo silencioso"
                description="Desabilitar bips sonoros"
                disabled
              />
            </div>
          </Card>
        </div>
      </section>

      {/* 4. Componentes Compostos (Slide 24) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">
              4. Componentes Compostos (Slide 24)
            </h2>
            <p className="text-xs text-muted">Combinação de elementos básicos em estruturas ricas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Composite 1: ProductCard */}
          <div>
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
              Exemplo: ProductCard com group-hover & estados
            </span>
            <div className="max-w-sm">
              <ProductCard
                product={sampleProduct}
                onAddToCart={() => alert('Adicionado ao carrinho!')}
              />
            </div>
          </div>

          {/* Composite 2: LoginForm */}
          <div>
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
              Exemplo: LoginForm com validação e acessibilidade
            </span>
            <LoginForm />
          </div>
        </div>
      </section>

      {/* 5. Accordions */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">
          5. Accordions Expansíveis (<code className="font-mono text-sm">&lt;Accordion /&gt;</code>)
        </h2>
        <div className="space-y-3 max-w-3xl">
          <Accordion title="Como funciona o sistema de classes do Tailwind v4?" badge="Conceito" defaultOpen>
            O Tailwind v4 elimina a necessidade de arquivo de configuração JavaScript (`tailwind.config.js`). Tudo agora pode ser configurado diretamente no CSS utilizando as diretivas `@theme`, `@custom-variant` e `@layer`.
          </Accordion>
          <Accordion title="Qual é a vantagem do modelo utility-first em relação ao CSS tradicional?" badge="Didático">
            Permite prototipação ultrarrápida, design consistente atrelado a tokens de espaçamento/cores pré-definidos e elimina a duplicação desenfreada de seletores de CSS no projeto.
          </Accordion>
        </div>
      </section>
    </div>
  );
}
