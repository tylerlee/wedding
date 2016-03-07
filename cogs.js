module.exports = {

  watch: {
    paths: ['assets']
  },

  in: {
    scss: {
      out: 'css',
      transformers: 'sass'
    }
  },

  in: {
    hbs: {
      out: 'html',
      transformers: 'handlebars'
    }
  },

  builds: {
    'assets/styles/main.scss': 'public/styles/main.css'
  }
};
