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

sharp('public/images/projects/clonely.png')
  .resize(800, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .webp({ quality: 80 })
  .toFile('public/images/projects/clonely-compressed.webp')
  .then(info => console.log('Compression complete:', info))
  .catch(err => console.error('Error during compression:', err));

sharp('public/images/projects/agent_state_representation.png')
  .resize(1200, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .webp({
    quality: 90,
    effort: 6
  })
  .toFile('public/images/projects/agent-state-compressed.webp')
  .then(info => console.log('Compression complete:', info))
  .catch(err => console.error('Error during compression:', err)); 