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
// BADGES
// ============================

function getBadge(product) {

  if (product.badge) {
    return product.badge;
  }

  if ((product.rating || 0) >= 4.8) {
    return "Top Rated";
  }

  return "";
}

// ============================
// DISPLAY PRODUCTS
// ============================

function displayProducts(list) {

  container.innerHTML = "";

  list.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `

      ${getBadge(product)
        ? `<div class="badge">${getBadge(product)}</div>`
        : ""
      }

      <img
        src="${product.image}"
        alt="${product.name}"
        onclick="openQuickView(
          '${product.name}',
          ${product.price},
          '${product.image}'
        )"
      >

      <h3>${product.name}</h3>

      ${
        product.rating
          ? `
            <div class="rating">
              <span class="rating-stars">★★★★★</span>
              <span class="rating-number">
                ${product.rating}
              </span>
              <span class="review-count">
                (${product.reviews || 0} reviews)
              </span>
            </div>
          `
          : ""
      }

      <p class="price">

        <del>KSh ${product.oldPrice}</del>

        <strong>KSh ${product.price}</strong>

      </p>

      ${
        product.stock && product.stock <= 5
          ? `<p class="stock">Only ${product.stock} left</p>`
          : ""
      }

      <div class="product-actions">

        <button
          class="whatsapp-btn"
          onclick="window.open(
            'https://wa.me/254113505681?text=I want ${product.name}',
            '_blank'
          )"
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

// ============================
// INIT
// ============================

displayProducts(products);
updateCartCount();

// ============================
// SMART SEARCH
// ============================

const suggestionsBox = document.getElementById("searchSuggestions");

searchBar?.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase().trim();

  let filtered = applyFilters();

  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);

  // CLEAR SUGGESTIONS

  suggestionsBox.innerHTML = "";

  if (value === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  // SHOW TOP MATCHES

  filtered.slice(0, 5).forEach(product => {

    const div = document.createElement("div");

    div.classList.add("search-suggestion-item");

    div.innerText = product.name;

    div.onclick = () => {

      searchBar.value = product.name;

      suggestionsBox.style.display = "none";

      displayProducts([product]);

      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    };

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display =
    filtered.length ? "block" : "none";
});

// HIDE WHEN CLICK OUTSIDE

document.addEventListener("click", (e) => {

  if (!e.target.closest(".search-wrapper")) {
    suggestionsBox.style.display = "none";
  }
});

// ============================
// FILTERS
// ============================

function applyFilters() {

  let filtered = products;

  if (activeFilters.category !== "all") {
    filtered = filtered.filter(
      product => product.category === activeFilters.category
    );
  }

  if (activeFilters.gender) {
    filtered = filtered.filter(
      product => product.gender === activeFilters.gender
    );
  }

  if (activeFilters.brand) {
    filtered = filtered.filter(
      product => product.brand === activeFilters.brand
    );
  }

  return filtered;
}

function filterCategory(value) {

  activeFilters.category = value;

  displayProducts(applyFilters());

  updateActiveButtons();
}

function filterGender(value) {

  activeFilters.gender = value;

  displayProducts(applyFilters());

  updateActiveButtons();
}

function filterBrand(value) {

  activeFilters.brand = value;

  displayProducts(applyFilters());

  updateActiveButtons();
}

function resetFilters() {

  activeFilters = {
    category: "all",
    gender: null,
    brand: null
  };

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

    const type = btn.dataset.type;
    const value = btn.dataset.value;

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
// CART
// ============================

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
}

function updateCartCount() {

  const count = document.getElementById("cart-count");

  if (!count) return;

  count.innerText = cart.reduce((a, b) => a + b.qty, 0);
}

// ============================
// CART BOUNCE
// ============================

function bounceCart() {

  const cartIcon = document.getElementById("cart-icon");

  cartIcon.classList.add("bounce");

  setTimeout(() => {
    cartIcon.classList.remove("bounce");
  }, 400);
}

// ============================
// CART UI
// ============================

function toggleCart() {

  const panel = document.getElementById("cart-panel");

  const overlay = document.getElementById("cart-overlay");

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

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price * item.qty;

    container.innerHTML += `

      <div class="cart-item">

        <div>
          <strong>${item.name}</strong>
          <br>
          KSh ${item.price}
        </div>

        <div class="qty-controls">

          <button onclick="changeQty(${index}, -1)">
            −
          </button>

          <span>${item.qty}</span>

          <button onclick="changeQty(${index}, 1)">
            +
          </button>

        </div>

        <button
          class="remove-btn"
          onclick="removeItem(${index})"
        >
          ❌
        </button>

      </div>
    `;
  });

  totalBox.innerHTML =
    `<strong>Total: KSh ${total}</strong>`;
}

function removeItem(index) {

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  renderCart();
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

function checkoutCart() {

  window.location.href = "checkout.html";
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

// ============================
// MOBILE MENU
// ============================

function toggleMenu() {

  document.querySelector("nav").classList.toggle("show-nav");
}
// ============================
// HERO SLIDER
// ============================

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

setInterval(() => {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 4000);
