import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBookStore = defineStore('books', () => {
  const books = ref([
    {
      id: 1,
      title: 'O Hobbit',
      author: 'J.R.R. Tolkien',
      coverImage: 'https://covers.openlibrary.org/b/id/6979865-L.jpg',
      description: 'Um hobbit é arrastado para uma aventura épica.',
      rating: 4.5,
      reviews: [
        { id: 1, user: 'Leitor1', rating: 5, comment: 'Maravilhoso!' },
        { id: 2, user: 'Leitor2', rating: 4, comment: 'Muito bom' }
      ]
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      coverImage: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
      description: 'Um clássico sobre vigilância e controle governamental.',
      rating: 4.8,
      reviews: [
        { id: 1, user: 'Leitor3', rating: 5, comment: 'Atemporal' }
      ]
    }
  ])

  const getBookById = computed(() => (id) => {
    return books.value.find(book => book.id === parseInt(id))
  })

  const addBook = (book) => {
    const newId = Math.max(...books.value.map(b => b.id)) + 1
    books.value.push({
      id: newId,
      ...book,
      reviews: [],
      rating: 0
    })
  }

  const addReview = (bookId, review) => {
    const book = books.value.find(b => b.id === bookId)
    if (book) {
      const newReviewId = book.reviews.length > 0 
        ? Math.max(...book.reviews.map(r => r.id)) + 1 
        : 1
      book.reviews.push({
        id: newReviewId,
        ...review
      })
      // Atualiza a média de avaliações
      book.rating = book.reviews.reduce((acc, curr) => acc + curr.rating, 0) / book.reviews.length
    }
  }

  return { books, getBookById, addBook, addReview }
})