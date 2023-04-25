let number = 1;

console.log(`number = ${number}`);

if (number == 1) {
  console.log("the number is 1 (1)");
}

if (number == 1) {
  console.log("the number is 1 (2)");
} else {
  console.log("the number isn't 1(2)");
}

if (number == 1) {
  console.log("the number is 1 (3)");
} else if (number != 1) {
  console.log("the number isn't 1 (3)");
}

if (number == 1) {
  console.log("the number is 1 (4)");
} else if (number > 1) {
  console.log("the number is bigger then 1 (4)");
} else if (number < 1) {
  console.log("the number is smaller then 1 (4)");
} else {
  console.log("the number is not a number (4)");
}
