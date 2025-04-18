<template>
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>BookReviews</h5>
            <p class="text-muted">Sua plataforma para descobrir e avaliar livros.</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Links Rápidos</h5>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-white">Home</router-link></li>
              <li><router-link to="/books" class="text-white">Livros</router-link></li>
              <li><router-link to="/add-book" class="text-white">Adicionar Livro</router-link></li>
            </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Redes Sociais</h5>
            <div class="social-links">
              <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white"><i class="bi bi-goodreads"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4 bg-light">
        <div class="text-center text-muted">
          <small>&copy; 2023 BookReviews. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  footer a {
    text-decoration: none;
    transition: color 0.3s;
  }
  
  footer a:hover {
    color: #0d6efd !important;
  }
  
  .social-links i {
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  
  .social-links i:hover {
    color: #0d6efd !important;
  }
  </style>