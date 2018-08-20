module.exports = {
    title: 'Styleguidist',
    styleguideDir: "public/styleguidist",
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules'
                }
            ]
        }
    }
};