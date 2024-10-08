import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
    entryPoints: [
        'src/index.ts',
        'src/contract/**',
        '!src/contract/__tests__/**',
        'src/utils/**',
        'src/schemas/index.ts',
        'src/types.ts',
    ],
    splitting: true,
    format: ['cjs', 'esm'],
    dts: true,
    bundle: true,
    clean: true,
    sourcemap: true,
    minify: true,
    onSuccess: watch
        ? 'node --enable-source-maps dist/index ys.js --inspect'
        : undefined,
}))
