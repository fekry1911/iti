import axios from "axios";

let BASE_URL = "https://vcare.integration25.com/api";
let BASE_URL_PRODUCTS = `https://api.escuelajs.co/api/v1/products`;
let BASE_URL_CATEGORY_PRODUCTS = `https://api.escuelajs.co/api/v1/products`;

let BASE_URL_CART = "http://localhost:5000/carts";
let BASE_URL_WISHLIST = "http://localhost:5000/wishlist";
let BASE_URL_PRODUCTS_RANGE = `https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000`;

export async function handleLogin(data) {
  let response = await axios.post(`${BASE_URL}/auth/login`, data);
  return response.data;
}

export async function handleRegister(data) {
  let response = await axios.post(`${BASE_URL}/auth/register`, data);
  return response.data;
}
export async function getAllProducts() {
  let response = await axios.get(`${BASE_URL_PRODUCTS}`);
  return response.data;
}
export async function getAllProductsInCate(id) {
  let response = await axios.get(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );

  return response.data;
}
export async function getAllCate() {
  let response = await axios.get(`https://api.escuelajs.co/api/v1/categories`);

  return response.data;
}
export async function getFilterProducts(price_min, price_max) {
  console.log(price_max, price_min);

  let response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?price_min=${price_min}&price_max=${price_max}`
  );
  return response.data;
}
export async function getProductById(id) {
  let response = await axios.get(`${BASE_URL_PRODUCTS}/${id}`);
  return response.data;
}
export async function addToCart(product) {
  const fixedProduct = {
    ...product,
    id: product.id.toString(),
  };
  let response = await axios.post(`${BASE_URL_CART}`, fixedProduct);
  return response.data;
}
export async function addToWishList(product) {
  const fixedProduct = {
    ...product,
    id: product.id.toString(),
  };
  let response = await axios.post(`${BASE_URL_WISHLIST}`, fixedProduct);
  return response.data;
}

export async function getCarts() {
  let response = await axios.get(`${BASE_URL_CART}`);
  return response.data;
}
export async function getWishList() {
  let response = await axios.get(`${BASE_URL_WISHLIST}`);
  return response.data;
}
export async function removeItemFromCart(id) {
  const response = await axios.delete(`${BASE_URL_CART}/${id}`);
  return response.data;
}
export async function removeItemFromWishList(id) {
  const response = await axios.delete(`${BASE_URL_WISHLIST}/${id}`);
  return response.data;
}
export async function clearCart() {
  try {
    const { data } = await axios.get(`${BASE_URL_CART}`);
    await Promise.all(
      data.map((item) => axios.delete(`${BASE_URL_CART}/${item.id}`))
    );
    console.log("🧹 Cart cleared successfully!");
  } catch (error) {
    console.error("❌ Error clearing cart:", error);
  }
}
export async function clearWishList() {
  try {
    const { data } = await axios.get(`${BASE_URL_WISHLIST}`);
    await Promise.all(
      data.map((item) => axios.delete(`${BASE_URL_WISHLIST}/${item.id}`))
    );
    console.log("🧹 WishList cleared successfully!");
  } catch (error) {
    console.error("❌ Error clearing cart:", error);
  }
}
