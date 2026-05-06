const container = document.getElementById("product-list");

products.forEach(product => {
  const item = document.createElement("div");
  item.classList.add("product");

  item.innerHTML = `
    <img src="${product.image}" alt="">
    <h3>${product.name}</h3>
    <p>
      <span style="color: gold;">KSh ${product.price}</span>
      <br>
      <small style="text-decoration: line-through; color: gray;">
        KSh ${product.oldPrice}
      </small>
    </p>
    <a href="https://wa.me/254113505681?text=Hello, I want to order ${product.name} for KSh ${product.price}" target="_blank">
      <button>Order on WhatsApp</button>
    </a>
  `;

  container.appendChild(item);
});