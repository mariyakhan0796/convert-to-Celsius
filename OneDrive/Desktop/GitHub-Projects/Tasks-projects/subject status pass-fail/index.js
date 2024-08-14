var Mathmarks = prompt("Enter Marks in Math");
Mathmarks = parseFloat(Mathmarks);

var Englishmarks = prompt("Enter Marks in English");
Englishmarks = parseFloat(Englishmarks);


if (Mathmarks >= 33) {
  console.log("Result in Math Pass: ", Mathmarks);
} else {
  console.log("Result in Math Fail: ", Mathmarks);
}

if (Englishmarks >= 33) {
  console.log("Result in English Pass : ", Englishmarks);
} else {
  console.log("Result in English Fail: ", Englishmarks);
}
