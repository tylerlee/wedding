module.exports = {

  watch: {
    paths: ['assets']
  },

  pipe: [
    {
      name: 'sass',
      only: 'assets/**/*.scss'
    }
  ],

  builds: {
    'assets/styles/main.scss': 'public/styles/main.css',
    'assets/styles/animate.css': 'public/styles/animate.css'
  }
};
