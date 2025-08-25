"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // Load products from localStorage when page loads
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products added yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="block p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                ${p.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {p.description}
              </p>

              {/* View Product Button */}
              <Link href={`/products/${p.id}`}>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
