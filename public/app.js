const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");

bar.addEventListener("click", (e) => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
