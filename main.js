import "./style.css";
import { createElement } from "./lib/elements";
import { createCard } from "./lib/createCard";

function renderApp() {
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

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [
      createCard("Morty", "Earth", "Ded"),
      createCard("Rick", "Uranus", "Ded"),
      createCard("Pickle Rick", "Sewers", "alive"),
    ]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
