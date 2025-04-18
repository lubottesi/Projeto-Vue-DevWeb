<template>
    <div class="card mt-4">
      <div class="card-header">
        <h5 class="mb-0">Adicionar Avaliação</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitReview">
          <div class="mb-3">
            <label class="form-label">Seu Nome</label>
            <input v-model="review.user" type="text" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Avaliação (1-5)</label>
            <select v-model.number="review.rating" class="form-select" required>
              <option value="1">1 - Péssimo</option>
              <option value="2">2 - Ruim</option>
              <option value="3">3 - Regular</option>
              <option value="4">4 - Bom</option>
              <option value="5">5 - Excelente</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Comentário</label>
            <textarea v-model="review.comment" class="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar Avaliação</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    bookId: {
      type: Number,
      required: true
    }
  })
  
  const emit = defineEmits(['review-submitted'])
  
  const review = ref({
    user: '',
    rating: 5,
    comment: ''
  })
  
  const submitReview = () => {
    emit('review-submitted', {
      bookId: props.bookId,
      review: review.value
    })
    // Reset form
    review.value = {
      user: '',
      rating: 5,
      comment: ''
    }
  }
  </script>