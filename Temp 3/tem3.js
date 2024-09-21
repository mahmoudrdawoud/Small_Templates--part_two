let ulli = document.querySelectorAll(".switcher li");

let imags = Array.from(document.images);

ulli.forEach((element) => {
  element.addEventListener("click", remove);
  element.addEventListener("click", show);
});

function remove() {
  ulli.forEach((ele) => {
    ele.classList.remove("active");
    this.classList.add("active");
  });
}

function show() {
  setTimeout(() => {
    imags.forEach((element) => {
      element.style.display = "none";
    });

    document.querySelectorAll(this.dataset.cat).forEach((element) => {
      element.style.display = "block";
    });
  }, 1000);
}
