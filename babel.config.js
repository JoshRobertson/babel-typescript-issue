module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    ["@babel/proposal-decorators", { legacy: true }],
    ["@babel/proposal-class-properties", { loose: true }],
    ["@babel/transform-runtime", { helpers: false, useESModules: true }],
    ["@babel/transform-regenerator", { async: false }]
  ]
};
