import { createElement } from "../lib/elements.js";
import style from "./createCard.module.css";

export default function createCard({
  name,
  location,
  status,
  race,
  imageOfCharacter,
}) {
  const card = createElement(
    "article",
    {
      className: style.characterCard,
    },
    [
      createElement("img", {
        className: style.characterImage,
        textContent: name,
        src: imageOfCharacter,
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
            className: style.circleStatus,
          }),
          createElement("p", {
            className: style.statusText,
            textContent: `${status} - ${race}`,
          }),
          createElement("p", {
            textContent: `Last known location: ${location}`,
          }),
        ]
      ),
    ]
  );

  return card;
}
