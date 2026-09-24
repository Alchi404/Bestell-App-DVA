
function renderMenu() {
    renderBurger()
    renderPizza()
    renderSalad()
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