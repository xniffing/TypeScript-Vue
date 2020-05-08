<template>
  <section
    class="hero is-medium is-dark color-gradient"
    :style="[colors, text]"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ description }}
        </h2>
        <h5 class="note">
          Background Gradient: {{ colors }}
          <br />
          Text Color: {{ text }}
        </h5>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { gradientColor, textColor } from "@/plugins/Chroma";

@Component
export default class HeroSection extends Vue {
  /**
   * Title of the Hero
   */
  @Prop() private title!: string;
  /**
   * Description of the Hero
   */
  @Prop() private description!: string;

  /**
   * Returns the acceptable contrast ratio to a CSS Variable
   */
  get text(): object {
    if (textColor > 4.5) {
      return {
        "--text-color": "white"
      };
    }
    return {
      "--text-color": "black"
    };
  }

  /**
   * Returns a random place in the also random scale defined in chroma.JS
   */
  get colors(): object {
    return {
      "--color1": gradientColor(Math.random()).hex(),
      "--color2": gradientColor(Math.random()).hex()
    };
  }
}
</script>

<style lang="scss">
.color-gradient {
  -webkit-animation: colorScale 5s infinite;
  -o-animation: colorScale 5s infinite;
  animation: colorScale 5s infinite;
  background: linear-gradient(
    to right,
    var(--color1, #009999),
    var(--color2, #006e99)
  );
}

h5 {
  font-size: 13px !important;
}

.title,
.subtitle,
.note {
  color: var(--text-color) !important;
}
</style>
