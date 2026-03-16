import fs from 'fs';

const p = 'dist/index.html';
let html = fs.readFileSync(p, 'utf8');

// GitHub Pages project sites are served from /<repo>/.
// Make all asset paths relative so the bundle works under any basePath.
html = html.replaceAll('src="/_expo/', 'src="./_expo/');
html = html.replaceAll("src='/_expo/", "src='./_expo/");
html = html.replaceAll('href="/_expo/', 'href="./_expo/');
html = html.replaceAll("href='/_expo/", "href='./_expo/");

html = html.replaceAll('href="/assets/', 'href="./assets/');
html = html.replaceAll("href='/assets/", "href='./assets/");
html = html.replaceAll('src="/assets/', 'src="./assets/');
html = html.replaceAll("src='/assets/", "src='./assets/");

html = html.replaceAll('href="/favicon.ico"', 'href="./favicon.ico"');
html = html.replaceAll("href='/favicon.ico'", "href='./favicon.ico'");

fs.writeFileSync(p, html);
console.log('Patched', p);
