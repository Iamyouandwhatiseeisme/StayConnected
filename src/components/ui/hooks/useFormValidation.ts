import { useState, useEffect } from "react";

export const useFormValidation = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passWordError, setPasswordError] = useState<string | null>(null);
  const [passwordsMatchError, setPasswordsMatchError] = useState<string | null>(
    null
  );
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain a digit.";
    }
    if (!/[a-zA-Z]/.test(password)) {
      return "Password must contain a letter.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain an uppercase letter.";
    }
    return null;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setError("Invalid email format");
    } else {
      setError(null);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const validationErrors = validatePassword(value);
    if (value && validationErrors !== null) {
      setPasswordError(validationErrors);
    } else {
      setPasswordError(null);
      setPasswordsMatchError("Passwords do not match");
    }
  };

  const handlePasswordsMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPass = e.target.value;

    if (password !== confirmPass && password) {
      setPasswordsMatchError("Passwords do not match");
    } else {
      console.log(password, confirmPass, password === confirmPass);
      setPasswordsMatchError(null);
    }
  };

  useEffect(() => {
    const invalid =
      !email ||
      error !== null ||
      !password ||
      passWordError !== null ||
      passwordsMatchError !== null;

    setIsFormInvalid(invalid);
  }, [email, error, password, passWordError, passwordsMatchError]);

  return {
    email,
    error,
    password,
    passWordError,
    passwordsMatchError,
    isFormInvalid,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordsMatch,
  };
};
