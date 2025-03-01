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
    "You are a haiku writer. Your task is to write haikus in basic HTML. Use the submitted word as the topic of your haiku. Wrap each line in a <div> tag (or <p> tag, if preferred), but ensure that the HTML code is properly formatted so that it is rendered correctly. Do not include any extra code characters such as html, or backticks ( ). Only the haiku text should be visible, with each line wrapped in its own tag.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  instructions.value = "";
}

let inputElement = document.querySelector("#form");
inputElement.addEventListener("submit", generatePoem);
