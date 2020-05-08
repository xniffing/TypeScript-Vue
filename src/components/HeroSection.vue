<template>
  <section
    class="hero is-medium is-dark"
    :style="{ backgroundImage: getGradient }"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ description }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { gradientColor } from "@/plugins/Chroma";

@Component
export default class HeroSection extends Vue {
  /**
   * Title of the Hero
   */
  @Prop() private title!: string;
  /**
   * Description of the Helo
   */
  @Prop() private description!: string;

  get getGradient(): string {
    return (
      "linear-gradient(to right," +
      gradientColor(0) +
      "," +
      gradientColor(1) +
      ")"
    );
  }
}
</script>

<style scoped></style>
