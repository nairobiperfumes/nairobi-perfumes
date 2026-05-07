let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ============================
// RENDER CHECKOUT
// ============================

function renderCheckout() {

  const container = document.getElementById("checkout-items");
  const totalBox = document.getElementById("checkout-total");

  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {

    total += item.price * item.qty;

    container.innerHTML += `
      <div class="checkout-item">
        <strong>${item.name}</strong><br>
        ${item.qty} x KSh ${item.price}
      </div>
    `;

  });

  totalBox.innerText = "Subtotal: KSh " + total;
}

renderCheckout();

// ============================
// WHATSAPP CHECKOUT
// ============================

function sendWhatsAppOrder() {

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const location = document.getElementById("customer-location").value;
  const delivery = parseInt(document.getElementById("delivery-area").value);

  if (!name || !phone || !location || delivery === 0) {
    alert("Please fill all details");
    return;
  }

  let message = `🛍 NEW ORDER - NAIROBI PERFUMES%0A%0A`;

  message += `Name: ${name}%0A`;
  message += `Phone: ${phone}%0A`;
  message += `Location: ${location}%0A`;
  message += `Delivery: KSh ${delivery}%0A%0A`;

  let total = 0;

  cart.forEach(item => {
    message += `${item.name} x${item.qty} = KSh ${item.price * item.qty}%0A`;
    total += item.price * item.qty;
  });

  total += delivery;

  message += `%0ATOTAL: KSh ${total}`;

  window.open(
    "https://wa.me/254113505681?text=" + message,
    "_blank"
  );
}

// ============================
// FUTURE PAYMENT GATEWAY
// ============================

function payOnline() {
  alert("Stripe / M-Pesa integration coming next 🚀");
}