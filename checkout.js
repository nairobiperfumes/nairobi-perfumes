let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ============================
// RENDER CHECKOUT
// ============================

function renderCheckout() {

  const container = document.getElementById("checkout-items");
  const totalBox = document.getElementById("checkout-total");

  if (!container || !totalBox) return;

  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {

    total += item.price * item.qty;

    container.innerHTML += `
      <div class="order-item">
        <span>${item.name} x ${item.qty}</span>
        <span>KSh ${item.price * item.qty}</span>
      </div>
    `;
  });

  totalBox.innerHTML = `Total: KSh ${total}`;
}

renderCheckout();

// ============================
// WHATSAPP ORDER
// ============================

function sendWhatsAppOrder() {

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const location = document.getElementById("customer-location").value;
  const delivery = document.getElementById("delivery-area").value;

  if (!name || !phone || !location || !delivery) {
    alert("Please fill all details");
    return;
  }

  let message = `🛍 NEW ORDER - NAIROBI PERFUMES\n\n`;

  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Location: ${location}\n`;
  message += `Delivery Area: ${delivery}\n\n`;

  let total = 0;

  cart.forEach(item => {

    message += `${item.name} x${item.qty} = KSh ${item.price * item.qty}\n`;

    total += item.price * item.qty;
  });

  message += `\nTOTAL: KSh ${total}`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/254113505681?text=${encodedMessage}`,
    "_blank"
  );
}