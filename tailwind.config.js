module.exports = {
  content: ["./ckanext/subakdc/**/*.{html,js}"],
  important: true,
  theme: {
    fontFamily: {
      'default': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Comfortaa', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'heading': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'monospace']
    },
    extend: {
      colors: {
        darkblue: '#0f2b43',
        orange: '#c95e3b',
        grey: '#eeeeec',
        white: '#ffffff',
        teal: '#1d838b',
        pink: '#b0566b',
        blue: '#1b658f',
        lightblue: '#3bc8ec'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
