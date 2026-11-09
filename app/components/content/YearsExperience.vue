<script setup lang="ts">
// Used inline in Markdown as :years-experience. Counts from 2014, as the old site did.
const years = new Date().getFullYear() - 2014
</script>

<template>
  <span>{{ years }}</span>
</template>
