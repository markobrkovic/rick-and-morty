import "./style.css";
import { createElement } from "./lib/elements";
import createCard from "./components/createCard";
import fetchData from "./components/fetchData";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement(
    "header",
    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "The Rick and Morty API",
      }),
    ]
  );

  const characters = await fetchData(
    "https://rickandmortyapi.com/api/character?page=2"
  );

  console.log(characters);
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
