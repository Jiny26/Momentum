const quotes = [
{
    quote : "AAAAA",
    author : "aaa"
},
{
    quote : "BBBBB",
    author : "bbb"
},
{
    quote : "CCCCC",
    author : "ccc"
},
{
    quote : "EEEEE",
    author : "eee"
},
{
    quote : "DDDDD",
    author : "ddd"
}
];

const quoteSpan = document.querySelector("#quotes span:first-child");
const authorSpan = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quoteSpan.innerText = todaysQuote.quote;
authorSpan.innerText = todaysQuote.author;