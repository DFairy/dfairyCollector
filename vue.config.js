module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "./src/assets/scss/variable.scss" ;`
        }
      }
    }
  }
  