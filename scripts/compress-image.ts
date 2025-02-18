import sharp from 'sharp';
import path from 'path';

async function compressImage() {
  const inputPath = path.join(process.cwd(), 'public/images/projects/Get-FurWell-Today.png');
  const outputPath = path.join(process.cwd(), 'public/images/projects/furwell-compressed.webp');

  try {
    await sharp(inputPath)
      .resize(800, 600, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log('Image compressed successfully!');
  } catch (error) {
    console.error('Error compressing image:', error);
  }
}

compressImage(); 