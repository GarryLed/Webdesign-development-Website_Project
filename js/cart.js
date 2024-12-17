// function display cart items 

document.addEventListener('DOMContentLoaded', displayCartItems);


function displayCartItems() {
    const cartContainer = document.getElementById('shopping-cart-items');
    const cartTotal = document.getElementById('shopping-cart-total');

    //localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


    console.log(shoppingCart)

    console.log('inside cart itmes')

    cartContainer.innerText = '';
    cartTotal.innerText = '';

    console.log('Displaying cart items:', shoppingCart);

    // variable to accumulate total price 
    let totalPrice = 0;

    // loop through shopping cart array 
    shoppingCart.forEach(item => {

        let itemPrice = parseFloat(item.price);
        console.log(`price: ${itemPrice}`)
        totalPrice += item.price;
        console.log(`total price: ${totalPrice}`)

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
        `;

        cartContainer.appendChild(cartItem);



        cartTotal.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    })

}