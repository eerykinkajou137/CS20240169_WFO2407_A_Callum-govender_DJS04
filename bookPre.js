import { authors, BOOKS_PER_PAGE } from "./data.js";

// Book class to encapsulate book properties and rendering logic
export class Book {
  constructor(id, title, authorId, image) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.image = image;
  }

  render() {
    const element = document.createElement("button");
    element.classList.add("preview");
    element.setAttribute("data-preview", this.id);
    element.innerHTML = `
            <img class="preview__image" src="${this.image}" />
            <div class="preview__info">
                <h3 class="preview__title">${this.title}</h3>
                <div class="preview__author">${authors[this.authorId]}</div>
            </div>
        `;
    return element;
  }
}

// Function to render books
export function renderBooks(matches) {
  const fragment = document.createDocumentFragment();

  matches.slice(0, BOOKS_PER_PAGE).forEach(({ id, title, author, image }) => {
    const book = new Book(id, title, author, image);
    fragment.appendChild(book.render());
  });

  document.querySelector("[data-list-items]").appendChild(fragment);
}
