export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Archivos donde Tailwind buscará clases
  theme: {
    extend: {
      fontSize: {
        tiny: '0.625rem', // 10px
        huge: '10rem', // 160px
      },
      colors: {
        transparent: 'transparent',
        black: '#fff',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },

        // ...
      },
    },
  },
  plugins: [],
}
