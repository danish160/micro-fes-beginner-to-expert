const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
// module.exports = {
//   name: "app1",
//   exposes: {
//     "./Button": "./src/Button",
//   },
//   remotes: {
//     app2: "app2@http://localhost:3002/remoteEntry.js",
//   },
//   filename: "remoteEntry.js",
//   shared: {
//     ...deps,
//     react: {
//       singleton: true,
//       requiredVersion: deps["react"],
//     },
//     "react-dom": {
//       singleton: true,
//       requiredVersion: deps["react-dom"],
//     },
//   },
// };

module.exports = {
  name: "home",
  filename: "remoteEntry.js",
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./Header": "./src/Header.jsx",
    "./Footer": "./src/Footer.jsx",
    "./products": "./src/products.js",
    "./HomeContent": "./src/HomeContent.jsx",
    "./MainLayout": "./src/MainLayout.jsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
