export const phoneValidation = (value?: string) => {
    if (!value) return false;
    return /^\+?[1-9]\d{7,14}$/.test(value);
  };