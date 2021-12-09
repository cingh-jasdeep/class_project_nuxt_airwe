<template>
  <div>
    <div class="w-16">
      <img src="~/assets/AIRWE-LOGO.png" alt="Airwe Logo" />
    </div>
    <div>
      <nuxt-content
        class="
          prose prose-blue prose-sm
          sm:prose
          lg:prose-lg
          xl:prose-2xl
          mx-auto
        "
        :document="{ body: home.about }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const home = await $content('content/home').fetch()

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
