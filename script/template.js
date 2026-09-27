function templateMenuBurger(i) {
    return /*html*/`
            <article class="food">
                 <img src="${myBurger[i].img}" alt="">
                 <div class="food-details">
                    <div class="food-details-titleprice-wrapper">
                        <h3>${myBurger[i].name}</h3>
                         <p class="price">${myBurger[i].price.toFixed(2)}€</p>
                     </div>
                    <p class="detail">${myBurger[i].description}</p>
                    <button onclick="addOrderBurger(${i})">add to basket</button>
                 </div>
            </article>
    `
}

function templateMenuPizza(i) {
    return /*html*/`
            <article class="food">
                 <img src="${myPizza[i].img}" alt="">
                 <div class="food-details">
                    <div class="food-details-titleprice-wrapper">
                        <h3>${myPizza[i].name}</h3>
                         <p class="price">${myPizza[i].price.toFixed(2)}€</p>
                     </div>
                    <p class="detail">${myPizza[i].description}</p>
                    <button onclick="addOrderPizza(${i})">add to basket</button>
                 </div>
            </article>
    `
}

function templateMenuSalad(i) {
    return /*html*/`
            <article class="food">
                 <img src="${mySalad[i].img}" alt="">
                 <div class="food-details">
                    <div class="food-details-titleprice-wrapper">
                        <h3>${mySalad[i].name}</h3>
                         <p class="price">${mySalad[i].price.toFixed(2)}€</p>
                     </div>
                    <p class="detail">${mySalad[i].description}</p>
                    <button onclick="addOrderSalad(${i})">add to basket</button>
                 </div>
            </article>
    `
}

function templateBasketOrder(i) {
    return /*html*/`
                    <div  class="order">
                        <p>${myOrder[i].amount}x ${myOrder[i].name}</p>
                        <div class="amount-price-wrapper">
                            <button onclick="removeOrderAmount(${i})"><img src="./assets/icon/delete.svg" alt=""></button>
                            <span>${myOrder[i].amount}</span>
                            <button onclick="addOrderAmount(${i})"><img src="./assets/icon/+.svg" alt=""></button>
                        </div>
                        <span>${myOrder[i].price}€</span>
                    </div>
    `
}