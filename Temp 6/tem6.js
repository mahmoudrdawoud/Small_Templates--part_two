let tab = Array.from(document.querySelectorAll(".tabs li"));

let content = Array.from(document.querySelectorAll(".content div"));

tab.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tab.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });

  ele.addEventListener("click", function (e) {
    content.forEach((element) => {
      element.style.display = "none";
    });
    console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
