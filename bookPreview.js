import { books, authors } from "./data.js";

// Function to render book details in the active list overlay
export function renderBookPreview(activeBook) {
  document.querySelector("[data-list-blur]").src = activeBook.image;
  document.querySelector("[data-list-image]").src = activeBook.image;
  document.querySelector("[data-list-title]").innerText = activeBook.title;
  document.querySelector("[data-list-subtitle]").innerText = `${
    authors[activeBook.author]
  } (${new Date(activeBook.published).getFullYear()})`;
  document.querySelector("[data-list-description]").innerText =
    activeBook.description;
}

// Function to handle showing book details
export function showBookDetails(event) {
  const pathArray = Array.from(event.path || event.composedPath());
  const activeBookId = pathArray.find((node) => node?.dataset?.preview)?.dataset
    .preview;

  const activeBook = books.find((book) => book.id === activeBookId);
  if (activeBook) {
    document.querySelector("[data-list-active]").open = true;
    renderBookPreview(activeBook); // Call to render the book preview
  }
}
