import { createElement } from "../lib/elements.js";
import style from "./createCard.module.css";

export default function createCard({
  name: characterName,
  location: lastLocation,
  status,
  image: imageOfCharacter,
}) {
  const card = createElement(
    "article",
    {
      className: style.characterCard,
    },
    [
      createElement("img", {
        className: style.characterImage,
        textContent: characterName,
        src: imageOfCharacter,
      }),
      createElement(
        "section",
        {
          className: style.characterInfo,
        },
        [
          createElement("h2", {
            className: style.characterName,
            textContent: characterName,
          }),
          createElement("div", {
            className: style.circleStatus,
          }),
          createElement("p", {
            className: style.statusText,
            textContent: status,
          }),
          createElement("p", {
            textContent: `Last known location: ${lastLocation}`,
          }),
        ]
      ),
    ]
  );

  return card;
}
