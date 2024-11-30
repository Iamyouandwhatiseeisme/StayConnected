"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { redirect } from "next/navigation";
import { useFormValidation } from "@/components/ui/hooks/useFormValidation";
import { Progress } from "@/components/ui/progress";

export default function Signup() {
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = React.useState(13);

  const {
    error,
    userName,
    email,
    password,
    handleUserName,
    passWordError,
    passwordsMatchError,
    isFormInvalid,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordsMatch,
  } = useFormValidation();

  const handleSubmit = () => {
    async function fetchUser() {
      setIsLoading(true);
      const timer = setTimeout(() => setProgress(100), 1500);

      const data = {
        username: userName,
        email: email,
        password: password,
        password_2: password,
      };

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setResponse(responseData.message);
      setTimeout(() => {
        setIsLoading(false);
        redirect("/login");
      }, 2000);
    }
    fetchUser();
  };

  return (
    <main className="h-screen w-full bg-gradient-to-r from-blue-500  via-purple-500 to-pink-500 animate-gradient flex flex-col items-center justify-center ">
      <div className="border-2 w-150 h-150 border-white rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
        <div className="bg-white w-120 h-96 border border-gray-500 rounded-2xl flex flex-col items-center justify-start p-5">
          <div className="border  border-gray-400  bg-white rounded-2xl min-w-48 h-10 flex flex-row text-sm overflow-hidden items-center justify-center">
            <img
              className=" object-fill h-10 rounded-2xl"
              src="/Logo.jpg"
            ></img>
            StayConnected
          </div>
          {isLoading && <Progress value={progress}></Progress>}
          {response && <div>{response}</div>}
          <div className="flex flex-col items-center justify-center gap-2">
            <Input
              onChange={handleEmailChange}
              className="p-2 mt-5  w-80"
              type="email"
              placeholder="Email"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <Input
            onChange={handleUserName}
            className="p-2 mt-5 mb-2 w-80"
            type="username"
            placeholder="Username"
          />

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
            <Button
              className="bg-gray-400"
              onClick={() => {
                redirect("/login");
              }}
            >
              Login
            </Button>
            <Button
              disabled={isFormInvalid}
              onClick={() => {
                handleSubmit();
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
