import React from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { FormField } from '../components/common/FormField';
import { Input } from '../components/common/Input';
import { PasswordInput } from '../components/common/PasswordInput';
import { Button } from '../components/common/Button';
import { getPasswordStrength } from '../utils/passwordStrength';
import { noLeadingWhitespace, emailNoWhitespace } from '../utils/validators';

export const Register = () => {
  const { register: authRegister, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password', '');
  const strength = getPasswordStrength(password);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = (data) => {
    const result = authRegister({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      showToast('Account created successfully', 'success');
      navigate('/');
    } else {
      showToast(result.message || 'Registration failed', 'error');
      setError('email', {
        type: 'manual',
        message: result.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-display text-2xl font-bold text-white">Create Your Account</h1>
          <p className="text-xs text-slate-400">Join SkyMart to start shopping modern gear.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
            <Input
              id="name"
              type="text"
              placeholder="Nobita Nobi"
              error={!!errors.name}
              {...register('name', {
                required: 'Full name is required',
                validate: {
                  noLeading: noLeadingWhitespace,
                  noBlank: (val) => val.trim() !== '' || 'Full name cannot be blank spaces',
                },
              })}
            />
          </FormField>

          <FormField label="Email" htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              placeholder="nobita@gmail.com"
              error={!!errors.email}
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
              error={!!errors.password}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
          </FormField>

          {/* Dynamic Password Strength Indicator */}
          {password.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider">
                <span className="text-slate-400">Password Strength</span>
                <span
                  className={
                    strength.label === 'Strong'
                      ? 'text-lime-400'
                      : strength.label === 'Medium'
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }
                >
                  {strength.label}
                </span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden flex gap-1">
                <div
                  className={`h-full flex-1 transition-all duration-300 ${
                    strength.score >= 1 ? strength.color : 'bg-slate-800'
                  }`}
                />
                <div
                  className={`h-full flex-1 transition-all duration-300 ${
                    strength.score >= 2 ? strength.color : 'bg-slate-800'
                  }`}
                />
                <div
                  className={`h-full flex-1 transition-all duration-300 ${
                    strength.score >= 3 ? strength.color : 'bg-slate-800'
                  }`}
                />
              </div>
            </div>
          )}

          <FormField
            label="Confirm Password"
            htmlFor="confirmPassword"
            error={errors.confirmPassword?.message}
          >
            <PasswordInput
              id="confirmPassword"
              placeholder="••••••••"
              error={!!errors.confirmPassword}
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (val) => val === watch('password') || 'Passwords do not match',
              })}
            />
          </FormField>

          <Button type="submit" variant="primary" className="w-full py-3 mt-2" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <p className="text-xs text-center text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-lime-400 hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
