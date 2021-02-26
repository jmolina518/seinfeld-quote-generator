const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://seinfeld-quotes.herokuapp.com/random', config)
    .then((res) => res.json())
    .then((data) => {
      quoteEl.innerHTML = data.quote
      authorEl.innerHTML = data.author
    })
}
