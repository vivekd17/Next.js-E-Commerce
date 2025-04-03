export async function GET(request) {
    try {
      // Define the API endpoint
      const apiUrl = "https://fatherstock-cache.b-cdn.net/category/20.json";
      
      // Fetch data from the external API
      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) throw new Error("Failed to fetch");
  
      const data = await response.json();
  
      // Return the response with CORS headers
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",  // Allow all origins
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }
  