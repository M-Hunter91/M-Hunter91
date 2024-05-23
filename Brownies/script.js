let multiplier = 0;

function main() {
    multiplier = document.getElementById("Quantity").value
    let ingredient_1 = document.getElementById("ingredient_1")
    let ingredient_2 = document.getElementById("ingredient_2")
    let ingredient_3 = document.getElementById("ingredient_3")
    let ingredient_4 = document.getElementById("ingredient_4")
    let ingredient_5 = document.getElementById("ingredient_5")
    let ingredient_6 = document.getElementById("ingredient_6")

    ingredient_1.innerText = multiplier * 175 //add quantity here
    ingredient_2.innerText = multiplier * 300
    ingredient_3.innerText = multiplier * 300
    ingredient_4.innerText = multiplier * 4
    ingredient_5.innerText = multiplier * 200
    ingredient_6.innerText = multiplier * 25
}
window.onload = function() {
    main()
}
document.getElementById("Quantity").addEventListener("change", function(){main()})
