"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Signup() {
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passWordError, setPasswordError] = useState<string | null>(null);
  const [passwordsMatchError, setPasswordsMatchError] = useState<string | null>(
    null
  );
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value, typeof value);
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

    if (password !== confirmPass && password && confirmPass) {
      setPasswordsMatchError("Passwords do not match");
    } else {
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setError("Invalid email format");
    } else {
      setError(null);
    }
  };

  return (
    <main className="h-screen w-full bg-gradient-to-r from-blue-500  via-purple-500 to-pink-500 animate-gradient flex flex-col items-center justify-center ">
      <div className="border-2 w-150 h-96 border-white rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
        <div className="bg-white w-120 h-80 border border-gray-500 rounded-2xl flex flex-col items-center justify-start p-5">
          <div className="border  border-gray-400  bg-white rounded-2xl min-w-48 h-10 flex flex-row text-sm overflow-hidden items-center justify-center">
            <img
              className=" object-fill h-10 rounded-2xl"
              src="/Logo.jpg"
            ></img>
            StayConnected
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Input
              onChange={handleChange}
              className="p-2 mt-5 mb-2 w-80"
              type="email"
              placeholder="Email"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <Input
            onChange={handlePasswordChange}
            className="p-2 m-2 w-80"
            type="password"
            placeholder="Password"
          />

          {passWordError !== null && (
            <p className="text-red-500 text-sm">{passWordError}</p>
          )}
          <Input
            onChange={handlePasswordsMatch}
            className="p-2 m-2 w-80"
            type="password"
            placeholder="Confirm Password"
          />
          {passwordsMatchError !== null && (
            <p className="text-red-500 text-sm">{passwordsMatchError}</p>
          )}

          <div className="flex flex-row gap-10">
            <Button className="bg-gray-400">Login</Button>
            <Button
              disabled={isFormInvalid}
              onClick={() => {
                console.log(isFormInvalid);
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
