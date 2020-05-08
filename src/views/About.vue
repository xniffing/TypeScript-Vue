<template>
  <div class="about">
    <HeroSection title="About Page" description="This is a About Page" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection
  }
};
</script>
