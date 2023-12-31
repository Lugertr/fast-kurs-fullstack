import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {

    const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    };

    const fileLoader = {       
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    };

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                localIdentName: isDev ? 
                  '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:5]'
              },
            },
          },
          "sass-loader",
        ],
      };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
        ]
}