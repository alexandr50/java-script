function countBasketPrice() {
    let basket = [
        {
            product: 'monitor',
            price: 50,
            count: 3
        },
        {
            product: 'mother board',
            price: 60,
            count: 5
        },
        {
            product: 'mouse',
            price: 5,
            count: 7
        },
        {
            product: 'video card',
            price: 30,
            count: 4
        }
    ];
    var sum = 0 // Сумма стоимости товаров
    var amount = 0 // Количество товаров
    var name = 'В корзине находятся следующие товары '
    for (var item of basket) {
        sum += (item.price * item.count)
        amount += item.count
        name += '(' + item.product + ')'
        var q = basket.length

    }
    return 'Всего товаров в корзине:' + q + '.' + name +'.' +
    'Общее количество выбранных товаров: ' + amount + ' шт.' + 
    'Стоимость выбранных товаров: ' + sum + 'руб.'
}

console.log(countBasketPrice())
    



