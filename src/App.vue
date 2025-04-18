<template>
  <NavBar />
  <main class="min-vh-100">
    <router-view />
  </main>
  <FooterComp />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>

<style>
.min-vh-100 {
  min-height: 100vh;
}
</style>