let multiplier = 0;

function main() {
    multiplier = document.getElementById("Quantity").value
    let ingredient_1 = document.getElementById("ingredient_1")

    ingredient_1.innerText = multiplier * 5 //add quantity here
}
window.onload = function() {
    main()
}
document.getElementById("Quantity").addEventListener("change", function(){main()})
