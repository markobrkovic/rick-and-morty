import { createElement } from "./elements.js";

export function createCard(characterName, lastLocation, status) {
  const card = createElement(
    "div",
    {
      className: "characterCards",
    },
    [
      createElement("h2", {
        className: "characterName",
        textContent: characterName,
      }),
      createElement("p", {
        textContent: `Last known location: ${lastLocation}`,
      }),
      createElement("i", {
        className: "status",
        textContent: status,
      }),
    ]
  );

  return card;
}
