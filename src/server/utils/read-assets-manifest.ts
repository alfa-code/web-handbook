import fs from 'fs';
import path from 'path';

export default function readAssetsManifest() {
  try {
    const manifestPath = path.join(process.cwd(), '.dist/assets.client.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const js: string[] = [];
    const css: string[] = [];

    ['vendor', 'main'].forEach((key) => {
      if (!manifest[key]) {
        return;
      }
      if (manifest[key].js) {
        js.push(manifest[key].js);
      }
      if (manifest[key].css) {
        css.push(manifest[key].css);
      }
    });

    return {
      js,
      css,
    };
  } catch (e) {
    return {
      js: [],
      css: [],
    };
  }
}
