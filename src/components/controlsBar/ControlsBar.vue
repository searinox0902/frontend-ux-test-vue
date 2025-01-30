<script setup lang="ts">
import options from './controlsBar.model'
import { ref } from 'vue'
const form = ref({
  month: '',
  year: '',
  view: '',
})
</script>

<template>
  <section class="controls-bar">
    <div class="controls-avatar">
      <figure class="rounded-full relative">
        <img alt="Vue logo" class="logo" src="@/assets/avatar.jpg" width="70" height="auto" />
      </figure>
      <p class="text-2xl font-bold text-green-900">Hola Username!</p>
    </div>

    <div class="controls-options">
      <!-- Campo: Mes -->
      <select v-model="form.month" id="month" class="form-select">
        <option value="">Mes</option>
        <option v-for="month in options.months" :key="month" :value="month">
          {{ month }}
        </option>
      </select>

      <!-- Campo: Año -->
      <select v-model="form.year" id="month" class="form-select">
        <option value="">Año</option>
        <option v-for="year in options.years" :key="year" :value="year">
          {{ year }}
        </option>
      </select>

      <!-- Campo: Vista -->
      <select v-model="form.view" id="month" class="form-select">
        <option value="">Vista</option>
        <option v-for="view in options.views" :key="view" :value="view">
          {{ view }}
        </option>
      </select>
    </div>
  </section>
</template>

<style scoped></style>
