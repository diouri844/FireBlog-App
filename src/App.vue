<script setup lang="ts">
import { Ref, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const message:Ref<string> = ref("Fire Blog Posts app with vue/pina and firebase");


</script>

<template>
  <HelloWorld :msg="message" />
</template>


