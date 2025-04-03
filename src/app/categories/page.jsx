"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  { name: "Women", image: "/images/women.jpg", link: "/categories/women" },
  { name: "Men", image: "/images/men.jpg", link: "/categories/men" },
  { name: "Kids", image: "/images/kid.jpg", link: "/categories/kids" }
];

const CategoriesPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => router.push(category.link)} // ✅ Navigates to category page
          >
            <Image 
              src={category.image} 
              alt={category.name} 
              width={300} 
              height={200} 
              className="w-full h-60 object-cover rounded-lg" 
            />
            <p className="text-center font-semibold mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
