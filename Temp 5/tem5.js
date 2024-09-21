let arr = ["Mahmoud", "Riyad", "Dawoud"];

let random = "";

random = arr[Math.floor(Math.random() * arr.length)];
// random = arr[Math.trunc(Math.random() * arr.length)];

console.log(random);
