let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("products-container");
const searchBar = document.getElementById("searchBar");

// ============================
// FILTER STATE
// ============================
let activeFilters = {
  category: "all",
  gender: null,
  brand: null
};

// ============================
// ⭐ HELPERS
// ============================

function getStarRating(rating = 0) {
  let stars = "";
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      stars += "★";
    } else if (i === full + 1 && hasHalf) {
      stars += "☆";
    } else {
      stars += "☆";
    }
  }

  return stars;
}

function getBadge(p) {
  if (p.badge) return p.badge;

  if ((p.rating || 0) >= 4.5 && (p.reviews || 0) >= 50) {
    return "Top Rated";
  }

  return "";
}

// ============================
// DISPLAY PRODUCTS
// ============================

function displayProducts(list) {
  container.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      ${getBadge(p) ? `<div class="badge">${getBadge(p)}</div>` : ""}

      <img src="${p.image}" alt="${p.name}"
        onclick="openQuickView('${p.name}', ${p.price}, '${p.image}')">

      <h3>${p.name}</h3>

      ${p.rating ? `
        <div class="rating">
          ${getStarRating(p.rating)}
          <span>(${p.reviews || 0} reviews)</span>
        </div>
      ` : ""}

      <p>
        <del>KSh ${p.oldPrice}</del>
        <strong>KSh ${p.price}</strong>
      </p>

      <div class="product-actions">

        <button class="whatsapp-btn"
          onclick="window.open('https://wa.me/254113505681?text=I want ${p.name}', '_blank')">
          Order on WhatsApp
        </button>

        <button class="cart-btn"
          onclick="addToCart('${p.name}', ${p.price})">
          Add to Cart
        </button>

      </div>
    `;

    container.appendChild(div);
  });
}

// ============================
// INIT
// ============================

displayProducts(products);
updateCartCount();

// ============================
// SEARCH
// ============================

searchBar?.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  let filtered = applyFilters();
  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// ============================
// FILTER ENGINE
// ============================

function applyFilters() {
  let filtered = products;

  if (activeFilters.category !== "all") {
    filtered = filtered.filter(p => p.category === activeFilters.category);
  }

  if (activeFilters.gender) {
    filtered = filtered.filter(p => p.gender === activeFilters.gender);
  }

  if (activeFilters.brand) {
    filtered = filtered.filter(p => p.brand === activeFilters.brand);
  }

  return filtered;
}

function filterCategory(val) {
  activeFilters.category = val;
  displayProducts(applyFilters());
  updateActiveButtons();
}

function filterGender(val) {
  activeFilters.gender = val;
  displayProducts(applyFilters());
  updateActiveButtons();
}

function filterBrand(val) {
  activeFilters.brand = val;
  displayProducts(applyFilters());
  updateActiveButtons();
}

function resetFilters() {
  activeFilters = { category: "all", gender: null, brand: null };
  searchBar.value = "";
  displayProducts(products);
  updateActiveButtons();
}

// ============================
// ACTIVE BUTTONS
// ============================

function updateActiveButtons() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");

    const type = btn.getAttribute("data-type");
    const value = btn.getAttribute("data-value");

    if (
      (type === "category" && value === activeFilters.category) ||
      (type === "gender" && value === activeFilters.gender) ||
      (type === "brand" && value === activeFilters.brand)
    ) {
      btn.classList.add("active");
    }
  });
}

// ============================
// CART SYSTEM
// ============================

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);

  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;

  el.innerText = cart.reduce((a, b) => a + b.qty, 0);
}

// ============================
// CART UI
// ============================

function toggleCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");

  if (!panel || !overlay) return;

  const isOpen = panel.classList.contains("open");

  if (isOpen) {
    panel.classList.remove("open");
    overlay.style.display = "none";
  } else {
    panel.classList.add("open");
    overlay.style.display = "block";
    renderCart();
  }
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");

  if (!container || !totalBox) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          KSh ${item.price}
        </div>

        <div>
          <button onclick="changeQty(${index}, -1)">−</button>
          ${item.qty}
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  totalBox.innerHTML = "<strong>Total: KSh " + total + "</strong>";
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();
}

function changeQty(index, change) {
  if (!cart[index]) return;

  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();
}

// ============================
// QUICK VIEW
// ============================

function openQuickView(name, price, image) {
  document.getElementById("quick-view").style.display = "flex";

  document.getElementById("qv-image").src = image;
  document.getElementById("qv-name").innerText = name;
  document.getElementById("qv-price").innerText = "KSh " + price;

  document.getElementById("qv-whatsapp").onclick = () => {
    window.open(
      "https://wa.me/254113505681?text=I want " + name,
      "_blank"
    );
  };

  document.getElementById("qv-cart").onclick = () => {
    addToCart(name, price);
  };
}

function closeQuickView() {
  document.getElementById("quick-view").style.display = "none";
}