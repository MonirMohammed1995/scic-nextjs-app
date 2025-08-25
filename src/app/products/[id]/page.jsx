"use client";
import React, { useEffect, useState } from "react";

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const found = storedProducts.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-center text-gray-500">Product not found.</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="p-6 border rounded-xl shadow bg-white dark:bg-gray-900">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
        <p className="mt-2 text-gray-800 dark:text-gray-200 font-bold">
          Price: ${product.price}
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
