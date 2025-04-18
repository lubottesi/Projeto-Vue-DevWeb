<template>
    <div class="book-list">
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1>Nossa Coleção de Livros</h1>
          <router-link to="/add-book" class="btn btn-primary">
            <i class="bi bi-plus-lg"></i> Adicionar Livro
          </router-link>
        </div>
  
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col" v-for="book in bookStore.books" :key="book.id">
            <BookCard :book="book" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useBookStore } from '@/stores/bookStore'
  import BookCard from '@/components/BookCard.vue'
  
  const bookStore = useBookStore()
  </script>