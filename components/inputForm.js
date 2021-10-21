import { createElement } from "../lib/elements";
import style from "./createInputForm.module.css";

export default function createInputForm(onSubmit) {
  const inputElement = createElement("input", {
    className: style.searchBox,
    placeholder: "Character name",
  });
  const submitButton = createElement("button", {
    className: style.btn,
    textContent: "Search",
  });

  const formElement = createElement(
    "form",
    {
      className: style.formBox,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(inputElement.value);
      },
    },
    [inputElement, submitButton]
  );

  return formElement;
}
