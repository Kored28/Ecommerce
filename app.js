const addItems = document.getElementsByClassName('fa-shopping-cart')
const addCart = document.getElementsByClassName('add')

for (var i = 0; i < addItems.length; i++){
    const button = addItems[i]
    button.addEventListener('click', function(event){
        const button = event.target
        const shopItem = button.parentElement.parentElement
        const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        const image = shopItem.getElementsByClassName('shop-item-image')[0].src
        console.log(title, price, image)
        addItemToCart(title, price, image)
    })
}

function addItemToCart(title, price, image) {
    const cartRow = document.createElement('tr')
    cartRow.classList.add('cart-row')
    const cartItems = document.getElementsByClassName('cart-items')
    const cartRowContents = 
     ' <tr  class="cart-row"><td><button class="away"> remove</button></td><td><img src="" ></td><td>${title}</td><td><input type="number" value="1" class="cinput"></td><td class="price">${price}</td></tr>'
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}

const removeItems = document.getElementsByClassName('away')
for (var i = 0; i < removeItems.length; i++) {
    const button = removeItems[i]
    button.addEventListener('click', function(event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

const quantityInputs = document.getElementsByClassName('cinput')
for(var i = 0; i < quantityInputs.length; i++){
    const input = quantityInputs[i]
    input.addEventListener('change', function(event){
        const input = event.target
        if (isNaN(input.value) || input.value <= 0){
            input.value = 1
        }
        updateCartTotal()
    })
}

function updateCartTotal() {
    const cartItemsContainer = document.getElementsByClassName('cart-items')[0]
    const cartRows = cartItemsContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++) {
        const row = cartRows[i]
        const priceCost = row.getElementsByClassName('price')[0]
        const quantityNumber = row.getElementsByClassName('cinput')[0]
        var price = parseFloat(priceCost.innerText.replace('$', ''))
        var quantity = quantityNumber.value
        total = total + ( price * quantity )
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total')[0].innerText = '$' + total
    document.getElementsByClassName('total')[1].innerText = '$' + total
}




