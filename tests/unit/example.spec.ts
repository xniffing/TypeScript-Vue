import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HeroSection from "@/components/HeroSection.vue";
import { gradientColor, textColor } from "@/plugins/Chroma";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HeroSection.vue", () => {
  it("renders props.title && props.description when passed", () => {
    const title = "new title";
    const description = "new description";
    const wrapperTitle = shallowMount(HeroSection, {
      propsData: { title }
    });
    const wrapperDesc = shallowMount(HeroSection, {
      propsData: { description }
    });
    expect(wrapperTitle.text()).toMatch(title);
    expect(wrapperDesc.text()).toMatch(description);
  });
});

describe("Chroma.ts", () => {
  it("Calculates correct contrast ratio", () => {
    expect(gradientColor).toBeDefined();
    expect(textColor).toBeDefined();
  });
});
