import fs from 'fs';
import path from 'path';

const distDir = 'dist';

function patchHtml(html) {
  // GitHub Pages project sites are served from /<repo>/.
  // Make all asset paths relative so the bundle works under any basePath.
  return html
    .replaceAll('src="/_expo/', 'src="./_expo/')
    .replaceAll("src='/_expo/", "src='./_expo/")
    .replaceAll('href="/_expo/', 'href="./_expo/')
    .replaceAll("href='/_expo/", "href='./_expo/")
    .replaceAll('href="/assets/', 'href="./assets/')
    .replaceAll("href='/assets/", "href='./assets/")
    .replaceAll('src="/assets/', 'src="./assets/')
    .replaceAll("src='/assets/", "src='./assets/")
    .replaceAll('href="/favicon.ico"', 'href="./favicon.ico"')
    .replaceAll("href='/favicon.ico'", "href='./favicon.ico'");
}

for (const entry of fs.readdirSync(distDir)) {
  if (!entry.endsWith('.html')) {
    continue;
  }

  const filePath = path.join(distDir, entry);
  const html = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, patchHtml(html));
  console.log('Patched', filePath);
}

const webBundleDir = path.join(distDir, '_expo', 'static', 'js', 'web');
for (const entry of fs.readdirSync(webBundleDir)) {
  if (!entry.endsWith('.js')) {
    continue;
  }

  const filePath = path.join(webBundleDir, entry);
  const bundle = fs.readFileSync(filePath, 'utf8');
  const patchedBundle = bundle.replaceAll('uri:"/assets/', 'uri:"./assets/');
  fs.writeFileSync(filePath, patchedBundle);
  console.log('Patched', filePath);
}

// Prevent GitHub Pages' default Jekyll processing from hiding `_expo/`.
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('Wrote', path.join(distDir, '.nojekyll'));
