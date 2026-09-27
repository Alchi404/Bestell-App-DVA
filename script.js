let Sum = 0;
let dialogRef = document.getElementById("Order-Confirmed");

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

    calcSubtotal()
}

// function addOrderBurger(i) {
//     let Order = { ...myBurger[i], amount: 1 };
//     myOrder.push(Order);
//     renderBasket()
// }

function addOrderBurger(i) {
    let checkOrder = myOrder.findIndex(item => item.name === myBurger[i].name)

    if (checkOrder !== -1) {
        myOrder[checkOrder].amount++;
        renderBasket()
    } else {
        let Order = { ...myBurger[i], amount: 1 };
        myOrder.push(Order);
        renderBasket()
    }
}

function addOrderPizza(i) {
    let checkOrder = myOrder.findIndex(item => item.name === myPizza[i].name)

    if (checkOrder !== -1) {
        myOrder[checkOrder].amount++;
        renderBasket()
    } else {
        let Order = { ...myPizza[i], amount: 1 };
        myOrder.push(Order);
        renderBasket()
    }
}

function addOrderSalad(i) {
    let checkOrder = myOrder.findIndex(item => item.name === mySalad[i].name)

    if (checkOrder !== -1) {
        myOrder[checkOrder].amount++;
        renderBasket()
    } else {
        let Order = { ...mySalad[i], amount: 1 };
        myOrder.push(Order);
        renderBasket()
    }
}


function removeOrderAmount(i) {
    myOrder[i].amount--;

    if (myOrder[i].amount === 0) {
        myOrder.splice(i, 1)
    }
    renderBasket()
}

function addOrderAmount(i) {
    myOrder[i].amount++;
    renderBasket()
}

function calcSubtotal() {
    let Sum = 0
    for (let i = 0; i < myOrder.length; i++) {
        if (myOrder[i].amount > 0) {
            Sum += myOrder[i].price * myOrder[i].amount;
        }
    }

    document.getElementById('Total-price').innerHTML = (Sum.toFixed(2) + "€");
    document.getElementById('buy-button').innerHTML = "Buy now (" + (Sum.toFixed(2) + "€)");
}

function orderConfirmed() {
    dialogRef.showModal();
    myOrder = []
    renderBasket()
}

function closeDialog() {
    dialogRef.close();
}

function toggleMobileBasket() {
    let basket = document.getElementById('basket');
    basket.classList.toggle('basket-hidden');
}