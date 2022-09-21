<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-md-auto gap-2">
          <li class="nav-item rounded">
            <NuxtLink class="nav-link active" aria-current="page" to="/home"
              ><i class="bi bi-house-fill me-2"></i>Home</NuxtLink
            >
          </li>
          <li class="nav-item rounded">
            <NuxtLink class="nav-link" to="/about"
              ><i class="bi bi-people-fill me-2"></i>About</NuxtLink
            >
          </li>
          <li class="nav-item rounded">
            <a class="nav-link" href="#"
              ><i class="bi bi-telephone-fill me-2"></i>How does it work?</a
            >
          </li>
          <li class="nav-item dropdown rounded">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="bi bi-person-fill me-2"></i>Privacy</a
            >
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li><a class="dropdown-item" href="#">Account</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>
