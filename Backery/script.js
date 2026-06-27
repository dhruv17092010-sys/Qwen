// --- Configuration ---
const WHATSAPP_NUMBER = "919797979797"; // Format: Country code + Number (No + or spaces)
const IMGBB_API_KEY = "85d2b64330c82ad0a82284b10bacc47c"; // Get free API key from https://api.imgbb.com/

// --- Product Data ---
const products = {
    cakes: [
        { id: 1, name: "Chocolate Truffle Cake", price: 650, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", desc: "Rich, dark, and velvety.", badges: ["eggless"] },
        { id: 2, name: "Red Velvet Cupcake", price: 150, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80", desc: "Soft crumb with cream cheese frosting.", badges: [] },
        { id: 3, name: "Vanilla Bean Cake", price: 600, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80", desc: "Classic vanilla with buttercream.", badges: ["vegan"] },
        { id: 4, name: "Black Forest Cake", price: 700, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80", desc: "Cherry and chocolate delight.", badges: [] }
    ],
    breads: [
        { id: 5, name: "Butter Croissant", price: 120, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Flaky, buttery, and golden.", badges: [] },
        { id: 6, name: "Whole Wheat Bread", price: 80, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", desc: "Healthy and wholesome.", badges: ["vegan"] },
        { id: 7, name: "Sourdough Loaf", price: 150, image: "https://images.unsplash.com/photo-1585476263060-b7a6b710f2a1?auto=format&fit=crop&w=800&q=80", desc: "Artisan sourdough bread.", badges: ["vegan"] },
        { id: 8, name: "Brioche Buns", price: 100, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Soft and buttery buns.", badges: [] }
    ],
    pastries: [
        { id: 9, name: "Fruit Danish", price: 180, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Fresh fruits on flaky pastry.", badges: [] },
        { id: 10, name: "Cream Puff", price: 140, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80", desc: "Light choux with vanilla cream.", badges: [] },
        { id: 11, name: "Apple Turnover", price: 160, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Warm spiced apple filling.", badges: ["vegan"] },
        { id: 12, name: "Eclair", price: 150, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80", desc: "Chocolate glazed perfection.", badges: [] }
    ],
    cookies: [
        { id: 13, name: "Chocolate Chip Cookies", price: 120, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80", desc: "Classic cookies with chunks.", badges: [] },
        { id: 14, name: "Oatmeal Raisin", price: 100, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", desc: "Healthy and chewy.", badges: ["vegan"] },
        { id: 15, name: "Macarons (Box of 6)", price: 350, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80", desc: "French delicate cookies.", badges: ["eggless"] },
        { id: 16, name: "Butter Cookies", price: 150, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", desc: "Melt-in-mouth buttery.", badges: [] }
    ],
    muffins: [
        { id: 17, name: "Blueberry Muffin", price: 130, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80", desc: "Bursting with blueberries.", badges: [] },
        { id: 18, name: "Chocolate Brownie", price: 140, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", desc: "Fudgy and rich.", badges: ["vegan"] },
        { id: 19, name: "Glazed Doughnut", price: 90, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80", desc: "Classic glazed treat.", badges: [] },
        { id: 20, name: "Carrot Muffin", price: 120, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80", desc: "Spiced with cream cheese.", badges: [] }
    ],
    savory: [
        { id: 21, name: "Cheese Garlic Bread", price: 180, image: "https://images.unsplash.com/photo-1573140401552-388e7e2f00b8?auto=format&fit=crop&w=800&q=80", desc: "Garlicky with melted cheese.", badges: [] },
        { id: 22, name: "Veggie Quiche", price: 220, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80", desc: "Fresh vegetables in pastry.", badges: ["eggless"] },
        { id: 23, name: "Mini Pizzas", price: 200, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", desc: "Topped with love.", badges: [] },
        { id: 24, name: "Savory Scones", price: 140, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Herb and cheese scones.", badges: [] }
    ],
    dried: [
        { id: 25, name: "Biscotti", price: 180, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", desc: "Twice-baked Italian cookies.", badges: ["vegan"] },
        { id: 26, name: "Rusks", price: 100, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", desc: "Perfect with tea.", badges: [] },
        { id: 27, name: "Bread Crumbs", price: 60, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", desc: "Fresh homemade crumbs.", badges: ["vegan"] },
        { id: 28, name: "Croutons", price: 80, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", desc: "Garlic seasoned croutons.", badges: ["vegan"] }
    ]
};

// --- Cart Logic ---
let cart = [];

// Load cart from localStorage on page load
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('velvetWhiskCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart from storage:', e);
            cart = [];
    saveCartToStorage();
        }
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('velvetWhiskCart', JSON.stringify(cart));
}

const cartBtn = document.getElementById('openCart');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountEl = document.querySelector('.cart-count');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModalBtn = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');

// Load cart on initialization
loadCartFromStorage();
updateCartUI();

// Open/Close Cart
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
});

const closeCart = () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
};

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Render Products
function renderProducts() {
    Object.keys(products).forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid) {
            grid.innerHTML = '';
            products[category].forEach(product => {
                const badgesHTML = product.badges.map(badge => {
                    const icon = badge === 'eggless' ? '<i class="fas fa-egg"></i>' : '<i class="fas fa-leaf"></i>';
                    const text = badge === 'eggless' ? 'Eggless' : 'Vegan';
                    return `<span class="badge ${badge}">${icon} ${text}</span>`;
                }).join('');
                
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-badges">${badgesHTML}</div>
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.desc}</p>
                        <div class="product-bottom">
                            <span class="price">₹${product.price}</span>
                            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Bag</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    });
    
    // Reattach event listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const name = e.target.dataset.name;
            const price = parseInt(e.target.dataset.price);
            
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                const product = Object.values(products).flat().find(p => p.id === id);
                cart.push({ ...product, qty: 1 });
            }
            
            saveCartToStorage();
            updateCartUI();
            
            // Visual feedback
            e.target.textContent = "Added!";
            e.target.style.background = "var(--pink-dark)";
            e.target.style.color = "white";
            setTimeout(() => {
                e.target.textContent = "Add to Bag";
                e.target.style.background = "";
                e.target.style.color = "";
            }, 1500);
        });
    });
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your bag is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            count += item.qty;
            
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</p>
                </div>
                <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCountEl.textContent = count;
    cartTotalEl.textContent = `₹${total}`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            cart.splice(index, 1);
            saveCartToStorage();
            updateCartUI();
        });
    });
}

// Checkout Logic
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    checkoutModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;

    let message = `🧁 *New Order from Velvet Whisk Website* 🧁\n\n`;
    message += `🛒 *Order Details:*\n`;
    
    let total = 0;
    cart.forEach(item => {
        message += `- ${item.qty}x ${item.name} (₹${item.price * item.qty})\n`;
        total += item.price * item.qty;
    });

    message += `\n💰 *Total:* ₹${total}\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    cart = [];
    saveCartToStorage();
    updateCartUI();
    checkoutForm.reset();
    checkoutModal.classList.remove('active');
});

// --- Custom Cake Form with Image Upload ---
const customForm = document.getElementById('customCakeForm');
const fileInput = document.getElementById('cakeImage');
const fileNameSpan = document.getElementById('fileName');
const uploadProgress = document.getElementById('uploadProgress');
const progressBar = document.querySelector('.progress-bar');
const submitBtn = document.getElementById('submitCustomOrder');

let uploadedImageUrl = '';

fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    fileNameSpan.textContent = file.name;
    
    // Show progress
    uploadProgress.style.display = 'block';
    progressBar.classList.add('uploading');
    
    try {
        // Upload to ImgBB
        const formData = new FormData();
        formData.append('image', file);
        
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            uploadedImageUrl = data.data.url;
            fileNameSpan.textContent = `✓ ${file.name} (Uploaded)`;
            fileNameSpan.style.color = 'var(--eggless)';
        } else {
            throw new Error('Upload failed');
        }
    } catch (error) {
        console.error('Upload error:', error);
        fileNameSpan.textContent = `✗ Upload failed - ${file.name}`;
        fileNameSpan.style.color = '#ff4d4d';
        uploadedImageUrl = '';
        alert('Image upload failed. You can still place the order and share the image manually on WhatsApp.');
    } finally {
        uploadProgress.style.display = 'none';
        progressBar.classList.remove('uploading');
    }
});

customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const weight = document.getElementById('cakeWeight').value;
    const flavor = document.getElementById('cakeFlavor').value;
    const notes = document.getElementById('cakeNotes').value;
    
    let message = `🎂 *Custom Cake Order - Velvet Whisk* 🎂\n\n`;
    message += `🍰 *Cake Details:*\n`;
    message += `- Weight: ${weight} Kg\n`;
    message += `- Flavor: ${flavor}\n`;
    message += `- Instructions: ${notes || 'None'}\n\n`;
    
    if (uploadedImageUrl) {
        message += `📎 *Reference Image:* ${uploadedImageUrl}\n\n`;
    } else if (fileInput.files.length > 0) {
        message += `📎 *Note:* I have the reference image ready to share on WhatsApp.\n\n`;
    } else {
        message += `📎 *Reference Image:* No image provided.\n\n`;
    }

    message += `Please let me know the price and availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    customForm.reset();
    fileNameSpan.textContent = "Click to upload image";
    fileNameSpan.style.color = '';
    uploadedImageUrl = '';
});

// --- View More Functionality (Removed - No longer generates dummy products) ---
// The View More buttons are now hidden via CSS as this functionality has been removed.
// Product listings are now managed through Decap CMS configuration.

// Hide all view more buttons
document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.style.display = 'none';
});

// --- Particle System (Flour Dust Effect) ---
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    
    // Create particles on mouse move
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(253, 248, 245, ${Math.random() * 0.5 + 0.3})`;
        this.life = 100;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
        this.size *= 0.98;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0 || particles[i].size <= 0.1) {
            particles.splice(i, 1);
            i--;
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// --- Scroll Reveal Animation ---
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// --- Magnetic Button Effect ---
const magneticBtns = document.querySelectorAll('.btn-magnetic');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// Initialize
renderProducts();
// --- Hamburger Menu Toggle ---
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}
