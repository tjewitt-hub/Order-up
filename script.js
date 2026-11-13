console.log("Hello, World from script.js!");

const tags = ["vegan", "spicy", "late night"];
const prices = [3.0, 4.5, 5.5, 6.25, 9.0];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;
