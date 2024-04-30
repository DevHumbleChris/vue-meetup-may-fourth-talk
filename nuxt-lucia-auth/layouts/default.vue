<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { property: "og:title", content: `Nuxt Lucia Auth` },
    {
      name: "description",
      content: "Streamlining Authentication in Nuxt.js with Lucia Auth.",
    },
    {
      property: "og:description",
      content: "Streamlining Authentication in Nuxt.js with Lucia Auth.",
    },
    { property: "og:url", content: "https://nuxt-lucia-auth.vercel.app" },
    { name: "twitter:title", content: "Nuxt Lucia Auth" },
    {
      name: "twitter:description",
      content: "Streamlining Authentication in Nuxt.js with Lucia Auth.",
    },
    { name: "twitter:site", content: "https://nuxt-lucia-auth.vercel.app" },
  ],
  title: `Nuxt Lucia Auth`,
});

defineOgImageComponent("Nuxt", {
  headline: "Greetings",
  title: "Nuxt Lucia Auth 👋",
  description: "Streamlining Authentication in Nuxt.js with Lucia Auth.",
});
</script>

<template>
  <main>
    <slot />
  </main>
</template>
