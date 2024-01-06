/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
  // corePlugins: {
  //   // Remove Tailwind CSS's preflight style so it can use the antd's preflight instead (reset.css).
  //   preflight: false
  // }
}
