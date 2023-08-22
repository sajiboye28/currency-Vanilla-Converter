function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    let rate = 0;

    if (currency === "$") {
        // Conversion rate for dollar to naira
        rate = 460.53;
    } else if (currency === "$ (Black-market)") {
        // Conversion rate for dollar black market to naira
        rate = 742.00;
    } else if (currency === "£") {
        // Conversion rate for pounds to naira
        rate = 572.48;
    } else if (currency === "£ (Black-market)") {
        // Conversion rate for pounds to naira
        rate = 919.00;
    } else if (currency === "€") {
        // Conversion rate for euro to naira
        rate = 505.59;
    }else if (currency === "€ (Black-market)") {
        // Conversion rate for euro to naira
        rate = 802.00;
    }
    const result = amount * rate;

    document.getElementById("result").innerHTML = `${amount}${currency} is equivalent to ${result.toFixed(2)}NGN`;
}


