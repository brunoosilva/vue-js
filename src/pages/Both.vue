<template>
  <div>
    <todo></todo>

    <categories></categories>
  </div>
</template>

<script>
  import Todo from './Todo';
  import Categories from './Category';

  export default {
    components: {
      Todo,
      Categories,
    },
  };
</script>
