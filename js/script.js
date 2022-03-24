/*** 
 * `quotes` array 
***/
let quotes = [
  {
    'quote': 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    'source': 'The Fox',
    'citation': 'The Little Prince'
  },
  {
    'quote': 'The horizon of many people is a circle with zero radius which they call their point of view.',
    'source': 'Albert Einstein'
  },
  {
    'quote': 'And, when you want something, all the universe conspires in helping you to achieve it.',
    'source': 'Paulo Coelho'
  },
  {
    'quote': 'We accept the love we think we deserve',
    'source': 'Stephen Chbosky'
  },
  {
    'quote': 'Life is either a daring adventure or nothing.',
    'source': 'Helen Keller',
    'year': 1956
  }
]

/***
 * `getRandomQuote` function generates a random number and returns a random quote from the quotes array
***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length)
  return quotes[random]
}

/***
 * `printQuote` function displays a properly formatted quote on the webpage
***/
function printQuote() {
  let randomQuote = getRandomQuote()
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`

  //checks if a citation is provided
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  //checks if a year is provided
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }

  html += `</p>`

  return document.getElementById('quote-box').innerHTML = html
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
