const logo = document.querySelectorAll("#logo path");
console.log("Penis");
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
