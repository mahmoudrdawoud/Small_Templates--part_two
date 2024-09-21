let generate = document.querySelector(".generate");
let serial = document.querySelector(".serial");

generate.onclick = function () {
  let num_char =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random_ele = "";
  let count = 10;

  for (let i = 0; i < count; i++) {
    random_ele += num_char[Math.floor(Math.random() * num_char.length)];
  }

  serial.innerHTML = random_ele;
};
