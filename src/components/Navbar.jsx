import React, { useState } from 'react';
import { Sun, Moon, LayoutDashboard, Terminal, Package, BookOpen, FileCode2, Menu, X, Sparkles } from 'lucide-react';

export function Navbar({ activeTab, onSelectTab, darkMode, onToggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'pulseboard', label: 'PulseBoard', icon: LayoutDashboard, badge: 'Projeto' },
    { id: 'play', label: 'Tailwind Play', icon: Terminal, badge: 'Lab' },
    { id: 'components', label: 'Componentes', icon: Package, badge: 'React' },
    { id: 'exercises', label: 'Versão do Aluno', icon: BookOpen, badge: 'Exercícios' },
    { id: 'cheatsheet', label: 'Guia Rápido', icon: FileCode2, badge: 'Cheat Sheet' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
            <Sparkles className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-foreground">
                SPA Lab
              </span>
              <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Tailwind 4.3 + Vite 8
              </span>
            </div>
            <p className="text-[11px] text-muted hidden sm:block">
              Guia Prático & Aplicação Interativa
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 rounded-2xl bg-surface-hover/80 p-1 border border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                <Icon className="size-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (Dark Mode + Mobile Button) */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Switch Button */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 cursor-pointer"
            aria-label={darkMode ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
            title={darkMode ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
          >
            {darkMode ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-slate-600" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:bg-surface-hover hover:text-foreground lg:hidden cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-surface px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onSelectTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-muted hover:bg-surface-hover hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4" />
                    <span>{tab.label}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-surface-hover text-muted'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
