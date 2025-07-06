const API_CATEGORIES = "http://localhost:5000/api/categories";
const API_ARTICLES = "http://localhost:5000/api/articles";
const token = localStorage.getItem("token");

if (!token) location.href = "index.html";

async function fetchData(url, containerId) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(item =>
    `<div><strong>${item.nom}</strong>: ${item.description || item.prix + " TND"}</div>`
  ).join("");
}

fetchData(API_CATEGORIES, "categories");
fetchData(API_ARTICLES, "articles");

function logout() {
  localStorage.removeItem("token");
  location.href = "index.html";
}
