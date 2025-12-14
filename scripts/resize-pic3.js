const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  try {
    const input = path.resolve(__dirname, '../public/images/PIC3.jpg');
    const output = path.resolve(__dirname, '../public/images/PIC3.jpg');

    console.log('Input path exists:', fs.existsSync(input));

    if (!fs.existsSync(input)) {
      console.error('Input file not found:', input);
      process.exit(1);
    }

    // Resize to max width 512 (maintain aspect ratio) and set jpeg quality to 70
    console.log('Starting resize...');
    await sharp(input)
      .resize({ width: 512, withoutEnlargement: true })
      .jpeg({ quality: 70 })
      .toFile(output + '.tmp');

    // overwrite original
    fs.renameSync(output + '.tmp', output);

    const stats = fs.statSync(output);
    console.log('Resized PIC3.jpg, new size:', (stats.size / 1024).toFixed(2) + ' KB');
  } catch (err) {
    console.error('Error in resize script:', err);
    process.exit(1);
  }
})();