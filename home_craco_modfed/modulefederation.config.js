const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "home",
  filename: "remoteEntry.js",
  remotes: {
    home: process.env.SRC_home,
    pdp: process.env.SRC_pdp,
    cart: process.env.SRC_cart,
  },
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.js",
    "./HomeContent": "./src/HomeContent.tsx",
    "./MainLayout": "./src/MainLayout.tsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
