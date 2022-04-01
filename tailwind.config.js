module.exports = {
  mode: 'jit',
  content: [
    './**/*.{html, js, ts, vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
