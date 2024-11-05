<template>
    <div>
      <button @click="showMessage">Click Me</button>
      <p v-if="messageVisible">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const messageVisible = ref(false);
  const message = ref("Hello! You've clicked the button.");
  
  const showMessage = () => {
    messageVisible.value = true;
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    color: rgb(206, 193, 193);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #101010;
  }
  
  p {
    margin-top: 10px;
    font-size: 1.2em;
    color: #333;
  }
  </style>
  