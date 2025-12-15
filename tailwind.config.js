/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#141414',
        'netflix-dark': '#0F0F0F',
        'netflix-red': '#E50914',
        'netflix-accent': '#564D4D',
      },
      boxShadow: {
        'netflix': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'netflix-lg': '0 16px 40px rgba(0, 0, 0, 0.7)',
        'netflix-hover': '0 12px 32px rgba(229, 9, 20, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-netflix': 'pulseNetflix 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseNetflix: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(229, 9, 20, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.8)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

