import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const masterPath = path.join(root, 'assets/branding/tixpy-canopi-logo-master.svg');
const brandingDir = path.join(root, 'assets/branding');
const assetsDir = path.join(root, 'assets');

const masterSvg = fs.readFileSync(masterPath, 'utf8');

const variantMap = {
  full: {
    full: 'inline',
    icon: 'none',
    favicon: 'none',
  },
  icon: {
    full: 'none',
    icon: 'inline',
    favicon: 'none',
  },
  favicon: {
    full: 'none',
    icon: 'none',
    favicon: 'inline',
  },
};

function buildVariant(variant, transparentBackground = false) {
  const visibility = variantMap[variant];
  if (!visibility) {
    throw new Error(`Unknown variant: ${variant}`);
  }

  let svg = masterSvg
    .replace('.full-variant { display: inline; }', `.full-variant { display: ${visibility.full}; }`)
    .replace('.icon-variant { display: none; }', `.icon-variant { display: ${visibility.icon}; }`)
    .replace('.favicon-variant { display: none; }', `.favicon-variant { display: ${visibility.favicon}; }`);

  if (transparentBackground) {
    svg = svg.replace(/\s*<rect id="bg" class="bg-rect" x="0" y="0" width="1400" height="1000" \/>\n/, '\n');
  }

  return Buffer.from(svg, 'utf8');
}

async function renderPng(svgBuffer, outPath, width, height) {
  await sharp(svgBuffer, { density: 400 })
    .resize(width, height, {
      fit: 'contain',
      background: { r: 242, g: 231, b: 223, alpha: 1 },
    })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function main() {
  await fs.promises.mkdir(brandingDir, { recursive: true });
  await fs.promises.mkdir(assetsDir, { recursive: true });

  const fullSvg = buildVariant('full');
  const iconSvg = buildVariant('icon');
  const faviconSvg = buildVariant('favicon');
  const iconTransparentSvg = buildVariant('icon', true);

  await renderPng(fullSvg, path.join(brandingDir, 'tixpy-canopi-logo-master.png'), 1400, 1000);
  await renderPng(iconSvg, path.join(brandingDir, 'tixpy-canopi-square-1024.png'), 1024, 1024);
  await renderPng(iconSvg, path.join(brandingDir, 'tixpy-canopi-icon-512.png'), 512, 512);
  await renderPng(iconSvg, path.join(brandingDir, 'tixpy-canopi-icon-192.png'), 192, 192);
  await renderPng(iconSvg, path.join(brandingDir, 'tixpy-canopi-icon-180.png'), 180, 180);
  await renderPng(iconSvg, path.join(brandingDir, 'tixpy-canopi-icon-152.png'), 152, 152);
  await renderPng(faviconSvg, path.join(brandingDir, 'tixpy-canopi-favicon-32.png'), 32, 32);
  await renderPng(faviconSvg, path.join(brandingDir, 'tixpy-canopi-favicon-16.png'), 16, 16);

  await renderPng(iconSvg, path.join(assetsDir, 'icon.png'), 1024, 1024);
  await sharp(iconTransparentSvg, { density: 400 })
    .resize(1024, 1024, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(path.join(assetsDir, 'adaptive-icon.png'));
  await renderPng(faviconSvg, path.join(assetsDir, 'favicon.png'), 32, 32);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
