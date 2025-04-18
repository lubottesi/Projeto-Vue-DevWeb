<template>
    <div class="add-book">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h2 class="mb-0">Adicionar Novo Livro</h2>
              </div>
              <div class="card-body">
                <form @submit.prevent="submitBook">
                  <div class="mb-3">
                    <label class="form-label">Título</label>
                    <input v-model="book.title" type="text" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Autor</label>
                    <input v-model="book.author" type="text" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">URL da Capa</label>
                    <input v-model="book.coverImage" type="url" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Descrição</label>
                    <textarea v-model="book.description" class="form-control" rows="4" required></textarea>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <router-link to="/books" class="btn btn-outline-secondary me-md-2">Cancelar</router-link>
                    <button type="submit" class="btn btn-primary">Adicionar Livro</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useBookStore } from '@/stores/bookStore'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const bookStore = useBookStore()
  
  const book = ref({
    title: '',
    author: '',
    coverImage: '',
    description: ''
  })
  
  const submitBook = () => {
    bookStore.addBook(book.value)
    router.push('/books')
  }
  </script>