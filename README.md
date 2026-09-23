# Book Review Website

A book review site in Vue 3, in Portuguese. You can browse a list of books, open a book to see its details and reviews, leave a review with a 1-5 rating (the book's average updates automatically), and add new books with title, author, cover URL and description.

Data lives in a Pinia store, seeded with two sample books. Nothing is persisted, so changes are lost on page reload.

Built for a web development course.

**Live:** https://projeto-vue-dev-web.vercel.app

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router
- Pinia
- Bootstrap 5 + Bootstrap Icons
- Vite

## Running locally

```bash
npm install
npm run dev
```

Then go to http://localhost:5173.

## Structure

```
src/
  views/        # Home, BookList, BookDetail, AddBook
  components/   # NavBar, FooterComp, BookCard, ReviewForm
  stores/       # bookStore.js (books and reviews)
  router/       # routes
```
