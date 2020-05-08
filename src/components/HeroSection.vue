<template>
  <section
    class="hero is-medium is-dark color-gradient"
    :style="[colors, text]"
  >
    <img class="image-banner" :src="imageSource" alt="test" />
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
    if (textColor > 5) {
      return {
        "--text-color": "white",
        "--background": "rgba(0,0,0,0.4)"
      };
    }
    return {
      "--text-color": "black",
      "--background": "rgba(255,255,255,0.4)"
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

  get imageSource(): string {
    return (
      "https://picsum.photos/" +
      window.innerWidth +
      "/" +
      (window.innerHeight - 450) +
      ""
    );
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
.image-banner {
  position: absolute;
  height: 475px;
  width: 100vw;
  mix-blend-mode: soft-light;
}

.container {
  background: var(--background);
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 460px !important;
    margin-left: 50px !important;
  }
}
</style>
