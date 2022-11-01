<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container container-fluid">
      <NuxtLink class="navbar-brand text-primary fw-bold start" to="/">
        Fit <span class="mdi mdi-heart" /> Together
      </NuxtLink>
      <button
        class="navbar-toggler border-0 bg-primary rounded-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link text-primary fw-bold" to="/"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-primary fw-bold" to="/explain"
              >How does it work?
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-primary fw-bold" to="/privacy"
              >Privacy</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-primary fw-bold" to="/about"
              >About</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

defineComponent({});
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}
.nav-link {
  font-size: 1.2rem;
}

#navContent {
  justify-content: flex-end;
}
a {
  margin: 1rem;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
}
a:hover {
  color: white !important;
  background: #f47174 !important;
}
</style>
