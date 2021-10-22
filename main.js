import "./style.css";
import { createElement } from "./lib/elements";
import createCard from "./components/createCard";
import { fetchData } from "./components/characters";
import createInputForm from "./components/inputForm";

async function renderApp() {
  const appElement = document.querySelector("#app");

  async function handleSubmit(searchQuery) {
    const searchedCharacter = await fetchData(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );

    let characterCard = searchedCharacter.map(function (character) {
      return createCard(character);
    });
    mainElement.innerHTML = "";
    mainElement.prepend(...characterCard);
  }

  const searchForm = createInputForm(handleSubmit);
  const headerElement = createElement(
    "header",
    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "The Rick and Morty API",
      }),
      searchForm,
    ]
  );

  const characters = await fetchData(
    "https://rickandmortyapi.com/api/character?page=2"
  );

  const createCharacterCards = characters.map(function (character) {
    console.log(characters.results);
    return createCard(character);
  });

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [...createCharacterCards]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
