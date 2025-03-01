function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A world of dew...",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let inputElement = document.querySelector("#form");
inputElement.addEventListener("submit", generatePoem);
