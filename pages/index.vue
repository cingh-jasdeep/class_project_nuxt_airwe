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
      <div class="text-3xl">
        {{ lang(homeTexts, 'gurbani_line') }}
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-xl">Prachar Events</div>
      <div
        v-for="(event, index) in lang(pracharEvents, 'events_list')"
        :key="index"
      >
        <nuxt-img format="webp" :src="event.photo" loading="lazy" />
        <div class="text-center">
          {{ event.location }}<br />{{ event.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { supportedLanguages, defaultLanguage } from '~/constants/index'
const _ = require('lodash')

export default Vue.extend({
  async asyncData({ $content, error }) {
    let homeTexts, pracharEvents: any
    try {
      homeTexts = await $content('home_texts').fetch()
      pracharEvents = await $content('prachar_events').fetch()
    } catch (e) {
      error({ message: 'Content files not found' })
    }

    return {
      homeTexts,
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
    lang(obj: any, path: string) {
      // first check if userLanguage path has a text
      return (
        _.get(obj, this.userLanguage + '.' + path) ??
        _.get(obj, defaultLanguage + '.' + path)
      )
    },
  },
})
</script>
