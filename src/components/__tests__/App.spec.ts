import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("Blog.vue", () => {
  it("should renders inner footer text", () => {
    const wrapper = shallowMount(App);
    const logo = wrapper.find("footer");
    expect(logo.text()).toContain("2022");
  });
});
