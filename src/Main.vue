<template>
  <div>
    <header>
      <img src="./assets/logo.png" height="80" />

      <p>
        <router-link to="/">Home</router-link> /
        <router-link to="/todo">Todo</router-link> /
        <router-link to="/categories">Categories</router-link> /
        <router-link to="/both">Both</router-link>
      </p>
    </header>

    <section>
      <router-view></router-view>
    </section>

    <footer>
      Footer
    </footer>
  </div>
</template>

<style scoped="true">
  header{
    border-bottom: 1px solid #000;
    padding: 20px;
  }

  section{
    padding: 20px;
  }

  footer{
    border-top: 1px solid #000;
    padding: 20px;
  }
</style>
