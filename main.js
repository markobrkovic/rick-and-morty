import "./style.css";
import { createElement } from "./lib/elements";
import createCard from "./components/createCard";

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
      createCard({
        name: "Morty",
        location: "Earth",
        status: "Ded",
        race: "Human",
        imageOfCharacter:
          " https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png",
      }),
      createCard({
        name: "Rick",
        location: "Uranus",
        status: "Ded",
        race: "Human",
        imageOfCharacter:
          "https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
      }),
      createCard({
        name: "Picklee Rick",
        location: "The Sewers",
        status: "Alive",
        race: "Pickle",
        imageOfCharacter:
          "https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
