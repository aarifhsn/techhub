const BASE_URL = "http://localhost:9000";
const CART_BASE_URL = "http://localhost:9000";

// Products API
export const productAPI = {
  // Get all products with optional filters
  getAll: async (params = {}) => {
    // Check if there's a search query
    const hasSearch = params.q && params.q.trim() !== "";

    // Use /search endpoint if searching, otherwise use /products
    const endpoint = hasSearch ? "/products/search" : "/products";

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  // Get single product
  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");
    return response.json();
  },

  // Search products
  search: async (query, filters = {}) => {
    const params = { q: query, ...filters };
    const queryString = new URLSearchParams(params).toString();

    const response = await fetch(`${BASE_URL}/products/search?${queryString}`);
    if (!response.ok) throw new Error("Search failed");
    return response.json();
  },

  // Filter products
  filter: async (filters) => {
    const queryString = new URLSearchParams(filters).toString();

    const response = await fetch(`${BASE_URL}/products/filter?${queryString}`);
    if (!response.ok) throw new Error("Filter failed");
    return response.json();
  },
};

// Categories API
export const categoryAPI = {
  getAll: async () => {
    const response = await fetch(`${CART_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },
};

// Cart API
export const cartAPI = {
  getCart: async () => {
    const response = await fetch(`${CART_BASE_URL}/cart`);
    if (!response.ok) throw new Error("Failed to fetch cart");
    return response.json();
  },

  addToCart: async (productId, quantity) => {
    const response = await fetch(`${CART_BASE_URL}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    if (!response.ok) throw new Error("Failed to add to cart");
    return response.json();
  },

  updateCartItem: async (id, quantity) => {
    const response = await fetch(`${CART_BASE_URL}/cart/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) throw new Error("Failed to update cart");
    return response.json();
  },

  removeFromCart: async (id) => {
    const response = await fetch(`${CART_BASE_URL}/cart/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to remove from cart");
    return response.json();
  },

  clearCart: async () => {
    const response = await fetch(`${CART_BASE_URL}/cart`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to clear cart");
    return response.json();
  },
};
