<template>
  <div class="home">
    <HeroSection title="Home Page" description="This is a Description">
    </HeroSection>
    <HelloWorld class="has-text-centered" msg="This is Cool!"></HelloWorld>
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
</style>
