


function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;
    let result = -1;

    switch (fromCurrency) {
        case "VietNam":
            if (toCurrency === "VietNam") {
                result = amount;
                break;
            } else {
                result = amount / 23000;
                break;
            }

        case "USD":
            if (toCurrency === "VietNam") {
                result = amount * 23000;
                break;
            } else {
                result = amount;
                break;
            }
    }
    return result;
}

function showMessage(){
    let message = convertCurrency();
    display_result.innerHTML= message;
}



