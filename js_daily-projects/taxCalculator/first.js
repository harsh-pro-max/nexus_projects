const button = document.querySelector("button");

button.addEventListener("click", (e) => {

    e.preventDefault();

    // income read inside event
    const incomeValue = Number(document.querySelector("#income").value);

    let tax = 0;

    if (incomeValue <= 250000) {
        tax = 0;
    }
    else if (incomeValue <= 500000) {
        tax = (incomeValue - 250000) * 0.05;
    }
    else if (incomeValue <= 1000000) {
        tax = 12500 + (incomeValue - 500000) * 0.20;
    }
    else {
        tax = 112500 + (incomeValue - 1000000) * 0.30;
    }

    const resultBox = document.querySelector("#result");

    resultBox.textContent = `Your income tax is ₹${tax}`;
});