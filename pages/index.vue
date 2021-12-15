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
      <div class="text-3xl font-one">
        {{ lang('gurbani_line') }}
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div v-for="(event, index) in lang('events_list')" :key="index">
        <nuxt-img format="webp" :src="event.photo" loading="lazy" />
        <div class="text-center font-one">
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
    let home: any
    try {
      home = await $content('home').fetch()
    } catch (e) {
      error({ message: 'Content file not found' })
    }

    return {
      home,
    }
  },
  data() {
    return {
      home: {},
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
    lang(path: string): any {
      // first check if userLanguage path has a text
      return (
        _.get(this.home, this.userLanguage + '.' + path) ??
        _.get(this.home, defaultLanguage + '.' + path)
      )
    },
  },
})
</script>
