import React from "react";

export default function ProductDetailsPage({ params }) {
  const { id } = params;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="p-6 border rounded-xl shadow bg-white dark:bg-gray-900">
        <h3 className="text-xl font-semibold">Product #{id}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is a placeholder description for Product {id}.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
