import "./style.css";
import { createElement } from "./lib/elements";
import createCard from "./components/createCard";

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

  // const characters = [
  //   {
  //     name: "Morty",
  //     location: "Earth",
  //     status: "Ded",
  //     species: "Human",
  //     image: " https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png",
  //   },
  //   {
  //     name: "Rick",
  //     location: "Uranus",
  //     status: "Ded",
  //     species: "Human",
  //     image:
  //       "https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
  //   },
  //   {
  //     name: "Picklee Rick",
  //     location: "The Sewers",
  //     status: "Alive",
  //     species: "Pickle",
  //     image:
  //       "https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
  //   },
  // ];

  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=2"
  );
  const body = await response.json();
  console.log(body.results);

  const createCharacterCards = body.results.map(function (character) {
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
