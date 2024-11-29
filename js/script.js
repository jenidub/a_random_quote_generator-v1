/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
quotes = [
  {
    quote: "Give the world the best you have, and it may never be enough. Give the world the best you've got anyway.", 
    source: "Mother Teresa",
    citation: "Do It Anyway Poem",
    tags: "Religion"
  },
  {
    quote: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud... It always protects, always trusts, always hopes, always perseveres.",
    source: "1 Corinthians 13",
    citation: "The Bible"
  },
  {
    quote: "My mother had a saying: 'Kamala, you may be the first to do many things, but make sure you're not the last.",
    source: "Vice President Kamala Harris",
    tags: "Politics",
  },
  {
    quote: "“The time is always right to do what is right.”",
    source: "Dr. Martin Luther King, Jr.",
    citation: "Oberlin College",
    year: "1965"
  },
  {
    quote: "Programming isn’t about what you know; it’s about what you can figure out.",
    source: "Chris Pine",
    citation: "Learn to Program",
    tags: "Learning Code"
  },
]

let lastIndex

/*** 
 * Exceeds Activity: Generate Random RGB
*/

function createRGB() {
  let randomRgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  return randomRgb
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomIndex = Infinity
  while (randomIndex === lastIndex || randomIndex === Infinity) {
    randomIndex = Math.floor(Math.random() * quotes.length)
  }
  lastIndex = randomIndex
  return quotes[randomIndex]
}

/***
 * `printQuote` function
***/
function printQuote() {
  setInterval(() => {
    let displayQuote = getRandomQuote()

    let html = `
      <p class="quote">${displayQuote.quote}</p>
      <p class="source">${displayQuote.source}
    `
  
    if (displayQuote.citation) {
      html += `<span class="citation"> ${displayQuote.citation}</span>`
    }
  
    if (displayQuote.year) {
      html += `<span class="year"> (${displayQuote.year}) </span>`
    }
  
    if (displayQuote.tags) {
      html += `<span class="tags"> [Category: ${displayQuote.tags}]</span>`
    }
  
    html += `</p>`
  
    document.getElementById('quote-box').innerHTML = html;
    document.querySelector("body").style.backgroundColor = createRGB()
  }, 10000)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);