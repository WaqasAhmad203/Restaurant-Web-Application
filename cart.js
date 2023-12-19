function addToCart(foodName, price) {
    // Create a new div for the item
    var newItem = document.createElement('div');
    newItem.textContent = foodName + ' - $' + price;
  
    // Append the new item to the cart
    var cart = document.getElementById('cart');
    cart.appendChild(newItem);
  
    // Update the total price
    updateTotal(price);
  }
  var totalPrice = 0;

  function updateTotal(price) {
    totalPrice += price;
  
    // Update the total element in your HTML
    var totalElement = document.getElementById('total');
    totalElement.textContent = 'Total: Rs.' + totalPrice.toFixed(2);
  } 