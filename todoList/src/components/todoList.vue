
<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"
          >{{ todo.id }} - {{ todo.title }}</span
        >
      </li>
    </ul>
    <div v-else>暂无数据</div>
    全选<input type="checkbox" v-model="allDone" /> {{ active }} / {{ all }}
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRefs } from "vue";
let title = ref("");
let todos = ref([{ id: 1, title: "学习Vue", done: false }]);
function addTodo() {
  todos.value.push({
    id: todos.value.slice(-1)[0].id + 1,
    title: title.value,
    done: false,
  });
  title.value = "";
}
function clear() {
  todos.value = todos.value.filter((v) => v.done === false);
  console.log(todos);
}
let active = computed(() => {
  return todos.value.filter((v) => v.done === false).length;
});
let all = computed(() => todos.value.length);
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (value) {
    todos.value.forEach((todo) => {
      todo.done = value;
    });
  },
});
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>