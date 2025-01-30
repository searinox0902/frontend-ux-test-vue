<script setup lang="ts">
const props = defineProps<{
  id: String
  desc: String
  title: String
}>()

const emit = defineEmits(['edit', 'delete', 'isEdit'])

// Emitir el evento 'edit' con datos
const handleEdit = (isEdit: Boolean) => {
  isEdit = true
  emit('edit', props)
  emit('isEdit', true)
}

// Emitir el evento 'delete' con un ID
const handleDelete = () => {
  emit('delete', props.id)
}
</script>

<template>
  <div
    class="schedule-item bg-gray-100 hover:bg-green-100 hover:border-green-500 border border-transparent py-2 px-4 rounded-lg flex gap-2 w-full items-center"
  >
    <span class="font-gray-400 w-full pr-6"> {{ props.title }} </span>
    <button
      class="schedule-btn hover:cursor-pointer hover:bg-green-300 rounded-full p-1"
      @click="handleEdit(true)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </button>
    <button
      class="schedule-btn hover:cursor-pointer hover:bg-green-300 rounded-full p-1"
      @click="handleDelete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
