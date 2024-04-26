import { defineNuxtModule, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'lucide-nuxt',
    configKey: 'lucide',
  },
  defaults: {
    prefix: 'Icons',
  },
  setup(options, _nuxt) {
    import('lucide-vue-next').then(({ icons }) => {
      const keys = Object.keys(icons)

      keys.forEach((key) => {
        addComponent({
          name: `${options.prefix}${key}`,
          filePath: 'lucide-vue-next',
          export: key,
        })
      })
    })
  },
})
