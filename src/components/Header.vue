<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <header class="header">
    <div class="header__wrap">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="auto" />
      <ul class="flex gap-8">
        <li>
          <a class="header__link" href="https://vite.dev/" target="_blank" rel="noopener">Link1</a>
        </li>
        <li>
          <a class="header__link" href="https://vuejs.org/" target="_blank" rel="noopener">Link2</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
