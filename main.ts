
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <h1>🛍️ ShopEase</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#cart">Cart 🛒 <span id="cart-count">0</span></a>
    </nav>
  </header>

  <section class="hero" id="home">
    <div>
      <h2>Discover Your Style</h2>
      <p>Find amazing products at amazing prices.</p>
      <a href="#products" class="shop-btn">Shop Now</a>
    </div>
  </section>

  <main id="products">
    <h2>Our Products</h2>
    <input id="search" type="text" placeholder="Search products...">
    <div class="product-grid" id="product-list"></div>
  </main>

  <section id="about" class="about">
    <h2>About ShopEase</h2>
    <p>Your one-stop destination for quality products at affordable prices.</p>
  </section>

  <footer>
    <p>© 2026 ShopEase. All rights reserved.</p>
  </footer>
`

const products = [
  { id: 1, name: 'Headphones', price: 1499, emoji: '🎧' },
  { id: 2, name: 'Smart Watch', price: 2499, emoji: '⌚' },
  { id: 3, name: 'Running Shoes', price: 1999, emoji: '👟' },
  { id: 4, name: 'Backpack', price: 999, emoji: '🎒' },
  { id: 5, name: 'Camera', price: 4999, emoji: '📷' },
  { id: 6, name: 'Sunglasses', price: 799, emoji: '🕶️' }
]

let cart = []

function displayProducts(items) {
  document.querySelector('#product-list').innerHTML = items.map(product => `
    <article class="product-card">
      <div class="product-image">${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>₹${product.price.toLocaleString('en-IN')}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </article>
  `).join('')
}

window.addToCart = function(id) {
  cart.push(id)
  document.querySelector('#cart-count').textContent = cart.length
  alert('Product added to cart!')
}

document.querySelector('#search').addEventListener('input', (event) => {
  const searchText = event.target.value.toLowerCase()
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchText)
  )
  displayProducts(filtered)
})

displayProducts(products)
