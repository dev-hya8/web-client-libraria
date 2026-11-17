import sharp from 'sharp';
import fs from 'fs';

async function optimize() {
  console.log('Optimizing images...');

  // 1. Feature icons (240x240 WebP)
  const icons = [
    { src: 'src/assets/rare book collections.png', out: 'src/assets/icon-rare-books.webp' },
    { src: 'src/assets/Literary cafe.png', out: 'src/assets/icon-cafe.webp' },
    { src: 'src/assets/Book event.png', out: 'src/assets/icon-events.webp' },
    { src: 'src/assets/Reading lounge.png', out: 'src/assets/icon-lounge.webp' },
  ];

  for (const item of icons) {
    if (fs.existsSync(item.src)) {
      await sharp(item.src)
        .resize(240, 240, { fit: 'cover' })
        .webp({ quality: 85, effort: 6 })
        .toFile(item.out);
      console.log(`Created ${item.out}`);
    }
  }

  // 2. Logo
  if (fs.existsSync('src/assets/Libraria Logo.jpg')) {
    await sharp('src/assets/Libraria Logo.jpg')
      .resize(160, 160, { fit: 'cover' })
      .webp({ quality: 85, effort: 6 })
      .toFile('src/assets/logo.webp');
    console.log('Created src/assets/logo.webp');
  }

  // 3. Hero images
  if (fs.existsSync('src/assets/heroimg.jpg')) {
    await sharp('src/assets/heroimg.jpg')
      .resize(1400, 788, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/hero-1400.webp');
    await sharp('src/assets/heroimg.jpg')
      .resize(768, 432, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/hero-768.webp');
    console.log('Created hero responsive WebP images');
  }

  // 4. Treasure images
  if (fs.existsSync('src/assets/Treasure.png')) {
    await sharp('src/assets/Treasure.png')
      .resize(900, 675, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/treasure-900.webp');
    await sharp('src/assets/Treasure.png')
      .resize(500, 375, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/treasure-500.webp');
    console.log('Created treasure responsive WebP images');
  }

  // 5. Coffee images
  if (fs.existsSync('src/assets/coffee.png')) {
    await sharp('src/assets/coffee.png')
      .resize(800, 800, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/coffee-800.webp');
    await sharp('src/assets/coffee.png')
      .resize(450, 450, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/coffee-450.webp');
    console.log('Created coffee responsive WebP images');
  }

  // 6. About photos
  if (fs.existsSync('src/assets/card 1 beginning.png')) {
    await sharp('src/assets/card 1 beginning.png')
      .resize(800, 1000, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/beginning-1.webp');
  }
  if (fs.existsSync('src/assets/Card 2 new.png')) {
    await sharp('src/assets/Card 2 new.png')
      .resize(800, 1000, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile('src/assets/beginning-2.webp');
  }

  // 7. Favicon
  if (fs.existsSync('public/favicon.png')) {
    await sharp('public/favicon.png')
      .resize(192, 192, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile('public/favicon-opt.png');
    fs.renameSync('public/favicon-opt.png', 'public/favicon.png');
  }

  console.log('Done optimizing images.');
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
