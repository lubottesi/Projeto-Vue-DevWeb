<template>
    <div class="home">
      <div class="hero bg-primary text-white py-5">
        <div class="container text-center">
          <h1 class="display-4 fw-bold">BookReviews</h1>
          <p class="lead">Descubra, avalie e compartilhe seus livros favoritos</p>
          <router-link to="/books" class="btn btn-light btn-lg mt-3">Explorar Livros</router-link>
        </div>
      </div>
  
      <div class="container my-5">
        <h2 class="text-center mb-4">Livros em Destaque</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="book in featuredBooks" :key="book.id">
            <BookCard :book="book" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useBookStore } from '@/stores/bookStore'
  import BookCard from '@/components/BookCard.vue'
  
  const bookStore = useBookStore()
  
  const featuredBooks = computed(() => {
    return [...bookStore.books]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
  })
  </script>
  
  <style scoped>
  .hero {
    background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
    margin-bottom: 2rem;
  }
  </style>