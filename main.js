function validateForm() {

    let price = 1000
    let amountInput = document.querySelector("#topamount")
    let amountNumber = parseInt(amountInput.value)
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber
    showPrice(price, amountNumber)
}
function showPrice(price, amountNumber) {

    let showamount = document.querySelector("h2.showamount")
    if (amountNumber > 10) {
        alert("Maximum 10 hambit vehetsz")
    } else if (amountNumber < 1) {
        alert("Minimum egy hambit venned kéne")
    } else {

        let amount = amountNumber * price
        if (amount < 5000) {
            amount += 200

        } showamount.innerHTML = amount
    }
}

let toppings = ["Szalonna", "Hagyma", "Tükörtojás", "Zongoralakk"]
let toppingSelect = document.querySelector("#bottominput")
let i = 0
while (i < toppings.length) {
    let option = document.createElement("option")
    option.value = i
    option.innerHTML = toppings[i]
    toppingSelect.appendChild(option)
    i++
}
