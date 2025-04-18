<template>
    <div class="card h-100">
      <img :src="book.coverImage" class="card-img-top" :alt="book.title" style="height: 300px; object-fit: cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text text-muted">{{ book.author }}</p>
        <div class="mt-auto">
          <div class="d-flex justify-content-between align-items-center">
            <div class="rating">
              <span v-for="i in 5" :key="i">
                <i :class="['bi', i <= Math.round(book.rating) ? 'bi-star-fill text-warning' : 'bi-star']"></i>
              </span>
              <small class="text-muted ms-2">({{ book.reviews.length }})</small>
            </div>
            <router-link :to="'/books/' + book.id" class="btn btn-sm btn-outline-primary">Detalhes</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    book: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  </style>