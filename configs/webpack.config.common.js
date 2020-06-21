const path = require('path');

const rootPath = process.cwd();

module.exports = {
    rootPath: process.cwd(),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.sass', '.pcss', '.module.scss', '.svg'],
        alias: {
            Src: path.join(rootPath, './src/'),
            Components: path.join(rootPath, './src/client/components/'),
            Constants: path.join(rootPath, './src/constants/'),
            Assets: path.join(rootPath, './src/assets/'),
            Fonts: path.join(rootPath, './src/assets/fonts/'),
            Blocks: path.join(rootPath, './src/client/blocks/'),
            Forms: path.join(rootPath, './src/client/forms/'),
            Pages: path.join(rootPath, './src/client/pages/'),
            Actions: path.join(rootPath, './src/actions/'),
            Reducers: path.join(rootPath, './src/reducers/'),
            Selectors: path.join(rootPath, './src/selectors/'),
            Types: path.join(rootPath, './src/types/'),
            Utils: path.join(rootPath, './src/utils/'),
        }
    }
};
