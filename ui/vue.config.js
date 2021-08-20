const host = typeof process.env.HOST === 'string' ? process.env.HOST : 'localhost';
const port = 3000

module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: `http://${host}:${port}`
      }
    }
  }
};
