"use client";
import React from "react";

export default function LoginPage() {
  return (
    <section className="flex justify-center items-center py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg dark:bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg dark:bg-gray-800"
          />
          <button className="bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          Or login with Google
        </div>
      </div>
    </section>
  );
}
