/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark War Survival Theme - Post-Apocalyptic Military
        creed: {
          // Dark backgrounds
          darker: '#0a0e14',
          dark: '#0f1419',
          base: '#151a21',
          light: '#1a2129',
          lighter: '#232b36',
          // Accent colors - Military/Tactical
          primary: '#ff6b35', // Warning orange/red
          secondary: '#f7931e', // Amber alert
          accent: '#00d9ff', // Tactical cyan
          success: '#4ade80', // Mission success green
          danger: '#ef4444', // Critical red
          warning: '#facc15', // Caution yellow
          // Text colors
          muted: '#6b7280',
          text: '#e5e7eb',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'], // Military/tactical font
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-accent': '0 0 20px rgba(0, 217, 255, 0.3)',
        'tactical': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
