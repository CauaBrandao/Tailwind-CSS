import React, { useState } from 'react';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';
import { Switch } from './Switch';
import { Mail, Lock, LogIn, CheckCircle2 } from 'lucide-react';

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = 'Informe um e-mail válido';
    if (!password || password.length < 6) newErrors.password = 'A senha precisa ter pelo menos 6 dígitos';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      if (onSuccess) onSuccess({ email, remember });
    }, 800);
  };

  return (
    <Card className="max-w-md w-full mx-auto" padding="p-8">
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Componente Composto
        </span>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          Acesse a Plataforma
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Exemplo de composição com Input, Switch e Button
        </p>
      </div>

      {success ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Login Realizado!</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Bem-vindo(a), {email}!
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-6"
            onClick={() => {
              setSuccess(false);
              setEmail('');
              setPassword('');
            }}
          >
            Fazer outro login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="E-mail Acadêmico"
            id="login-email"
            type="email"
            placeholder="aluno@universidade.edu.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            icon={Mail}
            required
          />

          <Input
            label="Senha de Acesso"
            id="login-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            helperText="Mínimo de 6 caracteres"
            icon={Lock}
            required
          />

          <div className="flex items-center justify-between pt-1">
            <Switch
              checked={remember}
              onChange={setRemember}
              label="Lembrar dispositivo"
              id="remember-device"
            />
            <button
              type="button"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400"
            >
              Esqueceu a senha?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isLoading}
            icon={LogIn}
          >
            {isLoading ? 'Autenticando...' : 'Entrar no Sistema'}
          </Button>
        </form>
      )}
    </Card>
  );
}
