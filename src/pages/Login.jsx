import React from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { FormField } from '../components/common/FormField';
import { Input } from '../components/common/Input';
import { PasswordInput } from '../components/common/PasswordInput';
import { Button } from '../components/common/Button';
import { FormError } from '../components/common/FormError';
import { emailNoWhitespace } from '../utils/validators';

export const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = (data) => {
    const result = login({
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      showToast('Signed in successfully', 'success');
      navigate('/');
    } else {
      showToast('Invalid email or password', 'error');
      setError('root', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-display text-2xl font-bold text-white">Sign In to SkyMart</h1>
          <p className="text-xs text-slate-400">Enter your credentials to access your account.</p>
        </div>

        {errors.root && (
          <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-center">
            <FormError message={errors.root.message} />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <FormField label="Email" htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              error={!!errors.email || !!errors.root}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
                validate: {
                  noWhitespace: emailNoWhitespace,
                },
              })}
            />
          </FormField>

          <FormField label="Password" htmlFor="password" error={errors.password?.message}>
            <PasswordInput
              id="password"
              placeholder="••••••••"
              error={!!errors.password || !!errors.root}
              {...register('password', { required: 'Password is required' })}
            />
          </FormField>

          <Button type="submit" variant="primary" className="w-full py-3 mt-2" disabled={isSubmitting}>
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-xs text-center text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-lime-400 hover:underline font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};
