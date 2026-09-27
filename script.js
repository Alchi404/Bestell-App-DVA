let Sum = 0;

function renderMenu() {
    renderBurger()
    renderPizza()
    renderSalad()
    renderBasket()
}



function renderBurger() {
    const Burger = document.getElementById('menu-burger')
    Burger.innerHTML = "";

    for (let i = 0; i < myBurger.length; i++) {
        Burger.innerHTML += templateMenuBurger(i)
    }
}

function renderPizza() {
    const Pizza = document.getElementById('menu-pizza')
    Pizza.innerHTML = "";

    for (let i = 0; i < myPizza.length; i++) {
        Pizza.innerHTML += templateMenuPizza(i)
    }
}

function renderSalad() {
    const Salad = document.getElementById('menu-salad')
    Salad.innerHTML = "";

    for (let i = 0; i < mySalad.length; i++) {
        Salad.innerHTML += templateMenuSalad(i)
    }
}

function renderBasket() {
    const Order = document.getElementById('basket-order')
    Order.innerHTML = "";

    for (let i = 0; i < myOrder.length; i++) {
        Order.innerHTML += templateBasketOrder(i)
    }
}

function addOrderBurger(i) {
    // let selectetOrder = myBurger[i]
    let Order = { ...myBurger[i], amount: 1 };
    myOrder.push(Order);
    renderBasket()
}

function addOrderPizza(i) {
    // let selectetOrder = myBurger[i]
    let Order = { ...myPizza[i], amount: 1 };
    myOrder.push(Order);
    renderBasket()
}

function addOrderSalad(i) {
    // let selectetOrder = myBurger[i]
    let Order = { ...mySalad[i], amount: 1 };
    myOrder.push(Order);
    renderBasket()
}

function removeOrderAmount(i) {
    myOrder[i].amount--;

    if (myOrder[i].amount === 0) {
        myOrder.splice(i)
    }
    calcSubtotal()
    calcTotal()
    renderBasket()
}

function addOrderAmount(i) {
    myOrder[i].amount++;
    calcSubtotal()
    calcTotal()
    renderBasket()
}

function calcSubtotal() {

        for (let i = 0; i < myOrder.length; i++) {
            Sum += myOrder[i].price
        }
        document.getElementById('Subtotal-price').innerHTML = (Sum.toFixed(2) + "€");
        calcTotal()
}

function calcTotal() {
    let Total = Sum + 5

    if (Total === 5) {
        document.getElementById('Total-price').innerHTML = ("0€");
    } else {
        document.getElementById('Total-price').innerHTML = (Total.toFixed(2) + "€");
    }


}