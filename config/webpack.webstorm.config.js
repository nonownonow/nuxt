const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".vue", ".json", ".scss", ".css"],
    alias: {
      "@": path.resolve(__dirname, "..")
    }
  }
};
