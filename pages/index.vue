<template>
  <div>
    <div class="w-16">
      <img src="/AIRWE-LOGO.png" alt="Airwe Logo" />
    </div>
    <div>
      <select :value="userLanguage" @input="updateUserLanguage">
        <option
          v-for="(value, key) in supportedLanguages"
          :key="key"
          :value="key"
        >
          {{ value }}
        </option>
      </select>
    </div>
    <div>
      <nuxt-content :document="home.en.babaji_message" />
      <!-- class="
          prose prose-blue prose-sm
          sm:prose
          lg:prose-lg
          xl:prose-2xl
          mx-auto
        " -->
    </div>
    <div class="flex flex-col items-center">
      <div class="text-xl">Prachar Events</div>
      <div v-for="(event, index) in pracharEvents.en.events_list" :key="index">
        <nuxt-img format="webp" :src="event.photo" loading="lazy" />
        <div class="text-center">
          {{ event.location }}<br />{{ event.date }}
        </div>
      </div>
    </div>
    <div class="text-3xl">Waheguru</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { supportedLanguages } from '~/constants/index'

export default Vue.extend({
  async asyncData({ $content, error }) {
    let home, pracharEvents: any
    try {
      home = await $content('home_with_md').fetch()
      pracharEvents = await $content('prachar_events').fetch()
    } catch (e) {
      error({ message: 'Content files not found' })
    }

    return {
      home,
      pracharEvents,
    }
  },
  data() {
    return {
      supportedLanguages,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage
    },
  },
  watch: {},
  methods: {
    updateUserLanguage(e: any) {
      this.$store.commit('switchLanguage', e.target.value)
    },
  },
})
</script>
