// Sample product data
const products = [
    {
        id: 1,
        name: "Boat Rockerz 550 Pro Wireless Headphones (2025)",
        price: 5499,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
        category: "electronics",
        rating: 4.5,
        reviews: 1250,
        delivery: "Free Delivery",
        offers: ["10% off", "No Cost EMI"]
    },
    {
        id: 2,
        name: "Fire-Boltt Quantum Smart Watch (2025)",
        price: 12999,
        image: "https://m.media-amazon.com/images/I/61L5QgPvgqL._SL1500_.jpg",
        category: "electronics",
        rating: 4.2,
        reviews: 856,
        delivery: "Free Delivery",
        offers: ["5% off", "Exchange Offer"]
    },
    {
        id: 3,
        name: "The Midnight Library - Matt Haig",
        price: 499,
        image: "https://m.media-amazon.com/images/I/81YzHKeWq7L._AC_UL1500_.jpg",
        category: "books",
        rating: 4.7,
        reviews: 2341,
        delivery: "Free Delivery",
        offers: ["15% off", "Bank Offer"]
    },
    {
        id: 4,
        name: "Samsung Galaxy S25 Ultra",
        price: 149999,
        image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg",
        category: "electronics",
        rating: 4.8,
        reviews: 3421,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Exchange Offer"]
    },
    {
        id: 5,
        name: "Apple MacBook Air M3 (2025)",
        price: 134900,
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",
        category: "electronics",
        rating: 4.9,
        reviews: 2890,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Bank Offer"]
    },
    {
        id: 6,
        name: "Sony WH-1000XM7 Wireless Headphones",
        price: 34990,
        image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1500_.jpg",
        category: "electronics",
        rating: 4.7,
        reviews: 1567,
        delivery: "Free Delivery",
        offers: ["10% off", "No Cost EMI"]
    },
    {
        id: 7,
        name: "Atomic Habits - James Clear",
        price: 799,
        image: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL1500_.jpg",
        category: "books",
        rating: 4.6,
        reviews: 1890,
        delivery: "Free Delivery",
        offers: ["20% off", "Bank Offer"]
    },
    {
        id: 8,
        name: "Dell XPS 15 (2025)",
        price: 149990,
        image: "https://m.media-amazon.com/images/I/71RD3vsjIYL._SL1500_.jpg",
        category: "electronics",
        rating: 4.8,
        reviews: 2345,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Exchange Offer"]
    },
    {
        id: 9,
        name: "Canon EOS R7 Mark II Camera",
        price: 279990,
        image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._UL1500_.jpg",
        category: "electronics",
        rating: 4.9,
        reviews: 890,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Bank Offer"]
    },
    {
        id: 10,
        name: "Samsung 65\" QLED 8K Smart TV (2025)",
        price: 129990,
        image: "https://m.media-amazon.com/images/I/71LJJrKbezL._SL1500_.jpg",
        category: "electronics",
        rating: 4.7,
        reviews: 3456,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Exchange Offer"]
    },
    {
        id: 11,
        name: "Apple AirPods Pro 3rd Gen",
        price: 29900,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
        category: "electronics",
        rating: 4.8,
        reviews: 5678,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Bank Offer"]
    },
    {
        id: 12,
        name: "Sony PlayStation 6 Digital Edition",
        price: 49990,
        image: "https://m.media-amazon.com/images/I/71LJJrKbezL._SL1500_.jpg",
        category: "electronics",
        rating: 4.9,
        reviews: 4567,
        delivery: "Free Delivery",
        offers: ["No Cost EMI", "Exchange Offer"]
    },
    {
        id: 13,
        name: "Project Hail Mary - Andy Weir",
        price: 599,
        image: "https://m.media-amazon.com/images/I/91Bd7P8UwxL._AC_UL1500_.jpg",
        category: "books",
        rating: 4.5,
        reviews: 2345,
        delivery: "Free Delivery",
        offers: ["15% off", "Bank Offer"]
    },
    {
        id: 14,
        name: "The Psychology of Money - Morgan Housel",
        price: 399,
        image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UL1500_.jpg",
        category: "books",
        rating: 4.4,
        reviews: 1234,
        delivery: "Free Delivery",
        offers: ["10% off", "Bank Offer"]
    },
    {
        id: 15,
        name: "Klara and the Sun - Kazuo Ishiguro",
        price: 499,
        image: "https://m.media-amazon.com/images/I/71X1p4TGlxL._AC_UL1500_.jpg",
        category: "books",
        rating: 4.3,
        reviews: 987,
        delivery: "Free Delivery",
        offers: ["20% off", "Bank Offer"]
    }
];

// Format price to Indian Rupees
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

// Generate star rating HTML
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

// Remove from cart function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    showNotification('Product removed from cart!');
    renderCart();
}

// Update quantity function
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            removeFromCart(productId);
            return;
        }
        saveCart();
        renderCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart count in navigation
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> (${totalItems})`;
    }
}

// Render cart page
function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    
    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to your cart to see them here.</p>
                    <a href="products.html" class="continue-shopping">Continue Shopping</a>
                </div>
            `;
        } else {
            cartContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <div class="rating">
                            ${generateRatingStars(item.rating)}
                            <span>(${item.reviews})</span>
                        </div>
                        <p class="delivery">${item.delivery}</p>
                    </div>
                    <div class="cart-item-price">
                        <p class="price">${formatPrice(item.price)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="quantity-btn">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="quantity-btn">+</button>
                    </div>
                    <div class="cart-item-total">
                        <p class="price">${formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="remove-item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }

    if (cartTotal) {
        cartTotal.innerHTML = `
            <div class="cart-summary">
                <h3>Cart Summary</h3>
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(calculateTotal())}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery</span>
                    <span>Free</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>${formatPrice(calculateTotal())}</span>
                </div>
                <button onclick="proceedToCheckout()" class="checkout-btn">Proceed to Checkout</button>
            </div>
        `;
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        showNotification('Your cart is empty!');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            let isValid = true;

            for (let [key, value] of formData.entries()) {
                if (!value) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                showNotification('Form submitted successfully!');
                form.reset();
            } else {
                showNotification('Please fill in all fields');
            }
        });
    }
}

// Initialize product grid
function initializeProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    const productsHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <div class="rating">
                ${generateRatingStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="delivery">${product.delivery}</p>
            <p class="offers">${product.offers}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');

    productsGrid.innerHTML = productsHTML;
}

// Initialize category filter
function initializeCategoryFilter() {
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        // Get unique categories from products
        const categories = [...new Set(products.map(product => product.category))];
        
        // Add category options
        categorySelect.innerHTML = `
            <option value="all">All Categories</option>
            ${categories.map(category => `
                <option value="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</option>
            `).join('')}
        `;

        // Add event listener for category change
        categorySelect.addEventListener('change', filterProducts);
    }
}

// Filter products based on category and price
function filterProducts() {
    const categorySelect = document.getElementById('category');
    const priceRange = document.getElementById('priceRange');
    const productsGrid = document.querySelector('.products-grid');
    
    if (!categorySelect || !priceRange || !productsGrid) return;

    const selectedCategory = categorySelect.value;
    const maxPrice = parseInt(priceRange.value);

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found matching your criteria</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    const productsHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <div class="rating">
                ${generateRatingStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="delivery">${product.delivery}</p>
            <p class="offers">${product.offers}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');

    productsGrid.innerHTML = productsHTML;
}

// Initialize price range filter
function initializePriceFilter() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    if (priceRange && priceValue) {
        // Set max price as the highest product price
        const maxPrice = Math.max(...products.map(p => p.price));
        priceRange.max = maxPrice;
        priceRange.value = maxPrice;
        priceValue.textContent = formatPrice(maxPrice);

        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = formatPrice(parseInt(e.target.value));
            filterProducts();
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    initializeCategoryFilter();
    initializePriceFilter();
    validateForm('loginForm');
    validateForm('signupForm');
    validateForm('checkoutForm');
    updateCartCount();
    renderCart();
});

// --- PRODUCTS PAGE FUNCTIONALITY FIXES ---

// Helper: Get elements
function getProductsPageElements() {
    return {
        categorySelect: document.getElementById('categorySelect'),
        priceRange: document.getElementById('priceRange'),
        maxPriceDisplay: document.getElementById('maxPriceDisplay'),
        sortSelect: document.getElementById('sortSelect'),
        productsGrid: document.getElementById('productsGrid'),
        cartCount: document.querySelector('.cart-count'),
        cartIcon: document.querySelector('.cart-icon'),
        signInBtn: document.querySelector('.btn.btn-primary, .login-btn'),
    };
}

// Render products with optional filter/sort
function renderProducts({category = '', maxPrice = Infinity, sort = 'featured'} = {}) {
    const { productsGrid } = getProductsPageElements();
    if (!productsGrid) return;
    let filtered = products.filter(product => {
        const categoryMatch = !category || product.category === category;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
    // Sort logic
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    if (filtered.length === 0) {
        productsGrid.innerHTML = `<div class="no-products"><h3>No products found matching your criteria</h3><p>Try adjusting your filters</p></div>`;
        return;
    }
    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-rating">
                    <span class="rating-stars">${generateRatingStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-delivery">${product.delivery}</div>
                <div class="product-offers">${product.offers.map(offer => `<span class='offer-tag'>${offer}</span>`).join(' ')}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Initialize filters and sorting
function initializeProductsPageFilters() {
    const { categorySelect, priceRange, maxPriceDisplay, sortSelect } = getProductsPageElements();
    if (!categorySelect || !priceRange || !sortSelect) return;
    // Set max price
    const maxPrice = Math.max(...products.map(p => p.price));
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    if (maxPriceDisplay) maxPriceDisplay.textContent = formatPrice(maxPrice);
    // Event listeners
    function updateProducts() {
        renderProducts({
            category: categorySelect.value,
            maxPrice: parseInt(priceRange.value),
            sort: sortSelect.value
        });
    }
    categorySelect.addEventListener('change', updateProducts);
    priceRange.addEventListener('input', function() {
        if (maxPriceDisplay) maxPriceDisplay.textContent = formatPrice(parseInt(priceRange.value));
        updateProducts();
    });
    sortSelect.addEventListener('change', updateProducts);
    // Initial render
    updateProducts();
}

// Cart count update
function updateCartCount() {
    const { cartCount } = getProductsPageElements();
    if (cartCount) cartCount.textContent = `(${cart.reduce((sum, item) => sum + (item.quantity || 1), 0)})`;
}

// Cart icon click
function initializeCartButton() {
    const { cartIcon } = getProductsPageElements();
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
}

// Sign In button click
function initializeSignInButton() {
    const { signInBtn } = getProductsPageElements();
    if (signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
}

// On DOMContentLoaded, initialize everything for products page
if (window.location.pathname.includes('products.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        initializeProductsPageFilters();
        updateCartCount();
        initializeCartButton();
        initializeSignInButton();
    });
}
// --- END PRODUCTS PAGE FUNCTIONALITY FIXES ---

// --- PRICE RANGE BAR FIX ---
function initializePriceRangeBar() {
    const priceRange = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const categorySelect = document.getElementById('categorySelect');
    const sortSelect = document.getElementById('sortSelect');
    if (!priceRange || !maxPriceDisplay) return;
    // Set max price as the highest product price
    const maxPrice = Math.max(...products.map(p => p.price));
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    maxPriceDisplay.textContent = formatPrice(maxPrice);
    // Update products and max price display on input
    priceRange.addEventListener('input', function() {
        maxPriceDisplay.textContent = formatPrice(parseInt(priceRange.value));
        renderProducts({
            category: categorySelect ? categorySelect.value : '',
            maxPrice: parseInt(priceRange.value),
            sort: sortSelect ? sortSelect.value : 'featured'
        });
    });
}

if (window.location.pathname.includes('products.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        initializePriceRangeBar();
    });
}
// --- END PRICE RANGE BAR FIX --- 