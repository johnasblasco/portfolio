/** @type {import('tailwindcss').Config} */
export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
            colors: {
                  primary : '#a89dce',
                  secondary: "#6d3b76",
                  accent: "#ad5ca2",
                  background: "#0f0d1a",
                  text : '#e8e6f2',
            },
           
        },
      },
      plugins: [],
}