import { theme } from './src/config/theme/themeVariables';

const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {

      webpackConfig.plugins.forEach(plugin => {
        if (plugin instanceof InlineChunkHtmlPlugin) {
          plugin.tests =  [ /.+[.]js/ ]
        }
      })

      const oneOfRuleIdx = webpackConfig.module.rules.findIndex(rule => !!rule.oneOf);
      webpackConfig.module.rules[oneOfRuleIdx].oneOf.forEach(loader => {
        if (loader.test && loader.test.test && (loader.test.test("test.module.css") || loader.test.test("test.module.scss"))) {
          loader.use.forEach(use => {
            if (use.loader && use.loader.includes('mini-css-extract-plugin')) {
              use.loader = require.resolve('style-loader');
            }
          })
        }
      })
      return webpackConfig
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...theme,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {

      webpackConfig.plugins.forEach(plugin => {
        if (plugin instanceof InlineChunkHtmlPlugin) {
          plugin.tests =  [ /.+[.]js/ ]
        }
      })

      const oneOfRuleIdx = webpackConfig.module.rules.findIndex(rule => !!rule.oneOf);
      webpackConfig.module.rules[oneOfRuleIdx].oneOf.forEach(loader => {
        if (loader.test && loader.test.test && (loader.test.test("test.module.css") || loader.test.test("test.module.scss"))) {
          loader.use.forEach(use => {
            if (use.loader && use.loader.includes('mini-css-extract-plugin')) {
              use.loader = require.resolve('style-loader');
            }
          })
        }
      })
      return webpackConfig
    }
  },
}
