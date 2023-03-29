import type { Format } from 'tsup'
import { defineConfig } from 'tsup'

const outExtensionFn = ({ format }: { format: Format }) => {
  if (format === 'esm') return { js: `.mjs` }
  if (format === 'iife') return { js: `.${format}.js` }
  return { js: `.cjs` }
}

export default defineConfig([
  {
    entry: ['src'],
    platform: 'node',
    clean: true,
    dts: true,
    external: [],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    outExtension: outExtensionFn,
  },
])
