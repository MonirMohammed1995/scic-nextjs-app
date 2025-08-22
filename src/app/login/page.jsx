"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/products", // redirect after login
    });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/products" });
  };

  return (
    <section className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Credentials Login */}
        <form onSubmit={handleCredentialLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg dark:bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg dark:bg-gray-800"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </section>
  );
}
