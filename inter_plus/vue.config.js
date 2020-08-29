module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy:"http://27.0.0.1:8000/",
  },
};