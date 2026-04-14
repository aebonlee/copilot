import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'og');
mkdirSync(OUT_DIR, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

// 5 color variants
const THEMES = [
  { name: 'default',  bg: '#0F1729', accent: '#1B7F37', label: 'Green (Default)' },
  { name: 'blue',     bg: '#0B1426', accent: '#0078D4', label: 'Copilot Blue' },
  { name: 'purple',   bg: '#140E26', accent: '#8B5CF6', label: 'Purple' },
  { name: 'orange',   bg: '#1A1008', accent: '#D97706', label: 'Orange' },
  { name: 'red',      bg: '#1A0A0E', accent: '#DC2626', label: 'Red' },
];

async function generateOG(theme) {
  const { name, bg, accent } = theme;

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const accentRgb = hexToRgb(accent);
  const bgRgb = hexToRgb(bg);

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(${Math.min(bgRgb.r + 15, 255)},${Math.min(bgRgb.g + 15, 255)},${Math.min(bgRgb.b + 20, 255)});stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(${Math.min(accentRgb.r + 40, 255)},${Math.min(accentRgb.g + 40, 255)},${Math.min(accentRgb.b + 40, 255)});stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />

  <!-- Glow circles -->
  <circle cx="900" cy="200" r="250" fill="${accent}" opacity="0.08" filter="url(#glow)" />
  <circle cx="300" cy="500" r="200" fill="${accent}" opacity="0.05" filter="url(#glow)" />

  <!-- Grid pattern -->
  <g opacity="0.04" stroke="${accent}" stroke-width="0.5">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${HEIGHT}" />`).join('')}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="${WIDTH}" y2="${i * 60}" />`).join('')}
  </g>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="4" fill="url(#accentGrad)" />

  <!-- Logo area -->
  <rect x="80" y="80" width="56" height="56" rx="14" fill="${accent}" opacity="0.9" />
  <text x="108" y="116" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="white" text-anchor="middle">C</text>

  <!-- Brand -->
  <text x="150" y="108" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${accent}">Copilot</text>
  <text x="283" y="108" font-family="Arial, sans-serif" font-size="24" font-weight="600" fill="#94A3B8">Master</text>

  <!-- Title -->
  <text x="80" y="260" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="white">Microsoft Copilot</text>
  <text x="80" y="325" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="${accent}">Master Guide</text>

  <!-- Description -->
  <text x="80" y="395" font-family="Arial, sans-serif" font-size="20" fill="#94A3B8">GitHub Copilot · M365 Copilot · Teams · Power Platform</text>
  <text x="80" y="425" font-family="Arial, sans-serif" font-size="20" fill="#94A3B8">Copilot Studio · Windows Copilot · Work Automation</text>

  <!-- Bottom bar -->
  <rect x="80" y="500" width="200" height="3" rx="1.5" fill="url(#accentGrad)" />
  <text x="80" y="540" font-family="Arial, sans-serif" font-size="16" fill="#64748B">copilot.dreamitbiz.com</text>
  <text x="80" y="568" font-family="Arial, sans-serif" font-size="14" fill="#475569">DreamIT Biz · Comprehensive Copilot Learning Platform</text>

  <!-- Right side decorative elements -->
  <rect x="900" y="240" width="220" height="140" rx="12" fill="${accent}" opacity="0.06" stroke="${accent}" stroke-opacity="0.15" stroke-width="1" />
  <text x="960" y="290" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${accent}" opacity="0.6">13+</text>
  <text x="960" y="315" font-family="Arial, sans-serif" font-size="14" fill="#64748B">Learning Guides</text>
  <text x="960" y="355" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${accent}" opacity="0.6">80+</text>
  <text x="960" y="375" font-family="Arial, sans-serif" font-size="14" fill="#64748B">Topics</text>

  <!-- Bottom border -->
  <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="url(#accentGrad)" />
</svg>`;

  const outputPath = join(OUT_DIR, `og-${name}.png`);
  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outputPath);
  console.log(`  Generated: og-${name}.png`);
}

console.log('Generating OG images...');
for (const theme of THEMES) {
  await generateOG(theme);
}

// Also create default og-image.png (copy of default)
const defaultPath = join(OUT_DIR, 'og-default.png');
const mainPath = join(OUT_DIR, '..', 'og-image.png');
const { default: fs } = await import('fs');
fs.copyFileSync(defaultPath, mainPath);
console.log('  Copied: og-image.png (default)');
console.log('Done! 5 OG images + 1 default generated.');
