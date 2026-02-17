import { configure } from 'quasar/wrappers';

export default configure(function () {
  return {
    boot: [],
    css: ['app.sass'],
    extras: [
      'roboto-font',
      'material-icons'
    ],
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },
      vueRouterMode: 'hash',
    },
    devServer: {
      open: false
    },
    framework: {
      config: {},
      plugins: ['Notify']
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: [
        'render'
      ]
    },
    pwa: {
      workboxMode: 'GenerateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json'
    }
  }
});
