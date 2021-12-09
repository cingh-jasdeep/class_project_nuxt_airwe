<template>
  <div>
    <div class="w-16">
      <img src="~/assets/AIRWE-LOGO.png" alt="Airwe Logo" />
    </div>
    <div>
      <div v-for="post of posts" :key="post.slug">
        <h2 :to="post.slug">{{ post.title }}</h2>
        <nuxt-content
          class="
            prose prose-blue prose-sm
            sm:prose
            lg:prose-lg
            xl:prose-2xl
            mx-auto
          "
          :document="post"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts,
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
