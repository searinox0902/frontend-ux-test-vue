import { defineStore } from 'pinia'

interface scheduleState {
  selectedDate: { id: string }
}

export const useSheduleStore = defineStore('schedule', {
  state: (): scheduleState => ({
    selectedDate: { id: new Date().toISOString().split('T')[0] },
  }),
  actions: {
    setSelectedDate(dateAllData: any | null) {
      console.log(dateAllData)
      this.selectedDate = dateAllData
    },
  },
})
