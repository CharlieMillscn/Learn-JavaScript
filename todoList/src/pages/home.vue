
<template>
  <p @click="add">{{ count }}</p>
  <h1>这是首页</h1>
  <!-- {{ x }}/ {{ y }} -->
  <Rate :value="score" @update-rate="update" />
  <TodoList />
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import TodoList from "../components/todoList.vue";
import Rate from "../components/rate.vue";
let a = ref("red");
let score = ref(3.5);
function update(num) {
  score.value = num;
}
let store = useStore();
let count = computed(() => store.state.count);
function add() {
  store.commit("add");
}
// import { useMouse } from "../utils/mouse";

// let { x, y } = useMouse();
</script>