"use client";
import React, { useState } from "react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Load existing products from localStorage
      const existing = JSON.parse(localStorage.getItem("products")) || [];

      // Create new product with a unique ID
      const newProduct = {
        id: Date.now(),
        ...formData,
      };

      // Save updated products array
      const updatedProducts = [...existing, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      alert("✅ Product added successfully!");
      setFormData({ name: "", description: "", price: "" });
    } catch (err) {
      alert("❌ Error adding product");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="p-3 border rounded-lg dark:bg-gray-800"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
          className="p-3 border rounded-lg dark:bg-gray-800"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="p-3 border rounded-lg dark:bg-gray-800"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-3 rounded-lg disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </section>
  );
}
