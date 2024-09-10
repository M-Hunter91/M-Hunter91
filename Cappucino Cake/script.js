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
    let ingredient_8 = document.getElementById("ingredient_8")
    let ingredient_9 = document.getElementById("ingredient_9")
    let ingredient_10 = document.getElementById("ingredient_10")
    let ingredient_11 = document.getElementById("ingredient_11")

    ingredient_1.innerText = multiplier * 225 //add quantity here
    ingredient_2.innerText = multiplier * 1
    ingredient_3.innerText = multiplier * 1
    ingredient_4.innerText = multiplier * 225
    ingredient_5.innerText = multiplier * 225
    ingredient_6.innerText = multiplier * 4
    ingredient_7.innerText = multiplier * 3
    ingredient_8.innerText = multiplier * 115
    ingredient_9.innerText = multiplier * 55
    ingredient_10.innerText = multiplier * 3
    ingredient_11.innerText = multiplier * 175
}
window.onload = function() {
    main()
}
document.getElementById("Quantity").addEventListener("change", function(){main()})
