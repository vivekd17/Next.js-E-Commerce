"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function KidsCategoryPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.com/products");

        if (!response.ok) {
          throw new Error(response.status === 404 ? "404: Products Not Found" : `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.length === 0) {
          throw new Error("No products found in this category.");
        }

        // ✅ Simulate delay of 5-8 seconds
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, Math.floor(Math.random() * (8000 - 5000 + 1) + 5000)); // Random between 5 to 8 sec

      } catch (error) {
        setTimeout(() => {
          setError(error.message);
          setLoading(false);
        }, Math.floor(Math.random() * (8000 - 5000 + 1) + 5000)); // Random delay for error too
      }
    }

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        <h1>⚠️ {error}</h1>
        <p>Sorry, we couldn't load the products.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Kids' Category</h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </div>
  );
}

// ✅ Product Card with Lazy Loading
function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
      <Image 
        src={product.image} 
        alt={product.title} 
        width={300} 
        height={200} 
        className="w-full h-40 object-cover rounded-lg"
        loading="lazy" // ✅ Lazy loading enabled
        unoptimized
      />
      <p className="text-center font-semibold mt-2">{product.title}</p>
    </div>
  );
}

// ✅ Skeleton Loader Component
function SkeletonCard() {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-200 animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-400 rounded w-3/4 mt-3"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
    </div>
  );
}
