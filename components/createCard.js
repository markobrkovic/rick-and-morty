import { createElement } from "../lib/elements.js";
import style from "./createCard.module.css";

export default function createCard({
  name,
  status,
  species,
  image,
  location,
  episode,
}) {
  function checkStatus(charStatus) {
    if (charStatus === "Alive") {
      return style.alive;
    } else {
      return style.dead;
    }
  }

  const firstEpisode = episode[0];
  const firstEpisodeElement = createElement("p", {
    textContent: "Loading...",
  });
  const card = createElement(
    "article",
    {
      className: style.characterCard,
    },
    [
      createElement("img", {
        className: style.characterImage,
        textContent: name,
        src: image,
        alt: "",
      }),
      createElement(
        "section",
        {
          className: style.characterInfo,
        },
        [
          createElement("h2", {
            className: style.characterName,
            textContent: name,
          }),
          createElement("div", {
            className: checkStatus(status),
          }),
          createElement("p", {
            className: style.statusText,
            textContent: `${status} - ${species}`,
          }),
          createElement("h3", {
            textContent: "Location:",
          }),
          createElement("p", {
            textContent: location.name,
          }),
          createElement("h3", {
            textContent: "Origin location:",
          }),
          createElement("p", {
            textContent: origin.name,
          }),
          firstEpisodeElement,
        ]
      ),
    ]
  );

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      firstEpisodeElement.textContent = body.name;
    });
  return card;
}
