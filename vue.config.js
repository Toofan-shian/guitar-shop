const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:5000/'
  }
})

// module.exports = {
//   ...module.exports,
//   devServer: {
//     proxy: 'http://localhost:5000/'
//   }
// }