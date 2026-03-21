import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const projectBase = '/tixpy-canopi';

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
    .replaceAll('href="/favicon.ico"', `href="${projectBase}/tixpy-canopi-tab.ico"`)
    .replaceAll("href='/favicon.ico'", `href='${projectBase}/tixpy-canopi-tab.ico'`)
    .replaceAll('href="/favicon.ico?v=', `href="${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll("href='/favicon.ico?v=", `href='${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll('href="/tixpy-canopi-tab.ico"', `href="${projectBase}/tixpy-canopi-tab.ico"`)
    .replaceAll("href='/tixpy-canopi-tab.ico'", `href='${projectBase}/tixpy-canopi-tab.ico'`)
    .replaceAll('href="/tixpy-canopi-tab.ico?v=', `href="${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll("href='/tixpy-canopi-tab.ico?v=", `href='${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll('href="./favicon.ico"', `href="${projectBase}/tixpy-canopi-tab.ico"`)
    .replaceAll("href='./favicon.ico'", `href='${projectBase}/tixpy-canopi-tab.ico'`)
    .replaceAll('href="./favicon.ico?v=', `href="${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll("href='./favicon.ico?v=", `href='${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll('href="./tixpy-canopi-tab.ico"', `href="${projectBase}/tixpy-canopi-tab.ico"`)
    .replaceAll("href='./tixpy-canopi-tab.ico'", `href='${projectBase}/tixpy-canopi-tab.ico'`)
    .replaceAll('href="./tixpy-canopi-tab.ico?v=', `href="${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll("href='./tixpy-canopi-tab.ico?v=", `href='${projectBase}/tixpy-canopi-tab.ico?v=`)
    .replaceAll('href="./assets/branding/', `href="${projectBase}/assets/branding/`)
    .replaceAll("href='./assets/branding/", `href='${projectBase}/assets/branding/`);
}

function patchWebBundle(bundle) {
  return bundle
    .replaceAll(
      'e.getUrlWithReactNavigationConcessions=function(t,n=""){',
      'e.getUrlWithReactNavigationConcessions=function(t,n="tixpy-canopi"){'
    )
    .replaceAll(
      'function o(t,a=""){return a?t.replace(/^\\/+/g,\'/\').replace(new RegExp(`^\\\\/?${(0,n.default)(a)}`,\'g\'),\'\'):t}',
      'function o(t,a="tixpy-canopi"){return a?t.replace(/^\\/+/g,\'/\').replace(new RegExp(`^\\\\/?${(0,n.default)(a)}`,\'g\'),\'\'):t}'
    )
    .replaceAll(
      'e.appendBaseUrl=function(t,n=""){if(n)return`/${n.replace(/^\\/+/,\'\').replace(/\\/$/,\'\')}${t}`;return t}',
      'e.appendBaseUrl=function(t,n="tixpy-canopi"){if(n)return`/${n.replace(/^\\/+/,\'\').replace(/\\/$/,\'\')}${t}`;return t}'
    )
    .replaceAll('uri:"/assets/', 'uri:"./assets/');
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
  const patchedBundle = patchWebBundle(bundle);
  fs.writeFileSync(filePath, patchedBundle);
  console.log('Patched', filePath);
}

// Prevent GitHub Pages' default Jekyll processing from hiding `_expo/`.
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('Wrote', path.join(distDir, '.nojekyll'));
