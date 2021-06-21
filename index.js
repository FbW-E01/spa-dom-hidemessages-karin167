const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-button")) {
    e.target.parentElement.remove();
  }
});
