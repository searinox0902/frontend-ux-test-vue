<script setup lang="ts">
import ControlsBar from '../components/controlsBar/ControlsBar.vue'
import Sidebar from '../components/sidebar/sidebar.vue'
import Calendar from '../components/calendar/calendar.vue'
</script>

<template>
  <main class="bg-gray-100">
    <div class="container m-auto pb-10 max-w-4xl">
      <ControlsBar />
      <div class="px-6 md:px-0">
        <div
          class="schedule w-full border-gray-300 shadow-lg rounded-2xl p-10 bg-white flex flex-col md:flex-row gap-16"
        >
          <Sidebar />
          <Calendar />
        </div>
      </div>
    </div>
  </main>
</template>
