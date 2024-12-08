// shop.js
// generate product cards 


// Array to store all Products 
let shopProducts = [
    {
        id: "1",
        name: "Black Ops 6",
        price: 59.99,
        description: "add description here",
        img: "/images/mw2.jpeg"
    }, 
    {   
        id: "2",
        name: "The Last Of Us",
        price: 69.99,
        description: "add description here",
        img: "/images/tlou.jpeg"
    },
    {
        id: "3",
        name: "Days Gone 2",
        price: 69.99,
        description: "add description here",
        img: "/images/days_gone.jpeg"
    },
    {
        id: "4",
        name: "Modern Warfare 2",
        price: 69.99,
        description: "add description here",
        img: "/images/mw2.jpeg"
    },
    {
        id: "5",
        name: "GTA 5",
        price: 59.99,
        description: "add description here",
        img: "/images/gta5.jpeg"
    },
    {
        id: "6",
        name: "Detroit Become Human",
        price: 59.99,
        description: "add description here",
        img: "/images/detroit.jpeg"
    }, 
    {
        id: "7",
        name: "PS5 Pro",
        price: 799.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    }, 
    {
        id: "8",
        name: "PS5 TLOU Edition",
        price: 699.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    },
    {
        id: "9",
        name: "PS5 Slim",
        price: 599.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    },
    {
        id: "10",
        name: "PS4 Pro",
        price: 599.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    },
    {
        id: "11",
        name: "PS4 TLOU Edition ",
        price: 399.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    },
    {
        id: "12",
        name: "PS4 Slim",
        price: 399.99,
        description: "add description here",
        img: "/images/ps5box.jpeg"
    }, 
    {
        id: "13",
        name: "PS5 Controller",
        price: 99.99,
        description: "add description here",
        img: "/images/controller.jpeg"
    },
    {
        id: "14",
        name: "PS5 Custom Controller",
        price: 299.99,
        description: "add description here",
        img: "/images/customps5controller.jpeg"
    },
    {
        id: "15",
        name: "PS5 Headphones",
        price: 59.99,
        description: "add description here",
        img: "/images/headphones.jpeg"
    },
    {
        id: "16",
        name: "Days Gone 2",
        price: 59.99,
        description: "add description here",
        img: "/images/days_gone.jpeg"
    }
]

// Function to update HTML elements based on product data
function updateProductCards() {
    const productCards = document.querySelectorAll('.card[data-id]');

    productCards.forEach(card => {
        const productId = card.getAttribute('data-id');
        const productData = shopProducts.find(product => product.id === productId);

        if (productData) {
            // Update card content
            const imgElement = card.querySelector('.card-img-top');
            const titleElement = card.querySelector('.card-title');
            const textElement = card.querySelector('.card-text');
            const priceElement = card.querySelector('.price');

            imgElement.src = productData.img;
            imgElement.alt = productData.name;
            titleElement.textContent = productData.name;
            textElement.textContent = productData.description;
            priceElement.textContent = `Price: €${productData.price.toFixed(2)}`;
        }
    });
}

// Update product cards on page load
document.addEventListener('DOMContentLoaded', updateProductCards);

document.getElementById('addtocart').addEventListener('click', addToCart )

var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", addToCart);


function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

