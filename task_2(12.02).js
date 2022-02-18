const cartItem = {
    render(good) {
        return `<div class = 'good'>
        <div><b>Наименование</b>: ${good.product_name}</div>
        <div><b>Цена за шт.</b>: ${good.price}</div>
        <div><b>Количество</b>: ${good.quantity}</div>
        <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
    </div>`;
    }

}
const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 1,
            product_name: 'monitor',
            price: 300,
            quantity: 3
        },
        {
            id_product: 2,
            product_name: 'mouse',
            price: 30,
            quantity: 6
        },
        {
            id_product: 3,
            product_name: 'video card',
            price: 350,
            quantity: 5
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock
                .insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function(price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    
};
cart.init();
