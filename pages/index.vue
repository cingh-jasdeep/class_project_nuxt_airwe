<template>
  <div>
    <div class="w-16">
      <img src="~/assets/AIRWE-LOGO.png" alt="Airwe Logo" />
    </div>
    <div>
      <nuxt-content :document="home.pa.babaji_message" />
      <!-- class="
          prose prose-blue prose-sm
          sm:prose
          lg:prose-lg
          xl:prose-2xl
          mx-auto
        " -->
    </div>
    <div class="text-3xl">Waheguru</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }) {
    let home: any
    try {
      home = await $content('home_with_md').fetch()
    } catch (e) {
      error({ message: 'Content file not found' })
    }

    return {
      home,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>
