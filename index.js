const convertBtn = document.querySelector(".convert-btn")


convertBtn.addEventListener("click", convertCurrency)


async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");
    const apiKey = 'cur_live_7MnOlSA3V6Uu5n3osjIzXYpSApamiLN9caJtRp4g';
    const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const conversionRate = data.data[toCurrency].value; // Access the conversion rate correctly
            const convertedAmount = (amount * conversionRate).toFixed(2);

            resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultElement.textContent = "Error fetching conversion rates.";
        }
    } catch (error) {
        resultElement.textContent = "An error occurred: " + error.message;
    }
}
