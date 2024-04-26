import { defineNuxtModule, addComponent } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "lucide-nuxt",
    configKey: "lucide",
  },
  defaults: {},
  setup(_options, _nuxt) {
    import("lucide-vue-next").then(({ icons }) => {
      const keys = Object.keys(icons);

      keys.forEach((key) => {
        addComponent({
          name: key,
          filePath: "lucide-vue-next",
          export: key,
        });
      });
    });
  },
});
