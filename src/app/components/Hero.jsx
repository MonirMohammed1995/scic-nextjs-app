import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to Our Store
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover amazing products at unbeatable prices.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
