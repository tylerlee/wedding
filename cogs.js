module.exports = {

  watch: {
    paths: ['src']
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
    'src/styles/main.scss': 'public/styles/main.css'
  }
};
