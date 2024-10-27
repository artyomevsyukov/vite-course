import Inspect from 'vite-plugin-inspect'

export default {
  // publicDir: 'build', //Меняем папку public папка статических файлов, вит не будет их трансформировать
  plugins: [
    Inspect() // only applies in dev mode
  ]
}   