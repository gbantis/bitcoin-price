const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
let currency = "USD"
const priceTag = document.querySelector("h1")
const spanTag = document.querySelector("span")

// function to grab the data from coindesk

const checkPrice = function () {
fetch(url)
    .then(response => response.json())
    .then(data => {
        // data.bpi or data["bpi"]
        priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1)
    })
}

// Run the function
checkPrice()

// loop over every navigation link and add a click event
const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {
        link.addEventListener("click", function() {
        currency = this.getAttribute("data-currency")
        checkPrice()

        navLinks.forEach(link => link.classList.remove("selected"))

        this.classList.add("selected")

        spanTag.innerHTML = currency

    })
})