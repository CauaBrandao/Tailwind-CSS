import React, { useState, useEffect } from 'react';
import { studentExercises } from '../../data/exerciseData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Eye,
  EyeOff,
  Code2,
  Sparkles,
  ArrowRight,
  Info,
  Copy,
  Check
} from 'lucide-react';

export function StudentExercises() {
  const [selectedExId, setSelectedExId] = useState('ex-1');
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [completedExercises, setCompletedExercises] = useState(() => {
    try {
      const saved = localStorage.getItem('spa_completed_exercises');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('spa_completed_exercises', JSON.stringify(completedExercises));
    } catch (e) {
      console.error(e);
    }
  }, [completedExercises]);

  const currentExercise = studentExercises.find((ex) => ex.id === selectedExId) || studentExercises[0];
  const isRevealed = !!revealedSolutions[currentExercise.id];
  const isCompleted = !!completedExercises[currentExercise.id];

  const toggleReveal = (id) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleComplete = (id) => {
    setCompletedExercises((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / studentExercises.length) * 100);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Progress Bar */}
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="blue">Trilha 2 · Slide 3</Badge>
              <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Versão do Aluno — Exercícios Guiados
              </h1>
            </div>
            <p className="mt-1 text-sm text-muted">
              Método da aula: <strong>observar → implementar → comparar → modificar → explicar</strong>.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted">Progresso do Aluno:</span>
              <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                {completedCount} de {studentExercises.length} ({progressPercent}%)
              </span>
            </div>
            <div className="mt-2 h-2.5 w-48 overflow-hidden rounded-full bg-surface-hover border border-border">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Exercise Quick Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
          {studentExercises.map((ex, index) => {
            const isSelected = ex.id === selectedExId;
            const done = !!completedExercises[ex.id];
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => setSelectedExId(ex.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'border border-border bg-surface-hover/70 text-muted hover:bg-surface hover:text-foreground'
                }`}
              >
                {done ? (
                  <CheckCircle2 className={`size-3.5 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                ) : (
                  <Circle className="size-3.5 opacity-40" />
                )}
                <span>Ex 0{index + 1}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Exercise Detail Area */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Objective, Controls & Code */}
        <div className="space-y-6 lg:col-span-7">
          <Card padding="p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant={currentExercise.level === 'Avançado' ? 'purple' : 'blue'}>
                    {currentExercise.level}
                  </Badge>
                  <span className="text-xs font-semibold text-muted">
                    {currentExercise.slideRef}
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-black text-foreground">
                  {currentExercise.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={isCompleted ? 'secondary' : 'primary'}
                  onClick={() => toggleComplete(currentExercise.id)}
                  icon={isCompleted ? CheckCircle2 : Circle}
                >
                  {isCompleted ? 'Concluído ✓' : 'Marcar Concluído'}
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                Objetivo do Desafio
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground leading-relaxed">
                {currentExercise.objective}
              </p>
            </div>

            {/* Enunciado sem estilos */}
            <div className="mt-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-muted uppercase tracking-wider">
                  Código Inicial (HTML Sem Classes)
                </span>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-xs text-slate-300">
                <pre className="overflow-x-auto">{currentExercise.unСоde}</pre>
              </div>
            </div>

            {/* Solution Area with Toggle */}
            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Solução Esperada com Tailwind v4
                  </h4>
                  <p className="text-xs text-muted">
                    Tente resolver primeiro antes de revelar a solução do professor.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleReveal(currentExercise.id)}
                  icon={isRevealed ? EyeOff : Eye}
                >
                  {isRevealed ? 'Ocultar' : 'Revelar Solução'}
                </Button>
              </div>

              {isRevealed ? (
                <div className="mt-4 space-y-4">
                  <div className="relative rounded-2xl bg-slate-950 p-4 font-mono text-xs text-blue-300">
                    <button
                      type="button"
                      onClick={() => copyCode(currentExercise.solutionCode)}
                      className="absolute top-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] text-white hover:bg-white/20 cursor-pointer"
                    >
                      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                      <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
                    </button>
                    <pre className="overflow-x-auto pt-2">{currentExercise.solutionCode}</pre>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-8 text-center bg-surface-hover/30">
                  <BookOpen className="size-8 text-muted opacity-40" />
                  <p className="mt-2 text-xs font-semibold text-muted">
                    Solução oculta para você praticar. Clique em "Revelar Solução" quando quiser comparar o seu código.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Right Column: Visual Preview & Class Breakdown */}
        <div className="space-y-6 lg:col-span-5">
          {/* Live Result Preview */}
          <Card padding="p-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Resultado Visual em Ação
              </span>
              <span className="text-xs text-muted">Renderizado ao vivo</span>
            </div>

            <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-2xl bg-slate-100/70 p-6 dark:bg-slate-950/60">
              {/* Conditional Live Mock depending on exercise */}
              {currentExercise.id === 'ex-1' && (
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 max-w-sm w-full">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    NOVIDADE
                  </span>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Card de Demonstração
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Descrição do componente com leitura confortável e contraste equilibrado.
                  </p>
                  <button className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800 cursor-pointer">
                    Saiba mais
                  </button>
                </article>
              )}

              {currentExercise.id === 'ex-2' && (
                <div className="flex flex-col items-center gap-3">
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 cursor-pointer">
                    Confirmar Envio
                  </button>
                  <span className="text-[11px] text-muted">Clique para sentir o active:scale-95</span>
                </div>
              )}

              {currentExercise.id === 'ex-3' && (
                <article className="group relative w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
                      alt="Headphones"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-3 font-bold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                    Headphones Pro
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">R$ 899,90</p>
                </article>
              )}

              {currentExercise.id === 'ex-4' && (
                <label className="relative inline-flex cursor-pointer items-center gap-3 select-none">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="h-7 w-12 rounded-full bg-slate-300 transition-colors duration-300 peer-checked:bg-blue-600 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 dark:bg-slate-700 dark:peer-focus-visible:ring-blue-800" />
                  <div className="absolute left-1 top-1 size-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-5" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notificações push</span>
                </label>
              )}

              {currentExercise.id === 'ex-5' && (
                <details className="group w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 transition-all open:border-blue-500 open:bg-blue-50/50 open:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:open:border-blue-500 dark:open:bg-blue-950/20">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-800 marker:hidden dark:text-slate-100">
                    <span>O que é utility-first?</span>
                    <span className="text-xl transition-transform duration-300 group-open:rotate-180 text-blue-600">▾</span>
                  </summary>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    Compor estilos diretamente com classes utilitárias no JSX ao invés de arquivos CSS separados.
                  </p>
                </details>
              )}

              {currentExercise.id === 'ex-6' && (
                <section className="rounded-3xl border border-border bg-surface p-6 text-foreground shadow-lg w-full max-w-sm">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Design System</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">Token @theme</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold">Tema Dinâmico</h2>
                  <p className="mt-2 text-xs text-muted">
                    Utiliza variáveis semânticas que trocam no modo escuro automaticamente.
                  </p>
                </section>
              )}
            </div>
          </Card>

          {/* Explanation of Classes Table */}
          <Card padding="p-6">
            <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Info className="size-4 text-blue-600" />
              Explicação Detalhada das Classes
            </h4>
            <div className="mt-4 divide-y divide-border text-xs">
              {currentExercise.explanation.map((item, i) => (
                <div key={i} className="py-2.5 flex items-start justify-between gap-3">
                  <code className="rounded bg-blue-500/10 px-2 py-0.5 font-mono text-blue-600 dark:text-blue-400 shrink-0 font-semibold">
                    {item.utility}
                  </code>
                  <span className="text-right text-muted">{item.desc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
