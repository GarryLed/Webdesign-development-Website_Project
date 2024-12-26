// checkout.js
// get shopping cart items from local storage 
const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];

var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

// display order summary on page load 
document.addEventListener('DOMContentLoaded', displayOrderSummary);

// display order summary 
function displayOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');

    orderSummary.innerHTML = '';

    let totalPrice = 0;

    shoppingCart.forEach(item => {
        // calculate total price 
        totalPrice += parseFloat(item.price);

        // create a cart item element 
        const cartItem = document.createElement('div');
        cartItem.classList.add('d-flex', 'justify-content-between', 'mb-3', 'p-2');

        cartItem.style.border = '1px solid #ddd'
        cartItem.style.borderRadius = '0.5em'
        cartItem.innerHTML = `
        <div>
            <h5>${item.name}</h5>
            <p class="text-muted">€${item.price}</p>
        </div>
        
        `;
        orderSummary.appendChild(cartItem);
    });

    // update price 
    orderTotal.textContent = `€${totalPrice.toFixed(2)}`;
}



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