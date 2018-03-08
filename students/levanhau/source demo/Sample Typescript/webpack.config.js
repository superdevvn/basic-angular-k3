const path = require('path');
module.exports = {
    entry: './b1.ts',
    devtool : "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use : 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
