window.onload = function() {
    let quantityControls = Array.from(document.querySelectorAll('.product__quantity-control'));
    let addButtons = Array.from(document.querySelectorAll('.product__add'));

    quantityControls.forEach(function(control) {
        control.addEventListener('click', function() {
            let oldValue = parseInt(this.parentNode.querySelector('.product__quantity-value').innerText);
            if (this.classList.contains('product__quantity-control_dec')) {
                this.parentNode.querySelector('.product__quantity-value').innerText = Math.max(oldValue - 1, 1);
            } else if (this.classList.contains('product__quantity-control_inc')) {
                this.parentNode.querySelector('.product__quantity-value').innerText = oldValue + 1;
            }
        });
    });

    addButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let product = this.closest('.product');
            let id = product.dataset.id;
            let image = product.querySelector('.product__image').src;
            let count = parseInt(product.querySelector('.product__quantity-value').innerText);
            
            let cartProduct = Array.from(document.querySelectorAll('.cart__product')).find((node) => node.dataset.id === id);
            if (cartProduct) {
                cartProduct.querySelector('.cart__product-count').innerText = parseInt(cartProduct.querySelector('.cart__product-count').innerText) + count;
            } else {
                let cart = document.querySelector('.cart__products');
                let productNode = document.createElement('div');
                productNode.classList.add('cart__product');
                productNode.dataset.id = id;
                productNode.innerHTML = `
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${count}</div>
                `;
                cart.appendChild(productNode);
            }
        });
    });
};
