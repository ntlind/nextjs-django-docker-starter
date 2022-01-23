/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */

const webpack = require("webpack");
const css = require("@zeit/next-css");
const sass = require("@zeit/next-sass");
const images = require("next-images");
const offline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const { parsed: localEnv } = require("dotenv").config();
const rewrites = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://django:8000/:path*",
      },
    ];
  },
};

const config = {
  webpack(config) {
    // we depend on nextjs switching to webpack 4 by default. Probably they will
    // change this behavior at some future major version.
    config.node = {
      fs: "empty", // webpack4 era solution
    };

    return config;
  },
};

module.exports = withPlugins([config, css, sass, images, offline, rewrites]);
