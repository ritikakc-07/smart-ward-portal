// frontend/src/services/api.js

// Base URL of your backend
const BASE_URL = "http://localhost:5000/api";

// Fetch documents.json
export const fetchDocuments = async () => {
  const res = await fetch(`${BASE_URL}/v1/documents`);
  if (!res.ok) throw new Error("Failed to fetch documents");
  return res.json();
};

// Fetch dashboard.json
export const fetchDashboard = async () => {
  const res = await fetch(`${BASE_URL}/dashboard`);
  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
};

// Fetch budget.json for a specific ward
export const fetchBudget = async (wardId) => {
  const res = await fetch(`http://localhost:5000/api/budget/${wardId}`);
  if (!res.ok) throw new Error("Failed to fetch budget");
  return res.json();
};


// Fetch announcements.json
export const fetchAnnouncements = async () => {
  const res = await fetch(`${BASE_URL}/v1/announcements`);
  if (!res.ok) throw new Error("Failed to fetch announcements");
  return res.json();
};

// Fetch wards.json
export const fetchWards = async () => {
  const res = await fetch(`${BASE_URL}/wards`);
  if (!res.ok) throw new Error("Failed to fetch wards");
  return res.json();
};

// Fetch products.json (if you have it)
export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/v1/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
