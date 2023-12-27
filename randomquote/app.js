const quoteHolder = document.getElementById("quoteHolder");
const quoteGenerator = document.getElementById("quoteGenerator");
const authorHolder = document.getElementById("authorHolder");

let randomQuote = () => {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((quote) => {
      quoteHolder.innerText = quote.quote;
      authorHolder.innerText = `~ ${quote.author}`;
    });
};

window.addEventListener("load", randomQuote);
quoteGenerator.addEventListener("click", randomQuote);
