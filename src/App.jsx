import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PulseBoard } from './components/pulseboard/PulseBoard';
import { TailwindPlay } from './components/play/TailwindPlay';
import { ComponentShowcase } from './components/components-view/ComponentShowcase';
import { StudentExercises } from './components/exercises/StudentExercises';
import { CheatSheet } from './components/cheatsheet/CheatSheet';

export default function App() {
  const [activeTab, setActiveTab] = useState('pulseboard');
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('spa_dark_mode');
      if (stored !== null) return JSON.parse(stored);
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('spa_dark_mode', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200 flex flex-col">
      {/* Main Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {activeTab === 'pulseboard' && <PulseBoard />}
        {activeTab === 'play' && <TailwindPlay />}
        {activeTab === 'components' && <ComponentShowcase />}
        {activeTab === 'exercises' && <StudentExercises />}
        {activeTab === 'cheatsheet' && <CheatSheet />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-6 text-center text-xs text-muted">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong>SPA · Tailwind CSS 4.3 + React + Vite 8</strong> — Projeto da Aula & Laboratório do Aluno
          </p>
          <div className="flex items-center gap-4">
            <span>Utility-First</span>
            <span>•</span>
            <span>Mobile-First</span>
            <span>•</span>
            <span>Design Tokens</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
