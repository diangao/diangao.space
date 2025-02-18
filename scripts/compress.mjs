import sharp from 'sharp';

sharp('public/images/projects/Get-FurWell-Today.png')
  .resize(800, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .webp({ quality: 80 })
  .toFile('public/images/projects/furwell-compressed.webp')
  .then(info => console.log('Compression complete:', info))
  .catch(err => console.error('Error during compression:', err)); 