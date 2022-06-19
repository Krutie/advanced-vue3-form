<template>
  <div id="app">
    <div class="title">
      <h1>Advanced <span> Vue 3 </span> Form</h1>
    </div>
    <TypeForm :formConfig="formConfig" />
  </div>
</template>

<script setup>
import TypeForm from "./components/TypeForm";
import { form as formConfig } from "./config/config";
</script>
<style>
@import "./assets/styles/main.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
</style>
