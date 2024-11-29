import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Signup() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500  via-purple-500 to-pink-500 animate-gradient flex flex-col items-center justify-center ">
      <div className="h-3/4 w-150 border-2 border-white rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
        <div className="bg-white w-120 h-80 border border-gray-500 rounded-2xl flex flex-col items-center justify-start p-5">
          <div className="border  border-gray-400  bg-white rounded-2xl w-40 h-10 flex flex-row text-sm overflow-hidden items-center justify-center">
            <img
              className=" object-fill h-10 rounded-2xl"
              src="/Logo.jpg"
            ></img>
            StayConnected
          </div>
          <Input
            className="p-2 mt-5 mb-2 w-80"
            type="username"
            placeholder="Username"
          />

          <Input
            className="p-2 m-2 w-80"
            type="password"
            placeholder="Password"
          />
          <Input
            className="p-2 m-2 w-80"
            type="password"
            placeholder="Confirm Password"
          />

          <div className="flex flex-row gap-10">
            <Button className="bg-gray-400">Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
