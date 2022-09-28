<template>
  <nav class="navbar navbar-dark bg-primary bg-opacity-60 navbar-expand-lg">
    <div class="container container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        Fit <span class="mdi mdi-heart" /> Together</NuxtLink
      >
      <button
        class="navbar-toggler"
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
            <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/explain"
              >How does it work?</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/privacy">Privacy</NuxtLink>
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
