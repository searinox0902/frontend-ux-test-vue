<script setup lang="ts">
import { ref } from 'vue'
import { useSheduleStore } from '@/stores/sheduleStore'

const calendarStore = useSheduleStore()

const onDateSelect = (dateAllData: any | null) => {
  calendarStore.setSelectedDate(dateAllData)
}

const today = ref(new Date().toISOString().split('T')[0])

const attributes = ref([
  {
    dates: today.value,
    highlight: {
      fillMode: 'light',
      contentClass: 'dayhighlight__custom',
    },
  },
  {
    // Boolean
    dot: true,
    dates: [
      new Date(2025, 0, 1),
      new Date(2025, 0, 10),
      new Date(2025, 0, 12),
      new Date(2025, 0, 30),
    ],
  },
])
</script>

<template>
  <div class="calendar w-full">
    <VCalendar
      @dayclick="onDateSelect"
      :attributes="attributes"
      borderless
      expanded
      title-position="left"
      :min-date="new Date()"
    />
  </div>
</template>

<style scoped></style>
