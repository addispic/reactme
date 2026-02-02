export const emailValidator = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const emailInputValidator = (email: string) => {
  return /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})([a-zA-Z]{2,8})?$/.test(
    email,
  );
};
