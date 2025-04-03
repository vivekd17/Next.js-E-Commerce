export async function GET() {
    const womenProducts = {
      "category": "women",
      "products": [
        {
          "product_id": "357631",
          "image": "https://sgp1.digitaloceanspaces.com/f-images/image/cache/f-images/catalog/1005008217289883/product_image_aesa_1005008217289883-250x250.jpg",
          "name": "Classic sports pants for autumn and winter",
          "description": "Comfortable and stylish sports pants, perfect for autumn and winter wear.",
          "quantity": "3496",
          "model": "1005008217289883",
          "sku": "1005008217289883",
          "rating": 4.5,
          "reviews": 120,
          "base_price": "227",
          "cost": "CN¥ 438.11",
          "calculated_price": "324.54",
          "status": "Available",
          "product_source": "E-Commerce"
        },
        {
          "product_id": "357632",
          "image": "https://sgp1.digitaloceanspaces.com/f-images/image/cache/f-images/catalog/1005008217289883/product_image_besa_1005008217289883-250x250.jpg",
          "name": "Women's Winter Jacket",
          "description": "Warm, stylish, and lightweight jacket for winter. Perfect for daily wear.",
          "quantity": "1200",
          "model": "1005008217289884",
          "sku": "1005008217289884",
          "rating": 4.8,
          "reviews": 85,
          "base_price": "599",
          "cost": "CN¥ 998.00",
          "calculated_price": "799.99",
          "status": "Available",
          "product_source": "E-Commerce"
        }
      ]
    };
  
    return new Response(JSON.stringify(womenProducts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  