const newArray = new Array(100);

for (let i = 1; i <= 100; i += 20) {
  // Add the next 10 numbers
  newArray.push(...Array.from({ length: 10 }, (_, index) => i + index));
  console.log(Array.from({ length: 10 }, (_, index) => index + i));

  // Add the next 10 numbers in reverse order
  newArray.push(...Array.from({ length: 10 }, (_, index) => i + 19 - index));
}

let myListElement = document.getElementById("container");

newArray.reverse().forEach((value) => {
  // Create a new LI element

  const listItem = document.createElement("div");
  listItem.className = "grid-element";
  // Set the text content of the LI element
  listItem.textContent = `${value}`;
  if (value % 2 !== 0) {
    listItem.style = `background-color: #9c4629`;
  }

  // Append the LI element to the UL
  myListElement.appendChild(listItem);
});

const rollButton = document
  .getElementById("submit")
  .addEventListener("click", onClickRoll);

const scroreSpan = document.getElementById("dice-score");

let diceRollNumber = null;
function onClickRoll() {
  let c = 0;
  const interval = setInterval(() => {
    scroreSpan.innerHTML = getRandomDiceRoll();
    if (c > 10) {
      diceRollNumber = scroreSpan.innerHTML;
      clearInterval(interval);
    }
    c++;
  }, 80);
}
console.log(diceRollNumber);
function getRandomDiceRoll() {
  return Math.ceil(Math.random() * 6);
}

let player1, player2;
