import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*'],
    splitting: false,
    clean: true,
    shims: true,
    outDir: 'lib',
    dts: true,
    format: 'cjs',
});
