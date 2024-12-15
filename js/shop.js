// shop.js
// generate product cards 

// display product cards on page load
document.addEventListener('DOMContentLoaded', createProductCardsFromJson);





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

//console.log(localStorage.getItem('shopping-cart'));

// Update product cards on page load
document.getElementById('addtocart').addEventListener('click', addToCart )
document.getElementById('addtocart').addEventListener('click', displayAddToCartModal)

console.log(displayCartItems)

// Attach event listener to the Buy Now button
document.getElementById('buy-now-btn').addEventListener('click', handleBuyNow);

// remove items from shopping cart 
// ! for testing purposes only 
//localStorage.setItem('shopping-cart', JSON.stringify([]));



// add to cart 
function addToCart() {

    // fetch json data 
    const JsonData = fetchProducts();


    // query selector to get div element 
    const productElement = document.querySelector('.product-name[product-id]');
    // check if element exitst 
    if (productElement) {
        // get the product-id attribute (product-number)
        const productID = productElement.getAttribute('product-id');
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

function handleBuyNow(event) {
    const buyNowButton = event.target;
    const productId = buyNowButton.getAttribute('product-id');

     // fetch json data 
     const JsonData = fetchProducts();


     // query selector to get div element 
     const productElement = document.querySelector('.product-name[product-id]');
     // check if element exitst 
     if (productElement) {
         // get the product-id attribute (product-number)
         const productID = productElement.getAttribute('product-id');
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
     } else {
         console.error('Product element not found');
     }
}

//================================================================================

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
            const productCards = document.querySelectorAll('.card[product-id]');

            productCards.forEach(card => {
                // ! This product-id stumped me for a while (I was trying to get element by id )
                const productID = card.getAttribute('product-id');
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


async function fetchProducts() {
    try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
            throw new Error(`Error fetching Player products}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}