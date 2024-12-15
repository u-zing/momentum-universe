const quotes = [
  {
    quote: "To infinity and beyond!!",
    author: "- Buzz Lightyear",
  },
  {
    quote: "That’s one small step for a man, one giant leap for mankind",
    author: "- Neil Armstrong",
  },
  {
    quote: "Exploration is really the essence of the human spirit",
    author: "- Frank Borman",
  },
  {
    quote:
      "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever",
    author: " - Konstantin Tsiolkovsky",
  },
  {
    quote: "Somewhere, something incredible is waiting to be known",
    author: "- Carl Sagan",
  },
  {
    quote:
      "The Universe is not only queerer than we suppose, but queerer than we can suppose.",
    author: " - J.B.S. Haldane",
  },
  {
    quote: "Shoot for the moon. Even if you miss, you’ll land among the stars.",
    author: "- Norman Vincent Peale",
  },
  {
    quote:
      "Do not look at stars as bright spots only. Try to take in the vastness of the universe.",
    author: "- Maria Mitchell",
  },
  {
    quote:
      "When I first looked back at the Earth, standing on the Moon, I cried.",
    author: "- Alan Shepard",
  },
  {
    quote: "The stars don’t look bigger, but they do look brighter.",
    author: "- Sally Ride",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
