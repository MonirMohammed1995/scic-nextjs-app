"use client";
import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Product One", price: 99 },
    { id: 2, name: "Product Two", price: 149 },
    { id: 3, name: "Product Three", price: 199 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="p-6 border rounded-xl shadow hover:shadow-lg bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-600">${p.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
