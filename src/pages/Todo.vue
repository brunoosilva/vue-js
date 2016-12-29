<template>
  <div>
      <h1>To do list</h1>
      <input type="text" v-model="text" @keyup.enter="addTodo()" placeholder="Sua tarefa..." />
      <ul>
          <li v-for="item in listTodos">
            <list-item v-bind:item="item" @remove="removeTodo($index)"></list-item>
          </li>
      </ul>
  </div>
</template>

<script>
import ListItem from '../components/todo/listItem';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      text: '',
      listTodos: [],
    };
  },
  methods: {
    addTodo() {
      this.listTodos.push({ text: this.text, finalized: false });
      this.text = '';
    },
    removeTodo(index) {
      this.listTodos.splice(index, 1);
    },
  },
};
</script>

<style scoped="true">
  h1{
    color: red;
  }
input[type=text]{
    font-size: 20px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 10px;
    width: 90%;
}

ul li{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    font-size: 30px;
}

ul li span.finalized{
        text-decoration: line-through;
}
</style>
