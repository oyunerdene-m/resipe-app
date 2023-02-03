<template>
  <div class="container">
    <!-- Navigation -->
    <nav class="navbar">
        <ul>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/">Sign up</router-link>
          </li>
        </ul>
    </nav>
    <!-- Main -->
    <div class="App">
        <router-view ></router-view>
    </div>
  </div>
</template>

<script></script>