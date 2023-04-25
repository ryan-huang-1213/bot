let door = true;
let push = false;

let result = null;

if (door || push) {
  result = door || push;
  console.log(`${result}`);
}

let account = true;
let password = true;

if (account && password) {
  result = account && password;
  console.log(`${result}`);
}
