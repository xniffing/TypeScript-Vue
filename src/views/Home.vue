<template>
  <div class="home">
    <HeroSection
      title="Dynamic Hero component"
      description="This is procedurally generated."
    >
    </HeroSection>
    <HelloWorld
      class="has-text-centered index-content"
      msg="This is Cool!"
    ></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",
  components: {
    HeroSection,
    HelloWorld
  }
};
</script>

<style scoped>
img {
  height: 50px;
}

.index-content {
  z-index: 1;
}
</style>
