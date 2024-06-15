let multiplier = 0

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
    let ingredient_12 = document.getElementById("ingredient_12")
    let ingredient_13 = document.getElementById("ingredient_13")
    let ingredient_14 = document.getElementById("ingredient_14")
    let ingredient_15 = document.getElementById("ingredient_15")
    let ingredient_16 = document.getElementById("ingredient_16")

    ingredient_1.innerText = multiplier * 0.5 //add quantity here
    ingredient_2.innerText = multiplier * 0.5 //add quantity here
    ingredient_3.innerText = multiplier * 0.5 //add quantity here
    ingredient_4.innerText = multiplier * 1 //add quantity here
    ingredient_5.innerText = multiplier * 1 //add quantity here
    ingredient_6.innerText = multiplier * 0.5 //add quantity here
    ingredient_7.innerText = multiplier * 1 //add quantity here
    ingredient_8.innerText = multiplier * 0.5 //add quantity here
    ingredient_9.innerText = multiplier * 1.5 //add quantity here
    ingredient_10.innerText = multiplier * 1 //add quantity here
    ingredient_11.innerText = multiplier * 175 
    ingredient_12.innerText = multiplier * 300
    ingredient_13.innerText = multiplier * 300
    ingredient_14.innerText = multiplier * 4
    ingredient_15.innerText = multiplier * 200
    ingredient_16.innerText = multiplier * 25


    
}
window.onload = function() {
    main()
}
document.getElementById("Quantity").addEventListener("change", function(){main()})
