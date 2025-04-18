<template>
    <div class="book-detail">
      <div class="container py-5">
        <div v-if="book">
          <div class="row">
            <div class="col-md-4">
              <img :src="book.coverImage" :alt="book.title" class="img-fluid rounded shadow">
            </div>
            <div class="col-md-8">
              <h1>{{ book.title }}</h1>
              <p class="lead">{{ book.author }}</p>
              
              <div class="d-flex align-items-center mb-3">
                <div class="rating me-3">
                  <span v-for="i in 5" :key="i">
                    <i :class="['bi', i <= Math.round(book.rating) ? 'bi-star-fill text-warning' : 'bi-star']"></i>
                  </span>
                  <span class="ms-2">{{ book.rating.toFixed(1) }} ({{ book.reviews.length }} avaliações)</span>
                </div>
              </div>
  
              <div class="mb-4">
                <h4>Sinopse</h4>
                <p>{{ book.description }}</p>
              </div>
            </div>
          </div>
  
          <div class="row mt-5">
            <div class="col-md-8 offset-md-2">
              <h3 class="mb-4">Avaliações</h3>
              
              <div v-if="book.reviews.length === 0" class="alert alert-info">
                Nenhuma avaliação ainda. Seja o primeiro a avaliar!
              </div>
  
              <div v-else class="review-list">
                <div v-for="review in book.reviews" :key="review.id" class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">{{ review.user }}</h5>
                      <div class="rating">
                        <span v-for="i in 5" :key="i">
                          <i :class="['bi', i <= review.rating ? 'bi-star-fill text-warning' : 'bi-star']"></i>
                        </span>
                      </div>
                    </div>
                    <p class="card-text">{{ review.comment }}</p>
                    <small class="text-muted">Avaliado em {{ new Date().toLocaleDateString() }}</small>
                  </div>
                </div>
              </div>
  
              <ReviewForm 
                :book-id="book.id" 
                @review-submitted="handleReviewSubmit" 
              />
            </div>
          </div>
        </div>
        <div v-else class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
        </div>
      </div>
    </div>
  </template>s
  
  <script setup>
  import { computed } from 'vue'
  import { useBookStore } from '@/stores/bookStore'
  import ReviewForm from '@/components/ReviewForm.vue'
  
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  })
  
  const bookStore = useBookStore()
  const book = computed(() => bookStore.getBookById(props.id))
  
  const handleReviewSubmit = ({ bookId, review }) => {
    bookStore.addReview(bookId, review)
  }
  </script>