document.addEventListener("DOMContentLoaded", () => {
  const loadQuoteBtn = document.getElementById("loadQuote");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  loadQuoteBtn.addEventListener("click", () => {
    fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = `"${data.quote}"`;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => {
      quoteText.textContent = "An error occurred while fetching the quote.";
      quoteAuthor.textContent = "";
      console.error("Error fetching quote:", error);
    });
  });
});
