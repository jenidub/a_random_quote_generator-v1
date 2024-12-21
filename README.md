# Random Quote Generator

A simple web application that generates random quotes with additional features like dynamic background color changes and metadata display. Built using **HTML**, **CSS**, and **JavaScript**.

## Features

- Display random quotes from a predefined collection.
- Includes author, citation, year, and category (if available).
- Prevents showing the same quote consecutively.
- Dynamic background color changes with each new quote.
- User-friendly design with responsive layout.

## Project Structure

The project consists of the following files:

- **`index.html`**: The main HTML structure of the webpage.
- **`styles.css`**: Contains all the styles for the application.
- **`script.js`**: Handles the random quote generation and dynamic behaviors.

## How It Works

1. **Quotes Collection**: 
   - Quotes are stored as an array of objects in `script.js`.
   - Each object includes properties like `quote`, `source`, `citation`, `year`, and `tags`.

2. **Random Quote Generation**:
   - The `getRandomQuote()` function selects a random quote object, ensuring no consecutive repetition.
   - The `printQuote()` function updates the quote display and changes the background color dynamically.

3. **Dynamic Updates**:
   - A new quote is generated and displayed when the "Show another quote" button is clicked.
   - Background color changes randomly with each quote.

## Credits
- The project was created as part of the **Team Treehouse Techdegree Program**
- The README file was created using **ChatGPT**
