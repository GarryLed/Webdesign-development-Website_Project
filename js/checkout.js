// checkout.js
// display order summary on page load 
document.addEventListener('DOMContentLoaded', displayOrderSummary);

// get shopping cart items from local storage 
const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];

var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

// display order summary function that displays all itmes in the shopping cart 
function displayOrderSummary() {
    // get an element by its id for order summary container 
    const orderSummary = document.getElementById('order-summary');
    // get element by its id for order total 
    const orderTotal = document.getElementById('order-total');

    orderSummary.innerHTML = '';

    // variable for running total 
    let totalPrice = 0;

    // loop through the shopping cart 
    shoppingCart.forEach(item => {
        // parse item price and add to total price 
        totalPrice += parseFloat(item.price);

        // create a cart item element 
        const cartItem = document.createElement('div');
        // using bootstrap classes here 
        cartItem.classList.add('d-flex', 'justify-content-between', 'mb-3', 'p-2');
        // styling the cart item div 
        cartItem.style.border = '1px solid #ddd'
        cartItem.style.borderRadius = '0.5em'
        cartItem.innerHTML = `
        <div>
            <h5>${item.name}</h5>
            <p class="text-muted">€${item.price}</p>
        </div>
        
        `;
        // append a cart item to the order summary 
        orderSummary.appendChild(cartItem);
    });

    // display the total price 
    orderTotal.textContent = `€${totalPrice.toFixed(2)}`;
}

//============= Pre existing JavaScript for payments ================

var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

var loggedin = localStorage.getItem('loggedIn');
if (loggedin == 0) {
    window.location.href = "login.html"; // redirect to login page
}
// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber = document.getElementById('cardNumber').value;
    var cardcvv = document.getElementById('cardCvv').value;

    if (cardnumber == "1234 5678 9102 3456" && cardcvv == "123") {
        alert("Payment success");
        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        element.classList.add("d-none"); // bootstrap hide
        var element = document.getElementById("payment-success");
        element.style.display = 'block';
        element.classList.remove("d-none"); // bootstrap hide
        // now set cart total to zero
        var total = 0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout', total);

        // empty cart after successful purchass 
        localStorage.setItem('shopping-cart', JSON.stringify([]));
        console.log("Cart emptied!");
        // code was refactored to display success or failure messages 
        // depending on the user input 
    } else {
        alert("Payment failure");
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        element.classList.remove("d-none");

    }
    return false;
})