<script setup lang="ts">
import { useSheduleStore } from '@/stores/sheduleStore'
import { useEventsDailyCollection } from '@/stores/eventsStore'
import { computed, ref } from 'vue'
import ScheduleItem from './scheduleItem/scheduleItem.vue'
import EventModal from '@/components/modals/eventModal.vue'

const calendarStorage = useSheduleStore()
const selectedDateId = computed(() => calendarStorage.selectedDate.id)
const eventsCollectionStore = useEventsDailyCollection()

const eventDaySelectedCollecccion = computed(() =>
  eventsCollectionStore.getEventsByDate(selectedDateId.value),
)
const isOpenModal = ref(true)
const isEditMode = ref(false)

const handleIsEdit = () => {
  isEditMode.value = true
  OpenModal()
}

const OpenModal = () => {
  isOpenModal.value = !isOpenModal.value
}

const handleDeleteEvent = (eventId: any) => {
  alert('Se ha eliminado evento')
  eventsCollectionStore.deleteEventById(selectedDateId.value, eventId)
}
</script>

<template>
  <div class="sidebar w-full space-y-6 flex flex-col">
    <h2 class="text-2xl font-bold mb-4">
      Eventos: <span class="text-primary-500"> {{ selectedDateId }} </span>
    </h2>
    <br />

    <div class="schedule-wrap space-y-3" v-if="eventDaySelectedCollecccion.length > 0">
      <ScheduleItem
        v-for="(item, index) in eventDaySelectedCollecccion"
        :key="index"
        :id="item.id"
        :title="item.title"
        :desc="item.desc"
        @delete="handleDeleteEvent"
        @isEdit="handleIsEdit"
      />
    </div>
    <div v-else class="flex-1">
      <p class="text-gray-400">No hay eventos asignados para este día</p>
    </div>

    <div>
      <button class="px-4 py-3 rounded-sm bg-primary-500 font-bold text-white" @click="OpenModal()">
        Agregar evento
      </button>
    </div>

    <EventModal
      v-if="isOpenModal"
      :isEdit="isEditMode"
      :isOpen="isOpenModal"
      @close="OpenModal"
      @delete="handleDeleteEvent"
      :selectedDateId="selectedDateId"
    />
  </div>
</template>

<style scoped></style>
