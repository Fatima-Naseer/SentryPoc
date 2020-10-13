const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    append: '//# sourceMappingURL=[url]',
  },
  devtool: 'source-map',
  // other configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  configureWebpack: {
    plugins: [
      new SentryWebpackPlugin({
        // sentry-cli configuration
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'fatimaindustry',
        project: 'react-native',

        // webpack specific configuration
        release: process.env.RELEASE,
        include: '.',
        ignore: ['node_modules', 'webpack.config.js'],
        configFile: 'sentry.properties',
        dryRun: true,
      }),
    ],
  },
};
