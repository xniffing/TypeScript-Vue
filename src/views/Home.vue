<template>
  <div class="home">
    <HeroSection title="Home Page" description="This is a Description">
    </HeroSection>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection";

export default {
  name: "Home",
  components: {
    HeroSection
  }
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>
