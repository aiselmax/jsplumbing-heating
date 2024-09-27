const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|bmp|webp)$/i, // Bilddateitypen hinzufügen
          type: 'asset/resource', // Webpack Asset Module verwenden
        },
      ],
    },
  },
})