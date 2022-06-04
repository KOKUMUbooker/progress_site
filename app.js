const modal = document.querySelector("#myModal");
const card = document.querySelector("#card");
const btn = document.querySelector("#btn");

card.addEventListener("click", function () {
  modal.style.display = "flex";
});
btn.addEventListener("click", function () {
  modal.style.display = "none";
});
