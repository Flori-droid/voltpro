module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#321D13',
        charcoal: '#171717',
        copper: '#B87345',
        amber: '#F2A541',
        cream: '#F5EFE6',
        stone: '#A8A29E',
        white: '#FFFFFF',
      },
      boxShadow: {
        premium: '0 18px 40px rgba(21, 15, 12, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
