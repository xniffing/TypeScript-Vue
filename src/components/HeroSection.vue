<template>
  <section class="hero is-medium is-dark color-gradient" :style="[colors, text]">
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
import { gradientColor, textColor } from "@/plugins/Chroma";

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
  background: linear-gradient(
    to right,
    var(--color1, #009999),
    var(--color2, #006e99)
  );
}

.title,
.subtitle {
  color: var(--text-color) !important;
}

@keyframes colorScale {
  from {
  }

  to {
  }
}
</style>
