function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#instructions");
  let apiKey = "3et61975bb6d4a4foabfddbded4a0a8e";
  let prompt = `Generate a haiku about ${instructions.value}.`;
  let context =
    "You are a creator of haikus.Generate a haiku and display it in three separate lines. Each line should be on its own line in the output, following the traditional haiku structure of 5 syllables in the first line, 7 syllables in the second, and 5 in the third. Do not combine all lines into one paragraph or sentence. Ensure each line is separated by a newline character (\n) or displayed as a distinct HTML element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let inputElement = document.querySelector("#form");
inputElement.addEventListener("submit", generatePoem);
