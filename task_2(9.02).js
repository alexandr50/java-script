function Item(product, price, quantity, discount=0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalprice = function() {
        if (this.discounts != 0) {
            return this.price -  this.price * this.discount / 100;
        }
        else {
            return this.price;
        }
    }
    this.showMyChart = function() {
        return `${this.product} (количество: ${this.quantity})`;
    }
}

let shoppingCart = []

shoppingCart.push(
    new Item('monitor', 300, 3)
);
shoppingCart.push(
    new Item('mouse', 30, 10, 10)
);
shoppingCart.push(
    new Item('video card', 350, 5)
);
shoppingCart.push(
    new Item('keyboard', 50, 20, 5)
);
console.log(shoppingCart)

function finalChart(shoppingCart) {
    console.log('Ваш заказ: ');
    shoppingCart.forEach(val => {
    console.log (`${val.showMyChart()}.
    Цена с учетом скидки: ${val.finalprice()}.
    Стоимость позиции: ${val.quantity * val.finalprice()}`);
    });
}
finalChart(shoppingCart);

function finalCost(shoppingCart) {
    return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + (shoppingCart.finalprice() * shoppingCart.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalCost(shoppingCart)).toUpperCase());
