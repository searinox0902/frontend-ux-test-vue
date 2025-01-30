<script setup lang="ts">
import { useEventsDailyCollection } from '@/stores/eventsStore'
import { defineProps, defineEmits, computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
const eventsCollectionStore = useEventsDailyCollection()

const props = defineProps({
  isOpen: Boolean,
  selectedDateId: String,
  isEdit: Boolean,
})

const emit = defineEmits(['close', 'edit'])

const addNewEvent = () => {
  eventsCollectionStore.addEventCollection(String(props.selectedDateId), formData.value)
  emit('close')
  return
}

const handleEditEvent = () => {
  eventsCollectionStore.editEventById(String(props.selectedDateId), formDataEdit.value)
  emit('close')
  return
}

const formData = ref({
  id: uuidv4(),
  title: 'Evento Ejemplo',
  desc: 'Descripción del evento',
})

const formDataEdit = ref({
  id: String(props.selectedDateId),
  title: '',
  desc: '',
})
</script>

<template>
  <div
    class="event__modal bg-white-900 backdrop-blur-sm inset-0 bg-white/30 max-h-screen h-full absolute left-0 right-0 top-0 bottom-0 z-50 flex items-center"
    v-if="isOpen"
  >
    <div
      class="w-[90%] sm:w-full max-w-xl m-auto bg-white p-10 rounded-xl full border border-green-300 relative space-y-6"
    >
      <div>
        <h3 class="text-xl font-bold" v-if="!isEdit">
          Crear Evento <span class="text-green-600">fecha: {{ selectedDateId }}</span>
        </h3>

        <h3 class="text-xl font-bold" v-else>
          Editar Evento <span class="text-green-600">fecha: {{ selectedDateId }}</span>
        </h3>
      </div>
      <!-- Edit Form -->
      <div v-if="!isEdit">
        <form class="space-y-6" @submit.prevent="addNewEvent">
          <div class="flex gap-6">
            <div class="flex flex-col w-full">
              <label class="font-sm">Titulo</label>
              <input
                v-model="formData.title"
                placeholder="ingrese titulo"
                type="text"
                class="py-2 px-4 border border-gray-400 rounded-sm color-gray-400"
              />
            </div>
          </div>
          <div class="flex gap-6">
            <textarea
              v-model="formData.desc"
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              class="bg-gray-100 w-full p-4 rounded-lg border-gray-200 border h-36 m-0"
            >
                Ingrese descripción
            </textarea>
          </div>

          <div class="flex gap-8">
            <button
              v-if="!isEdit"
              class="px-4 py-3 w-full rounded-lg bg-primary-500 font-bold text-white"
            >
              Crear Evento
            </button>
            <button
              v-else
              @click="emit('edit', formData)"
              class="px-4 py-3 w-full rounded-lg bg-primary-500 font-bold text-white"
            >
              Editar Evento
            </button>
            <button
              class="px-4 py-3 w-full rounded-lg border-primary-500 border font-bold text-green-500"
              @click="emit('close')"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <!-- Edit Form -->
      <div v-else>
        <form class="space-y-6" @submit.prevent="handleEditEvent">
          <div class="flex gap-6">
            <div class="flex flex-col w-full">
              <label class="font-sm">Titulo</label>
              <input
                v-model="formDataEdit.title"
                placeholder="ingrese titulo"
                type="text"
                class="py-2 px-4 border border-gray-400 rounded-sm color-gray-400"
              />
            </div>
          </div>
          <div class="flex gap-6">
            <textarea
              v-model="formDataEdit.desc"
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              class="bg-gray-100 w-full p-4 rounded-lg border-gray-200 border h-36 m-0"
            >
                Ingrese descripción
            </textarea>
          </div>

          <div class="flex gap-8">
            <button
              v-if="!isEdit"
              class="px-4 py-3 w-full rounded-lg bg-primary-500 font-bold text-white"
            >
              Crear Evento
            </button>
            <button
              v-else
              @click="handleEditEvent"
              class="px-4 py-3 w-full rounded-lg bg-primary-500 font-bold text-white"
            >
              Editar Evento
            </button>
            <button
              class="px-4 py-3 w-full rounded-lg border-primary-500 border font-bold text-green-500"
              @click="emit('close')"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
