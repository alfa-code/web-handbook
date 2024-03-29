import fs from 'fs';
import path from 'path';

export default function readAssetsManifest(): any {
    try {
        const manifestPath = path.join(process.cwd(), '.build/assets.client.json');
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const js: string[] = [];
        const css: string[] = [];

        ['vendor', 'main', 'app'].forEach((key) => {
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
