let multiplier = 0;

function main() {
    multiplier = document.getElementById("Quantity").value
    let ingredient_1 = document.getElementById("ingredient_1")
    let ingredient_2 = document.getElementById("ingredient_2")
    let ingredient_3 = document.getElementById("ingredient_3")
    let ingredient_4 = document.getElementById("ingredient_4")
    let ingredient_5 = document.getElementById("ingredient_5")
    let ingredient_6 = document.getElementById("ingredient_6")
    let ingredient_7 = document.getElementById("ingredient_7")

    ingredient_1.innerText = multiplier * 2 //add quantity here
    ingredient_2.innerText = multiplier * 0.75
    ingredient_3.innerText = multiplier * 1
    ingredient_4.innerText = multiplier * 1
    ingredient_5.innerText = multiplier * 0.125
    ingredient_6.innerText = multiplier * 2
    ingredient_7.innerText = multiplier * 0.5
}
window.onload = function() {
    main()
}
document.getElementById("Quantity").addEventListener("change", function(){main()})
