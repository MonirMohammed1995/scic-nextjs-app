"use client";
import React from "react";
import Link from "next/link";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <section className="text-center px-6 py-20">
      <Hero/>
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
