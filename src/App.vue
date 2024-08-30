<template>
  <common-header />
  <main-body />
</template>

<script setup>
import CommonHeader from "@/components/Layout/CommonHeader.vue";
import MainBody from "./components/MainBody.vue";
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #09599c;
  margin-top: 60px;
}
</style>
