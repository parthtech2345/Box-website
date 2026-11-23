const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  console.log('Extracting shield-only emblem from master...');

  // 1. Extract only the top shield (avoiding the text underneath: AAVRIT, PACKAGING, Tagline)
  // The shield is located in the top 380px of aavrit-emblem-transparent.png
  const rawShield = await sharp('public/home/sustainability/aavrit-emblem-transparent.png')
    .extract({ left: 0, top: 0, width: 490, height: 380 })
    .toBuffer();

  const trimmedShield = await sharp(rawShield)
    .trim()
    .toBuffer({ resolveWithObject: true });

  const { width: sW, height: sH } = trimmedShield.info;
  console.log(`Shield isolated: ${sW}x${sH} (strictly shield only, no wordmark/text)`);

  // 2. Size the shield to sit prominently inside 512x512 canvas
  // Circle badge: radius 248 centered at (256, 256)
  const targetH = 376;
  const targetW = Math.round((sW / sH) * targetH);
  console.log(`Scaled shield inside badge: ${targetW}x${targetH}`);

  const resizedShield = await sharp(trimmedShield.data)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  // 3. Create crisp pure white circular badge with subtle border
  const svgCircle = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="256" r="248" fill="#FFFFFF" stroke="#E4DED3" stroke-width="8"/>
    </svg>
  `.trim();

  const master512 = await sharp(Buffer.from(svgCircle))
    .composite([{ input: resizedShield, gravity: 'center' }])
    .png()
    .toBuffer();

  // 4. Generate all standard icon files
  // Apple touch icon (180x180)
  const p180 = await sharp(master512)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-touch-icon.png', p180);
  fs.writeFileSync('src/app/apple-icon.png', p180);

  // 192 & 512 PWA icons
  fs.writeFileSync('public/icon-512.png', master512);
  const p192 = await sharp(master512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192.png', p192);

  // 48x48 icon
  const p48 = await sharp(master512)
    .resize(48, 48)
    .sharpen({ sigma: 0.7 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon-48x48.png', p48);
  fs.writeFileSync('public/icon.png', p48);
  fs.writeFileSync('src/app/icon.png', p48);

  // 32x32 icon
  const p32 = await sharp(master512)
    .resize(32, 32)
    .sharpen({ sigma: 0.85 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon-32x32.png', p32);

  // 16x16 icon
  const p16 = await sharp(master512)
    .resize(16, 16)
    .sharpen({ sigma: 0.95 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon-16x16.png', p16);

  // 5. Build proper multi-resolution favicon.ico (16, 32, 48)
  function buildIco(buffers) {
    const count = buffers.length;
    let offset = 6 + count * 16;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // Image type: 1 = ICO
    header.writeUInt16LE(count, 4); // Number of images

    const dirEntries = [];
    for (const { size, buffer } of buffers) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
      entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
      entry.writeUInt8(0, 2); // Color palette
      entry.writeUInt8(0, 3); // Reserved
      entry.writeUInt16LE(1, 4); // Color planes
      entry.writeUInt16LE(32, 6); // Bits per pixel
      entry.writeUInt32LE(buffer.length, 8); // Size of image data
      entry.writeUInt32LE(offset, 12); // Offset of image data
      dirEntries.push(entry);
      offset += buffer.length;
    }
    return Buffer.concat([header, ...dirEntries, ...buffers.map(b => b.buffer)]);
  }

  const ico = buildIco([
    { size: 16, buffer: p16 },
    { size: 32, buffer: p32 },
    { size: 48, buffer: p48 }
  ]);

  fs.writeFileSync('src/app/favicon.ico', ico);
  fs.writeFileSync('public/favicon.ico', ico);

  // Clean up any test/scratch files in public
  if (fs.existsSync('public/home/sustainability/shield-only.png')) {
    fs.unlinkSync('public/home/sustainability/shield-only.png');
  }
  if (fs.existsSync('public/home/sustainability/shield-trimmed.png')) {
    fs.unlinkSync('public/home/sustainability/shield-trimmed.png');
  }

  console.log('Shield-only high-contrast favicon successfully generated across all resolutions!');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
