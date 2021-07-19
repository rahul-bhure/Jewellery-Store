// const products_div = document.getElementById('products');

function createProduct(img,b,p) {
    this.image = img;
    this.brand = b;
    this.price = p;

}

let j1 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/f/pf04n209w_1.jpg?rnd=20200526195200', 'Peora', '7490');
let j2 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfzaveri2257_1_3d273a37.jpg?rnd=20200526195200', 'Zaveri Pearls', '3000')
let j3 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/8/9/8907617972381_00.jpg?rnd=20200526195200', 'Voylla', '2400')
let j4 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/i/likhajewellery_e40130_1_8852232b.jpg?rnd=20200526195200', 'Nyka Fashion', '7920')
let j5 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfzaveri2249_1_0f561d0c.jpg?rnd=20200526195200', 'Zaveri Pearls', '5000');
let j6 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/f/pf04n144_1.jpg?rnd=20200526195200','Peora','6990')
let j7 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/karat-11013707_1_9eb43489.jpg?rnd=20200526195200', 'KaratCart', '6820')
let j8 = new createProduct('https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/g/mgs-pr-10031_3.jpg?rnd=20200526195200','Priyassi','5390')




const product_arr = [];
product_arr.push(j1, j2, j3, j4, j5,j6,j7,j8);

if (localStorage.getItem('product_arr') == null) {
    localStorage.setItem('product_arr',JSON.stringify(product_arr))
}

function showProducts(d) {
    const products_div = document.getElementById('products');
    let arr = d

    products_div.innerHTML = null;

    arr.forEach( function (el) {
        let div = document.createElement('div');
        let image = document.createElement('img')
        image.src = el.image;
        let j_brand = document.createElement('p')
        j_brand.textContent = el.brand
        let j_price = document.createElement('p')
        j_price.textContent = el.price

        let btn = document.createElement('button')
        btn.textContent = 'Add to Cart'
        btn.addEventListener('click', function () {
            addToCart(el)
        })
        image.addEventListener('mouseover', function() {
             func1()
            // image.src = 'https://kinclimg3.bluestone.com/f_webp/static/resources/themes/bluestone/images/sales/july2021/dbp-widget.v3.jpg'
        })
         image.addEventListener('mouseout', function() {
             func2()
            // image.src = 'https://kinclimg3.bluestone.com/f_webp/static/resources/themes/bluestone/images/sales/july2021/dbp-widget.v3.jpg'
         })
        
        
        function func1() {
            image.src = 'https://kinclimg3.bluestone.com/f_webp/static/resources/themes/bluestone/images/sales/july2021/dbp-widget.v3.jpg'
        }
        function func2() {
            image.src = el.image
        }

        div.append(image, j_brand, j_price, btn);

        products_div.append(div)
    })
}
showProducts(JSON.parse(localStorage.getItem('product_arr')))

function addToCart(obj) {

    let cart_arr;
    cart_arr = localStorage.getItem('cart_added');

    if (cart_arr == null) {
        cart_arr = [];
    } else {
        cart_arr = JSON.parse(localStorage.getItem('cart_added'))
       
    }

           cart_arr.push(obj)
            localStorage.setItem('cart_added',JSON.stringify(cart_arr))

    
}