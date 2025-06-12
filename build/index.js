import {build} from 'vite'

build({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'iconfontLoader',
      formats: ['es'],
      fileName: 'index'
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['vue', 'svgo', 'glob', 'fs'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
