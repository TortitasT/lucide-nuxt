import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/default', import.meta.url)),
  })

  it('renders some icon', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<svg xmlns="http://www.w3.org/2000/svg"')
  })
})
