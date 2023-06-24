import path from 'path';
import { EsbuildPlugin } from 'esbuild-loader';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

interface WebpackConfiguration extends Configuration {
  devServer: {
    static: string;
    port: number;
  };
}

/**
 * @see https://webpack.js.org/configuration/configuration-languages/
 */
export default (_, { mode }): Configuration => {
  const isProduction = mode === 'production';
  const config: WebpackConfiguration = {
    devServer: {
      static: path.resolve(__dirname, './dist'),
      port: new Date().getFullYear(),
    },
    entry: {
      index: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
    },
    optimization: {
      minimizer: [
        new EsbuildPlugin({
          target: 'es2015',
          css: true,
        }),
      ],
    },
    resolve: {
      alias: {
        react: isProduction ? 'preact/compat' : 'react',
        'react-dom': isProduction ? 'preact/compat' : 'react-dom',
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    stats: {
      modules: false,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: 'esbuild-loader',
          options: {
            minify: true,
            target: 'es2015',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        publicPath: '.',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: '*.json',
            to: path.resolve(__dirname, './dist'),
            context: path.resolve(__dirname, './src'),
          },
        ],
      }),
    ],
  };

  return config;
};
