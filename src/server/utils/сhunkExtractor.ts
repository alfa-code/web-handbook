import path from 'path';

import { ChunkExtractor } from '@loadable/server'

const nodeStats = path.resolve('./.build/loadable-stats.json');
const webStats = path.resolve('./.build/static/loadable-stats.json');

// рабочий вариант
//export const extractor = new ChunkExtractor({ statsFile })

export const nodeExtractor  = 0;// = new ChunkExtractor({ statsFile: nodeStats });
export const webExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['app'] });

// const scriptTags = extractor.getScriptTags()
// console.log('scriptTags 11111111111111111111111:', scriptTags)
// const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
// console.log('linkTags 2222222222222:', linkTags)
// const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
// console.log('styleTags 3333333333333:', styleTags)

// export const extractor = new ChunkExtractor({ statsFile, entrypoints: [
//     'elements-list',
//     'html-element',
//     'attribute-info',
//     'attribute-list'
// ] })
















// Wrap your application using "collectChunks"
// const jsx = extractor.collectChunks(<YourApp />)
// // Render your application
// const html = renderToString(jsx)


// // You can now collect your script tags
// const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
// // You can also collect your "preload/prefetch" links
// const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
// // And you can even collect your style tags (if you use "mini-css-extract-plugin")
// const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
