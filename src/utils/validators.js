/**
 * Reusable validation functions for React Hook Form
 */

// Rejects values that begin with a whitespace character
export const noLeadingWhitespace = (value) => {
  if (!value || typeof value !== 'string') return true;
  if (/^\s/.test(value)) {
    return 'Leading whitespace is not allowed';
  }
  return true;
};

// Rejects values that are empty or contain only whitespace characters
export const trimRequired = (fieldName = 'Field') => (value) => {
  if (!value || typeof value !== 'string') return `${fieldName} is required`;
  if (value.trim() === '') {
    return `${fieldName} cannot be blank spaces`;
  }
  if (/^\s/.test(value)) {
    return 'Leading whitespace is not allowed';
  }
  return true;
};

// Rejects email values with leading or trailing whitespace
export const emailNoWhitespace = (value) => {
  if (!value || typeof value !== 'string') return true;
  if (/^\s|\s$/.test(value)) {
    return 'Email cannot contain leading or trailing spaces';
  }
  return true;
};

// Validates that a mobile number contains exactly 10 digits
export const phoneTenDigits = (value) => {
  if (!value || typeof value !== 'string') return 'Mobile number is required';
  const cleanVal = value.trim();
  if (!/^\d{10}$/.test(cleanVal)) {
    return 'Mobile number must be exactly 10 digits';
  }
  return true;
};

