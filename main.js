let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("products-container");
const searchBar = document.getElementById("searchBar");
const suggestionsBox = document.getElementById("searchSuggestions");

let activeFilters = {
  category: "all",
  gender: null,
  brand: null
};

function scrollToProducts() {
  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth"
  });
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function getBadge(product) {
  if (product.badge) return product.badge;
  if ((product.rating || 0) >= 4.8) return "Top Rated";
  return "";
}

function displayProducts(list) {

  if (!container) return;

  container.innerHTML = "";

  list.forEach(product => {

    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `

      ${getBadge(product)
        ? `<div class="badge">${getBadge(product)}</div>`
        : ""
      }

      <a href="product.html?id=${product.id}">
  <img
    src="${product.image}"
    alt="${product.name}"
  >
</a>

      <h3>
  <a href="product.html?id=${product.id}" class="product-link">
    ${product.name}
  </a>
</h3>

      ${product.rating
        ? `
          <div class="rating">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-number">${product.rating}</span>
            <span class="review-count">(${product.reviews || 0} reviews)</span>
          </div>
        `
        : ""
      }

      <p class="price">
        <del>KSh ${product.oldPrice || ""}</del>
        <strong>KSh ${product.price}</strong>
      </p>

      ${product.stock && product.stock <= 5
        ? `<p class="stock">Only ${product.stock} left</p>`
        : ""
      }

      <div class="product-actions">

        <button
          class="whatsapp-btn"
          onclick="window.open('https://wa.me/254113505681?text=Hello Nairobi Perfumes, I want ${product.name}','_blank')"
        >
          Order on WhatsApp
        </button>

        <button
          class="cart-btn"
          onclick="addToCart('${product.name}', ${product.price})"
        >
          Add to Cart
        </button>

      </div>
    `;

    container.appendChild(div);
  });
}

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

function filterCategory(category) {
  activeFilters.category = category;
  displayProducts(applyFilters());
}

function filterGender(gender) {
  activeFilters.gender = gender;
  displayProducts(applyFilters());
}

function filterBrand(brand) {
  activeFilters.brand = brand;
  displayProducts(applyFilters());
}

function resetFilters() {
  activeFilters = {
    category: "all",
    gender: null,
    brand: null
  };

  displayProducts(products);
}

function addToCart(name, price) {

  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      name,
      price,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();
  bounceCart();

  showToast(`${name} added to cart`);
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (!count) return;

  count.innerText = cart.reduce((a, b) => a + b.qty, 0);
}

function bounceCart() {
  const cartIcon = document.getElementById("cart-icon");

  if (!cartIcon) return;

  cartIcon.classList.add("bounce");

  setTimeout(() => {
    cartIcon.classList.remove("bounce");
  }, 400);
}

function toggleCart() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");

  panel.classList.toggle("open");

  if (panel.classList.contains("open")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }

  renderCart();
}

function renderCart() {

  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");

  if (!container || !totalBox) return;

  container.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    totalBox.innerHTML = "<strong>Total: KSh 0</strong>";
    return;
  }

  cart.forEach((item, index) => {

    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">

        <div>
          <strong>${item.name}</strong><br>
          KSh ${item.price}
        </div>

        <div class="qty-controls">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">❌</button>

      </div>
    `;
  });

  totalBox.innerHTML = `<strong>Total: KSh ${total}</strong>`;
}

function changeQty(index, change) {

  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();
}

function removeItem(index) {

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  renderCart();

  showToast("Item removed", "error");
}

function checkoutCart() {

  if (cart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  window.location.href = "checkout.html";
}

function openQuickView(name, price, image) {

  document.getElementById("quick-view").style.display = "flex";

  document.getElementById("qv-image").src = image;
  document.getElementById("qv-name").innerText = name;
  document.getElementById("qv-price").innerText = `KSh ${price}`;

  document.getElementById("qv-whatsapp").onclick = () => {
    window.open(`https://wa.me/254113505681?text=Hello Nairobi Perfumes, I want ${name}`, "_blank");
  };

  document.getElementById("qv-cart").onclick = () => {
    addToCart(name, price);
  };
}

function closeQuickView() {
  document.getElementById("quick-view").style.display = "none";
}

function toggleMenu() {
  document.querySelector("nav")?.classList.toggle("show-nav");
}

searchBar?.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase().trim();

  let filtered = applyFilters();

  filtered = filtered.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);

  if (!suggestionsBox) return;

  suggestionsBox.innerHTML = "";

  if (!value) {
    suggestionsBox.style.display = "none";
    return;
  }

  filtered.slice(0, 5).forEach(product => {

    const div = document.createElement("div");

    div.classList.add("search-suggestion-item");

    div.innerText = product.name;

    div.onclick = () => {

      searchBar.value = product.name;

      suggestionsBox.style.display = "none";

      displayProducts([product]);

      scrollToProducts();
    };

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = filtered.length ? "block" : "none";
});

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index]?.classList.add("active");
}

if (slides.length > 0) {
  setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }, 4000);
}

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    document.getElementById("quick-view").style.display = "none";

    const panel = document.getElementById("cart-panel");
    const overlay = document.getElementById("cart-overlay");

    panel?.classList.remove("open");

    if (overlay) {
      overlay.style.display = "none";
    }
  }
});

displayProducts(products);
updateCartCount();
renderCart();