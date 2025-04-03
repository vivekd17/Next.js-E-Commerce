"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function WomenCategoryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Women's Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={product.image} 
        alt={product.title} 
        width={300} 
        height={200} 
        className="w-full h-40 object-cover rounded-lg"
        unoptimized
      />
      <p className="text-center font-semibold mt-2">{product.title}</p>

      {isHovered && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-bold mt-2">Price: ${product.price}</p>
          <p className="text-gray-500">Rating: ⭐ {product.rating}</p>
        </div>
      )}
    </div>
  );
}
