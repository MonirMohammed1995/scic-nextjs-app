import { useEffect, useState } from "react";

export default function ProductStore() {
  const [products, setProducts] = useState([]);

  // Load products from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  // Save products to localStorage
  const saveProducts = (data) => {
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  };

  // Add product
  const addProduct = () => {
    const newProduct = { id: Date.now(), name: "New Product" };
    saveProducts([...products, newProduct]);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">My Products</h1>
      <button
        onClick={addProduct}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
      >
        Add Product
      </button>

      <ul className="mt-4 list-disc pl-5">
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
