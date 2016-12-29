const Home = require('./pages/Home.vue');
const Todo = require('./pages/Todo.vue');
const Categories = require('./pages/Category.vue');
const Both = require('./pages/Both.vue');

export default [
  { path: '/', component: Home },
  { path: '/todo', component: Todo },
  { path: '/categories', component: Categories },
  { path: '/both', component: Both },
];
