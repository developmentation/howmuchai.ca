module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2dd4bf',
        'secondary': '#3b82f6',
        'accent': '#8b5cf6',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(45, 212, 191, 0.5)',
        'glow-hover': '0 0 25px rgba(45, 212, 191, 0.8)',
      },
      animation: {
        'gradient-shift': 'gradientShift 15s infinite',
        'pulse-slow': 'pulse 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
