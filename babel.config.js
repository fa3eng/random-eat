module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3, proposals: true } }],
    "@babel/preset-react",
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    [
      "babel-plugin-styled-components",
      { displayName: true, fileName: false, minify: true, pure: true },
    ],
  ],
  env: { production: { plugins: ["transform-react-remove-prop-types"] } },
};
