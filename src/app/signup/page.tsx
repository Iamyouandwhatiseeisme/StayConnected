"use client";
import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { redirect } from "next/navigation";
import { useFormValidation } from "@/components/ui/hooks/useFormValidation";

export default function Signup() {
  const {
    error,

    passWordError,
    passwordsMatchError,
    isFormInvalid,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordsMatch,
  } = useFormValidation();

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
              onChange={handleEmailChange}
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
                redirect("/login");
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
