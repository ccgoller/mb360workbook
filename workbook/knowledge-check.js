"use strict";

const script = document.querySelector("script[data-knowledge-check]");
const answers = script.dataset.answers.split(",").map(Number);
const questions = Array.from(document.querySelectorAll("section.level2"))
  .filter(section => section.querySelector("ul.task-list"));

if (questions.length !== answers.length || questions.some((section, index) => {
  const count = section.querySelectorAll("ul.task-list > li").length;
  return !Number.isInteger(answers[index]) || answers[index] < 1 || answers[index] > count;
})) {
  const error = document.createElement("p");
  error.setAttribute("role", "alert");
  error.textContent = "This knowledge check could not load. Please report this page to your instructor.";
  document.querySelector("main").prepend(error);
  throw new Error("Knowledge-check answer metadata does not match the questions.");
}

questions.forEach((section, index) => {
  const heading = section.querySelector("h2");
  const list = section.querySelector("ul.task-list");
  const options = Array.from(list.children);
  const form = document.createElement("form");
  form.className = "knowledge-check-question";
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.className = "visually-hidden";
  legend.textContent = heading.textContent;
  fieldset.append(legend);

  options.forEach((option, optionIndex) => {
    const input = option.querySelector('input[type="checkbox"]');
    input.type = "radio";
    input.disabled = false;
    input.checked = false;
    input.required = true;
    input.name = `question-${index + 1}`;
    input.value = String(optionIndex + 1);
    if (!option.querySelector("label")) {
      const label = document.createElement("label");
      label.append(...option.childNodes);
      option.append(label);
    }
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "btn btn-primary";
  submit.textContent = "Submit answer";
  const feedback = document.createElement("p");
  feedback.className = "knowledge-check-feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  feedback.hidden = true;

  list.replaceWith(form);
  fieldset.append(list);
  form.append(fieldset, submit, feedback);

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const selected = form.querySelector("input:checked");
    if (!selected) return;
    const correct = answers[index];
    const answer = options[correct - 1].textContent.trim();
    feedback.textContent = Number(selected.value) === correct
      ? `Correct! ${answer}`
      : `Not quite. The correct answer is: ${answer}`;
    feedback.hidden = false;
  });

  form.addEventListener("change", () => {
    feedback.hidden = true;
    feedback.textContent = "";
  });
});
