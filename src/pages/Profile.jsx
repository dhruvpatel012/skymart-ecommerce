import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User, Mail, Calendar, LogOut, Edit3, X, Check, ShieldCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { FormField } from '../components/common/FormField';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { noLeadingWhitespace, emailNoWhitespace } from '../utils/validators';

export const Profile = () => {
  const { currentUser, logout, updateProfile } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    },
  });

  const handleStartEdit = () => {
    reset({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    });
    setIsEditing(true);
  };

  const handleLogout = () => {
    logout();
    showToast('Signed out successfully', 'info');
    navigate('/');
  };

  const onSave = (data) => {
    const result = updateProfile({
      name: data.name,
      email: data.email,
    });

    if (result.success) {
      showToast('Profile updated successfully', 'success');
      setIsEditing(false);
    } else {
      showToast(result.message || 'Failed to update profile', 'error');
      if (result.message && result.message.toLowerCase().includes('email')) {
        setError('email', {
          type: 'manual',
          message: result.message,
        });
      }
    }
  };

  const handleCancel = () => {
    reset({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    });
    setIsEditing(false);
  };

  const formattedDate = currentUser?.createdAt
    ? new Date(currentUser.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })
    : 'Recently';

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-6">
        {/* Header User Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-lime-400 flex items-center justify-center text-2xl font-bold font-display text-lime-400 shadow-md shadow-lime-400/10 flex-shrink-0">
              {currentUser?.name?.[0]?.toUpperCase() || <User className="w-8 h-8 text-lime-400" />}
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-2xl font-bold text-slate-100 truncate">
                {currentUser?.name || 'User Profile'}
              </h1>
              <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-0.5 truncate">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" /> {currentUser?.email}
              </p>
            </div>
          </div>

          {!isEditing && (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleStartEdit}
              className="flex items-center gap-2 self-start sm:self-center"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </Button>
          )}
        </div>

        {/* Edit Mode vs View Mode */}
        {isEditing ? (
          <form onSubmit={handleSubmit(onSave)} className="space-y-4 pt-2" noValidate>
            <FormField label="Full Name" htmlFor="profile-name" error={errors.name?.message}>
              <Input
                id="profile-name"
                type="text"
                error={!!errors.name}
                {...register('name', {
                  required: 'Name is required',
                  validate: {
                    noLeading: noLeadingWhitespace,
                    noBlank: (val) => val.trim() !== '' || 'Name cannot be blank spaces',
                  },
                })}
              />
            </FormField>

            <FormField label="Email Address" htmlFor="profile-email" error={errors.email?.message}>
              <Input
                id="profile-email"
                type="email"
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

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting || !isDirty}
                className="flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" /> {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button type="button" variant="secondary" onClick={handleCancel} className="flex items-center gap-1.5">
                <X className="w-4 h-4" /> Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Account Status</span>
                <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Active Member
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Member Since</span>
                <p className="text-sm font-medium text-slate-200 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" /> {formattedDate}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <Button variant="danger" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
