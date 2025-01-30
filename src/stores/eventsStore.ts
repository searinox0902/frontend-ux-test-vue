import { defineStore } from 'pinia'

interface Event {
  title: string
  desc: string
  id: any
}

export const useEventsDailyCollection = defineStore('eventsDailyCollection', {
  state: () => ({
    events: {} as Record<string, { id: string; title: string; desc: string }[]>,
  }),
  actions: {
    addEventCollection(date: String, e: any) {
      const dateKey = String(date)
      if (!this.events[dateKey]) {
        this.events[dateKey] = []
      }
      this.events[dateKey].push(e)
      console.log(this.events)
    },

    getEventsByDate(dateId: String) {
      const eventDayCollection = this.events[String(dateId)] || []
      console.log(eventDayCollection, this.events, dateId)
      return eventDayCollection
    },

    deleteEventById(dateId: string, eventId: string) {
      if (!this.events[dateId]) return
      this.events[dateId] = this.events[dateId].filter((event) => event.id !== eventId)
      if (this.events[dateId].length === 0) {
        delete this.events[dateId]
      }
    },

    editEventById(dateId: string, eventData: any) {
      if (!this.events[dateId]) return
      const event = this.events[dateId].find((event) => event.id === eventData.id)
    },
  },
})
