<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
    components: {
    EventCard
  },
    computed: mapState({
    events: state => state.events.events
  }),
  // Called each time before the page component is loaded
  // Nuxt will wait until the API call is finished to render the component
  // The object returned will be merged with component data
  // Using Async Await
  // eslint-disable-next-line handle-callback-err
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (error) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
}
</script>
