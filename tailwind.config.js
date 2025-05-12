// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 1.5s ease-in-out',
//         'bounce-in': 'bounceIn 1s ease-in-out',
//         'spin-slow': 'spin 4s linear infinite',
//         'pulse-slow': 'pulse 3s ease-in-out infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0 },
//           '100%': { opacity: 1 },
//         },
//         bounceIn: {
//           '0%': { transform: 'scale(0.9)', opacity: 0 },
//           '50%': { transform: 'scale(1.1)', opacity: 0.5 },
//           '100%': { transform: 'scale(1)', opacity: 1 },
//         },
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-to-r': 'linear-gradient(to right, #3b82f6, #9333ea)',
//       },
//       colors: {
//         'brand-blue': '#3b82f6',
//         'brand-purple': '#9333ea',
//       },
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'],
//         inter: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all components and pages
  ],
  theme: {
    extend: {
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'bounce-in': 'bounceIn 1s ease-in-out',
        'spin-slow': 'spin 4s linear infinite', // Slower spin for sun/moon
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      // Keyframes for custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 0.5 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      // Background options
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, #3b82f6, #9333ea)', // blue to purple
      },
      // Custom colors (optional branding)
      colors: {
        'brand-blue': '#3b82f6',
        'brand-purple': '#9333ea',
      },
      // Custom font family
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      /* tailwind.config.js: */
theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
},

      // Custom container padding for responsive layout
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}