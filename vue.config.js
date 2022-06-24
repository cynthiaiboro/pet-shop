const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      theme: {
        themes: {
          light: {
            primary: "#4EC690",
            secondary: "#EDF5F1",
          },
          dark: {
            primary: "#4EC690",
            secondary: "#EDF5F1",
          },
        },
      },
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
