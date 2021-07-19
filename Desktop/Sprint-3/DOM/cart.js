var cart_div = document.getElementById('cart')
let cart_data = JSON.parse(localStorage.getItem('cart_added'))


function appendCart(el) {
        let div = document.createElement('div');
        let image = document.createElement('img')
        image.src = el.image;
        let j_brand = document.createElement('p')
        j_brand.textContent = el.brand
        let j_price = document.createElement('p')
    j_price.textContent = el.price
    
    div.append(image, j_brand, j_price)
    cart_div.append(div)

}

function showAdded() {
    let cart_data = JSON.parse(localStorage.getItem('cart_added'))
    cart_div.innerHTML = null;
    cart_data.forEach(function (el) {
        appendCart(el)
    })
}
showAdded() 