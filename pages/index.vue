<template>
  <div class="w-16">
    <img src="~/assets/AIRWE-LOGO.png" alt="Airwe Logo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>
