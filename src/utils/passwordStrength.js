export const getPasswordStrength = (password = '') => {
  if (!password || password.length === 0) {
    return { score: 0, label: '', color: '' };
  }
  
  if (password.length < 6) {
    return { score: 1, label: 'Weak', color: 'bg-rose-500' };
  }

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const groupsCount = [hasLower, hasUpper, hasDigit, hasSpecial].filter(Boolean).length;

  if (password.length >= 8 && groupsCount >= 3) {
    return { score: 3, label: 'Strong', color: 'bg-lime-400' };
  }

  if (password.length >= 8 && groupsCount >= 2) {
    return { score: 2, label: 'Medium', color: 'bg-amber-500' };
  }

  return { score: 1, label: 'Weak', color: 'bg-rose-500' };
};
