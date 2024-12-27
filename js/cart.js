// display cart items on page load 

document.addEventListener('DOMContentLoaded', displayCartItems);


// function to diplay cart items 
function displayCartItems() {
    // get the cart  div by its id 
    const cartContainer = document.getElementById('shopping-cart-items');
    // get the cart total by its id 
    const cartTotal = document.getElementById('shopping-cart-total');

    cartContainer.innerText = '';
    cartTotal.innerText = '';

    // variable to accumulate total price 
    let totalPrice = 0;

    // loop through shopping cart array 
    shoppingCart.forEach(item => {

        // parse the itme price to a float 
        let itemPrice = parseFloat(item.price);
        // running total to get total price for all items in the cart
        totalPrice += item.price;

        // create a div element 
        const cartItem = document.createElement('div');

        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: €${item.price}</p>
        `;

        // append cart item to cart container 
        cartContainer.appendChild(cartItem);
        // displays the total price of all items in the cart 
        cartTotal.textContent = `Total Price: €${totalPrice.toFixed(2)}`;

    })

}