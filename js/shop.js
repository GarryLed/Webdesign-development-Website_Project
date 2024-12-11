// shop.js
// generate product cards 


// Array to store all Products 
let shopProducts = [
    {
        id: "1",
        name: "Black Ops 6",
        price: 59.99,
        description: "add description here",
        img: "/images/mw2.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    }, 
    {   
        id: "2",
        name: "The Last Of Us",
        price: 69.99,
        description: "add description here",
        img: "/images/tlou.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "3",
        name: "Days Gone 2",
        price: 69.99,
        description: "add description here",
        img: "/images/days_gone.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "4",
        name: "Modern Warfare 2",
        price: 69.99,
        description: "add description here",
        img: "/images/mw2.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "5",
        name: "GTA 5",
        price: 59.99,
        description: "add description here",
        img: "/images/gta5.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "6",
        name: "Detroit Become Human",
        price: 59.99,
        description: "add description here",
        img: "/images/detroit.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    }, 
    {
        id: "7",
        name: "PS5 Pro",
        price: 799.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    }, 
    {
        id: "8",
        name: "PS5 TLOU Edition",
        price: 699.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "9",
        name: "PS5 Slim",
        price: 599.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "10",
        name: "PS4 Pro",
        price: 599.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "11",
        name: "PS4 TLOU Edition ",
        price: 399.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "12",
        name: "PS4 Slim",
        price: 399.99,
        description: "add description here",
        img: "/images/ps5box.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    }, 
    {
        id: "13",
        name: "PS5 Controller",
        price: 99.99,
        description: "add description here",
        img: "/images/controller.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "14",
        name: "PS5 Custom Controller",
        price: 299.99,
        description: "add description here",
        img: "/images/customps5controller.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "15",
        name: "PS5 Headphones",
        price: 59.99,
        description: "add description here",
        img: "/images/headphones.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    },
    {
        id: "16",
        name: "Days Gone 2",
        price: 59.99,
        description: "add description here",
        img: "/images/days_gone.jpeg",
        location: "/ps5/bo6ps5.html",
        checkout: "/checkout.html"
    }
]

// array to store shopping cart items 
let shoppingCart = [];



// Function to update HTML elements based on product data
function createProductCards() {
    const productCards = document.querySelectorAll('.card[data-id]');

    productCards.forEach(card => {
        const productId = card.getAttribute('data-id');
        const productData = shopProducts.find(product => product.id === productId);

       
            // create card content
            const imgElement = card.querySelector('.card-img-top');
            const titleElement = card.querySelector('.card-title');
            const textElement = card.querySelector('.card-text');
            const priceElement = card.querySelector('.price');
            const learnMoreBtn = card.querySelector('.learn-more-btn');
            const buyNowBtn = card.querySelector('.buy-now-btn')

            imgElement.src = productData.img;
            imgElement.alt = productData.name;
            titleElement.textContent = productData.name;
            textElement.textContent = productData.description;
            priceElement.textContent = `Price: €${productData.price}`;
            learnMoreBtn.href = productData.location;
            learnMoreBtn.textContent = `Learn More `
            buyNowBtn.href = productData.checkout;
            buyNowBtn.textContent = `Buy Now`
        
    });
}

// create product cards on page load 
//document.addEventListener('DOMContentLoaded', createProductCards(shopProducts));

// Update product cards on page load
document.addEventListener('DOMContentLoaded', createProductCards);

document.getElementById('addtocart').addEventListener('click', addToCart )

var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", addToCart);





// add to cart 
function addToCart(productId) {
    // find the product with the matching product id 
    // ! The id is hardcoded for testing purposes only 
    const product = shopProducts.find(product => product.id === "1");
    console.log(product)

    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;

    shoppingCart.push(product);
    console.log(shoppingCart)

}

// remove from cart function 
function removeFromCart() {

}

// empty shippting cart 
function emptyCart() {
    shoppingCart = [];
}





