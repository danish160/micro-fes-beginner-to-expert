const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  remotes: {
    app2: "app2@http://localhost:3000/remoteEntry.js",
  },
  // shared: {
  //   ...deps,
  //   react: {
  //     singleton: true,
  //     requiredVersion: deps["react"],
  //   },
  //   "react-dom": {
  //     singleton: true,
  //     requiredVersion: deps["react-dom"],
  //   },
  // },
};
