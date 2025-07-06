const api = "http://localhost:5000/api/auth";

document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nom: nom.value,
    prenom: prenom.value,
    adresse: adresse.value,
    email: email.value,
    telephone: telephone.value,
    password: password.value,
  };
  const res = await fetch(`${api}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    alert("Inscription réussie !");
    location.href = "index.html";
  }
});

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch(`${api}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    location.href = "dashboard.html";
  } else {
    alert("Erreur de connexion");
  }
});
