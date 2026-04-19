// Write your solution in this file!

// GLOBAL SCOPE
const burgers = ["Hamburger", "Cheeseburger"]
let featuredDrink = "Strawberry Milkshake"

// FUNCTION SCOPE
function addBurger() {
    const newBurger  = "Flatburger"
    burgers.push(newBurger)
}

// BLOCK SCOPE
if(true) {
    const anotherNewBurger = "Maple Bacon Burger"
    burgers.push(anotherNewBurger)
}

function changeFeaturedDrink() {
    featuredDrink = "The JavaShake"
}

module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
}