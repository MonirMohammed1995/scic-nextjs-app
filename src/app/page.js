"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center px-6 py-20">
      <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
      <p className="mt-4 text-gray-600">
        A modern Next.js app with products and authentication.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          View Products
        </Link>
        <Link href="/login" className="px-6 py-3 border rounded-lg">
          Login
        </Link>
      </div>
    </section>
  );
}
