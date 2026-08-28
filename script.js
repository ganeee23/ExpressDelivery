/* =====================================================
   EXPRESSDELIVERY
   CART + QUANTITY + CHECKOUT + WHATSAPP
   ===================================================== */


/* =====================================================
   IMPORTANT
   =====================================================

   CHANGE THIS NUMBER TO YOUR WHATSAPP NUMBER.

   Example:
   Indian number 9876543210

   Write:

   919876543210

   No + sign.
   No spaces.
   ===================================================== */

const WHATSAPP_NUMBER = "919321731019";


/* ================= CART ================= */

let cart = [];

let selectedCategory = "All";


/* ================= START WEBSITE ================= */

document.addEventListener("DOMContentLoaded", function () {

    createCategories();

    renderMenu();

    updateCart();

});


/* ================= CREATE CATEGORIES ================= */

function createCategories() {

    const container =
        document.getElementById("categories");

    const categories = [
        "All",
        ...new Set(
            menuItems.map(item => item.category)
        )
    ];

    container.innerHTML = "";


    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-button";


        if (category === "All") {

            button.classList.add("active");

        }


        button.innerText = category;


        button.addEventListener("click", function () {

            selectedCategory = category;


            document
                .querySelectorAll(".category-button")
                .forEach(btn => {

                    btn.classList.remove("active");

                });


            button.classList.add("active");


            renderMenu();

        });


        container.appendChild(button);

    });

}


/* ================= RENDER MENU ================= */

function renderMenu() {

    const grid =
        document.getElementById("menuGrid");

    const searchInput =
        document.getElementById("searchInput");

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredItems =
        menuItems.filter(item => {

            const categoryMatch =
                selectedCategory === "All" ||
                item.category === selectedCategory;


            const searchMatch =
                item.name
                    .toLowerCase()
                    .includes(search) ||

                item.category
                    .toLowerCase()
                    .includes(search);


            return categoryMatch && searchMatch;

        });


    document.getElementById("menuCount").innerText =
        filteredItems.length + " items";


    grid.innerHTML = "";


    if (filteredItems.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                color:#777;
            ">

                😔 No food found.

            </div>

        `;

        return;

    }


    filteredItems.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "product-card";


        card.innerHTML = `

            <img
                class="product-image"
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="product-content">

                <div class="product-category">
                    ${item.category}
                </div>

                <div class="product-name">
                    ${item.name}
                </div>

                <div class="product-description">
                    ${item.description}
                </div>

                <div class="product-bottom">

                    <div class="product-price">
                        ₹${item.price}
                    </div>

                    <button
                        class="add-button"
                        onclick="addToCart(${item.id})">

                        ADD +

                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* ================= ADD TO CART ================= */

function addToCart(id) {

    const product =
        menuItems.find(item => item.id === id);


    if (!product) {

        return;

    }


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    }

    else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    updateCart();


    document
        .getElementById("cartPanel")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* ================= INCREASE ================= */

function increaseQuantity(id) {

    const item =
        cart.find(item => item.id === id);


    if (!item) {

        return;

    }


    item.quantity++;


    updateCart();

}


/* ================= DECREASE ================= */

function decreaseQuantity(id) {

    const item =
        cart.find(item => item.id === id);


    if (!item) {

        return;

    }


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    updateCart();

}


/* ================= UPDATE CART ================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const cartQuantity =
        document.getElementById("cartQuantity");


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                Your cart is waiting
                for your first bite 😋

            </div>

        `;


        cartTotal.innerText = "₹0";

        cartQuantity.innerText = "0";

        return;

    }


    cartItems.innerHTML = "";


    let totalAmount = 0;

    let totalQuantity = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;


        totalAmount += itemTotal;

        totalQuantity += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${item.name}
                </div>

                <div class="cart-item-price">

                    ₹${item.price}
                    ×
                    ${item.quantity}

                </div>

            </div>


            <div class="quantity-control">

                <button
                    class="quantity-button"
                    onclick="decreaseQuantity(${item.id})">

                    −

                </button>


                <span class="quantity-number">

                    ${item.quantity}

                </span>


                <button
                    class="quantity-button"
                    onclick="increaseQuantity(${item.id})">

                    +

                </button>

            </div>


            <div class="item-total">

                ₹${itemTotal}

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.innerText =
        "₹" + totalAmount;


    cartQuantity.innerText =
        totalQuantity;

}


/* ================= CLEAR CART ================= */

function clearCart() {

    if (cart.length === 0) {

        return;

    }


    const answer =
        confirm("Clear your entire cart?");


    if (answer) {

        cart = [];

        updateCart();

    }

}


/* ================= GET TOTAL ================= */

function getCartTotal() {

    return cart.reduce(
        function (total, item) {

            return total +
                (item.price * item.quantity);

        },
        0
    );

}


/* ================= GET QUANTITY ================= */

function getTotalQuantity() {

    return cart.reduce(
        function (total, item) {

            return total + item.quantity;

        },
        0
    );

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Please add something to your cart first 😋"
        );

        return;

    }


    document.getElementById("modalTotal")
        .innerText =
        "₹" + getCartTotal();


    document.getElementById("modalQuantity")
        .innerText =
        getTotalQuantity();


    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


/* ================= CLOSE CHECKOUT ================= */

function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("show");

}


/* ================= SEND ORDER ================= */

function sendOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const tower =
        document
            .getElementById("tower")
            .value
            .trim();


    const flat =
        document
            .getElementById("flat")
            .value
            .trim();


    const payment =
        document
            .getElementById("payment")
            .value;


    const instructions =
        document
            .getElementById("instructions")
            .value
            .trim();


    /* ================= PHONE CHECK ================= */

    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    /* ================= ORDER MESSAGE ================= */

    let message =
        "🟠 *NEW EXPRESSDELIVERY ORDER*";


    message += "\n\n";

    message +=
        "👤 *Customer:* " + name;

    message += "\n";

    message +=
        "📱 *Mobile:* " + phone;

    message += "\n";

    message +=
        "🏢 *Tower:* " + tower;

    message += "\n";

    message +=
        "🚪 *Flat:* " + flat;

    message += "\n\n";


    message +=
        "🛒 *ORDER ITEMS*";


    message += "\n";


    cart.forEach(function (item) {

        message +=
            "\n• " +
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            (item.price * item.quantity);

    });


    message += "\n\n";


    message +=
        "🔢 *Total Items:* " +
        getTotalQuantity();


    message += "\n";


    message +=
        "💰 *TOTAL AMOUNT:* ₹" +
        getCartTotal();


    message += "\n";


    message +=
        "💳 *Payment:* " +
        payment;


    if (instructions !== "") {

        message += "\n\n";

        message +=
            "📝 *Delivery Instructions:*";

        message += "\n";

        message += instructions;

    }


    message += "\n\n";

    message +=
        "Please confirm item availability.";


    /* ================= WHATSAPP ================= */

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );


    closeCheckout();

}


/* ================= DIRECT WHATSAPP ================= */

function openWhatsApp() {

    const message =
        "Hi ExpressDelivery 👋 I want to order food. Please send me today's available menu.";


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* ================= SCROLL TO MENU ================= */

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= CLOSE MODAL OUTSIDE ================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("checkoutModal");


    if (event.target === modal) {

        closeCheckout();

    }

});