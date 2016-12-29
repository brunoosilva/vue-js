<template>
  <div>
    <h1>Categories</h1>

    <p>{{msg}}</p>
    <ul>
      <li v-for="category in listCategories">
        {{category.name}} ({{category.url}}) - {{category.order}}
      </li>
    </ul>

    <button @click="getCategories()">Get categories</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        listCategories: [],
      };
    },
    methods: {
      getCategories() {
        this.$http.get('categories').then((response) => {
          this.listCategories = response.data;
        });
      },
    },
  };
</script>

<style scoped="true">
  h1{
    color: blue;
  }
</style>
