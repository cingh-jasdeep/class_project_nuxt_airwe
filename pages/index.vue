<template>
  <!-- main content -->
  <div>
    <!-- header block -->
    <div class="p-6 bg-baby-blue flex flex-col items-center">
      <nuxt-img
        format="webp"
        class="w-[62px]"
        src="/AIRWE-LOGO.png"
        alt="Airwe Logo"
      />
      <div class="mt-2 h-[2px] w-[48px] bg-black" />
      <div class="mt-2 font-bold font-one text-center text-xl leading-tight">
        {{ lang('site_title.title') }}<br />{{ lang('site_title.subtitle') }}
      </div>
      <!-- lang switcher -->
      <div
        class="flex mt-2 rounded-md border-2 border-black divide-x divide-black"
      >
        <div
          v-for="(value, key) in supportedLanguages"
          :key="key"
          class="flex-1 p-1 w-12 flex items-center justify-center"
        >
          {{ value }}
        </div>
      </div>
    </div>
    <!-- header block -->
  </div>
  <!-- end-main content -->
  <!-- <div>
    <div class="w-16">
      <nuxt-img format="webp" src="/AIRWE-LOGO.png" alt="Airwe Logo" />
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
        <nuxt-img
          v-if="event.photo"
          format="webp"
          :src="event.photo"
          loading="lazy"
          :alt="event.location + '-' + event.date"
        />
        <div class="text-center font-one">
          {{ event.location }}<br />{{ event.date }}
        </div>
      </div>
    </div>
  </div> -->
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
