module.exports = {
   mode: "jit",
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         spacing: {
            "3.5": "15px"
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
