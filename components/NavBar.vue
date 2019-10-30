<template>
  <div>
    <b-navbar>
      <b-navbar-brand href="#">
        NavBar
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--
            Use nuxt-lint instand of router-link
          -->
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'index' }">
              Movies
            </nuxt-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
