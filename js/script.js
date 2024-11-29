/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// #####################
/***
 * Hi My name is JeniDub and I am aiming for the Exceeds Expectations grade
 */

/*** 
 * `quotes` array 
 * Create an array of objects where each object contains the quote text, author, and various properties
 * Added the additional property-value pairs:
 * - 'tags; for content area
 * - 'year' for year of quote if known
 * - 'citation' for source if known 
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
 * Function: Generate Random RGB
 * This function generates a random RGB value for the background color of the newly generated quote
 * Makes use of the Math.random and Math.floor methods * 255 (the maximum value of the R, G, and B values)
*/

function createRGB() {
  let getRgbValue1 = Math.floor((Math.random() * 255) + 1)
  let getRgbValue2 = Math.floor((Math.random() * 255) + 1)
  let getRgbValue3 = Math.floor((Math.random() * 255) + 1)

  let randomRgb = `rgb(${getRgbValue1}, ${getRgbValue2}, ${getRgbValue3})`
  return randomRgb
}

/***
 * `getRandomQuote` function
 * Capture a random selection from the quotes array of objects for display
***/
function getRandomQuote() {
  let randomIndex = Infinity

  // Ensure that the same quote is not shown consecutively
  // Conditional: check if the randomIndex has already been used
  // or if randomValue is the initial value of Infinity
  while (randomIndex === lastIndex || randomIndex === Infinity) {
    randomIndex = Math.floor(Math.random() * quotes.length)
  }
  
  // Update the lastIndex for the next iteration
  lastIndex = randomIndex
  return quotes[randomIndex]
}

/***
 * `printQuote` function
 * Using the randomly selected quote object from getRandomQuote(),
 * create the HTML markup per the instructions list on Treehouse.
 * After the HTML has been generated, add the markup to ID #quote-box 
 * and update the page background color
***/
function printQuote() {
  setInterval(() => {
    let displayQuote = getRandomQuote()

    let html = `
      <p class="quote">${displayQuote.quote}</p>
      <p class="source">${displayQuote.source}
    `
  
    if (displayQuote.citation) {
      html += `<span class="citation">${displayQuote.citation}</span>`
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
  }, 1000)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);