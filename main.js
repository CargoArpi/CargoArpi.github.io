function validateForm() {
    let price = 1000
    let amountInput = document.querySelector("#topamount")
    let showamount = document.querySelector("h2.showamount")
    let amountNumber = parseInt(amountInput.value)
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber
    if (amountNumber > 10) {
        alert("Maximum 10 hambit vehetsz")
    } else if (amountNumber < 1) {
        alert("Minimum egy hambit venned kéne")
    } else {
        let amount = amountNumber * price
        showamount.innerHTML = amount
    }
}

