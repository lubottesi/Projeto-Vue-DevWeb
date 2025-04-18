import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import BookDetailView from '../views/BookDetailView.vue'
import AddBookView from '../views/AddBookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    component: BookListView
  },
  {
    path: '/books/:id',
    name: 'book-detail',
    component: BookDetailView,
    props: true
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router