const path = require('path');

const rootPath = process.cwd();

module.exports = {
    rootPath: process.cwd(),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.sass', '.pcss', '.module.scss', '.svg'],
        alias: {
            Src: path.join(rootPath, './src/'),
            Components: path.join(rootPath, './src/client/components/'),
            Assets: path.join(rootPath, './src/assets/'),
            Fonts: path.join(rootPath, './src/assets/fonts/'),
        }
    }
}
