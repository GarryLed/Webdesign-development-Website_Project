// shop.js
// generate product cards 
// display product cards on page load
document.addEventListener('DOMContentLoaded', createProductCardsFromJson);

// attatching event listeners to all "Buy Now" buttons
document.querySelectorAll('.buy-now-btn').forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', handleBuyNow);
    btn.addEventListener('click', handleBuyNowForCardProducts)
});


//====================== Shopping Cart ========================================
// using localstorage to persist state to store shopping cart items 
let shoppingCart;

try {

    shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];
} catch (error) {

    console.error("Error parsing shopping cart data:", error);
    shoppingCart = [];
}
console.log("Current shopping cart:", shoppingCart);



// add event listeners for adding products to cart 
document.getElementById('addtocart').addEventListener('click', addToCart)
document.getElementById('addtocart').addEventListener('click', displayAddToCartModal)

// add to cart function 
function addToCart() {

    // query selector to get div element 
    // TODO: change this to id 
    const productElement = document.querySelector('.product-name[id]');
    // check if element exitst 
    if (productElement) {
        // get the product-id attribute (product-number)
        const productID = productElement.getAttribute('id');
        console.log(productID); // testing 

        // get total number of products in the cart 
        var total = localStorage.getItem('checkout');
        total++;
        //total = 0; // for testing 
        localStorage.setItem('checkout', total);
        document.querySelector('#checkout').innerHTML = total;
        var total = localStorage.getItem('checkout');

        fetch('/data/products.json')
            .then(response => response.json())
            .then(productsArray => {
                // Iterate through the array and display product data
                productsArray.forEach(product => {
                    // filter products by product id 
                    if (productID === product.id) {
                        // if product id matches push products to cart 
                        shoppingCart.push({
                            'id': product.id,
                            'name': product.name,
                            'price': product.price
                        });
                        // persist state of the shopping cart using local storage 
                        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
                    }
                });
            })
            .catch(error => console.error('Error loading products:', error));
    } else {
        console.error('Product element not found');
    }
}


// empty shopping cart 
function emptyCart() {
    localStorage.setItem('shopping-cart', JSON.stringify([]));
}

//============= display Pop up after item added to cart =================

// use bootstrap to display a pop up after an item is added to the cart
// gives the user an option to go to the cart or to continue shopping 
function displayAddToCartModal() {
    const addToCartModal = new bootstrap.Modal(document.getElementById('addToCartModal'));

    addToCartModal.show();
}

//===================== Buy Now Option ============================================

// TODO: refactor this code 
// ! I made two functions to handle the buy now button in product cards and the buy butons
// ! now in product cards 
// using an event object to identify the particular buy now button on a page 
function handleBuyNow(event) {
    const button = event.target;

    // works on products that are cards 
    const productDetailsContainer = button.closest('.product').parentElement;
    const productNameElement = productDetailsContainer.querySelector('.product-name')
    const productID = productNameElement.getAttribute('id');

    // get total number of products in the cart 
    var total = localStorage.getItem('checkout');
    total++;
    //total = 0; // for testing 
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = total;
    var total = localStorage.getItem('checkout');

    fetch('/data/products.json')
        .then(response => response.json())
        .then(productsArray => {
            // Iterate through the array and display product data
            productsArray.forEach(product => {
                // filter products by product id 
                if (productID === product.id) {
                    // if product id matches push products to cart 
                    shoppingCart.push({
                        'id': product.id,
                        'name': product.name,
                        'price': product.price
                    });
                    // persist state of the shopping cart using local storage 
                    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

                    window.location.href = "/checkout.html";
                }
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// function to handle products that are not cards 
// using an event object to identify the particular buy now button on a page 
function handleBuyNowForCardProducts(event) {
    const button = event.target;
    console.log('buy now button test ')

    // works on products that are cards 
    const productCard = button.closest('.card');

    const productID = productCard.getAttribute('id');
    console.log(productID); // testing 

    // get total number of products in the cart 
    var total = localStorage.getItem('checkout');
    total++;
    //total = 0; // for testing 
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = total;
    var total = localStorage.getItem('checkout');

    fetch('/data/products.json')
        .then(response => response.json())
        .then(productsArray => {
            // Iterate through the array and display product data
            productsArray.forEach(product => {
                // filter products by product id 
                if (productID === product.id) {
                    // if product id matches push products to cart 
                    shoppingCart.push({
                        'id': product.id,
                        'name': product.name,
                        'price': product.price
                    });
                    // persist state of the shopping cart using local storage 
                    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

                    window.location.href = "/checkout.html";
                }
            });
        })
        .catch(error => console.error('Error loading products:', error));
}


//================================================================================

// dynamicially creting product cards 
function createProductCardsFromJson() {
    // fetch the json product data 
    fetch('/data/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("JSON data could not be found");
            }
            return response.json();
        })
        .then(shopProducts => {
            const productCards = document.querySelectorAll('.card[id]');

            productCards.forEach(card => {
                // ! This product-id stumped me for a while (I was trying to get element by id )
                const productID = card.getAttribute('id');
                console.log(productID)
                const productData = shopProducts.find(product => product.id === productID);
                if (productData) {
                    const imgElement = card.querySelector('.card-img-top');
                    const titleElement = card.querySelector('.card-title');
                    const textElement = card.querySelector('.card-text');
                    const priceElement = card.querySelector('.price');
                    const learnMoreBtn = card.querySelector('.learn-more-btn');
                    const buyNowBtn = card.querySelector('.buy-now-btn');

                    imgElement.src = productData.img;
                    imgElement.alt = productData.name;
                    titleElement.textContent = productData.name;
                    textElement.textContent = productData.description;
                    priceElement.textContent = `Price: €${productData.price}`;
                    learnMoreBtn.href = productData.location;
                    learnMoreBtn.textContent = "Learn More";
                    buyNowBtn.href = productData.checkout;
                    buyNowBtn.textContent = "Buy Now";
                }
            })
        })
}