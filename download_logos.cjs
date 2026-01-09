const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  'shimano.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Shimano_logo.svg/512px-Shimano_logo.svg.png',
  'sram.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sram_logo.svg/512px-Sram_logo.svg.png',
  'rockshox.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/RockShox_logo.svg/512px-RockShox_logo.svg.png',
  'caloi.png': 'https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Caloi.png',
  'tsw.png': 'https://official-lp.com.br/wp-content/uploads/2025/10/tsw-logo.png',
  'first.png': 'https://official-lp.com.br/wp-content/uploads/2025/10/first-logo.png'
};

const dir = path.join(__dirname, 'client', 'public', 'logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

Object.entries(logos).forEach(([filename, url]) => {
  const file = fs.createWriteStream(path.join(dir, filename));
  https.get(url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      https.get(response.headers.location, (res) => res.pipe(file));
    } else {
      response.pipe(file);
    }
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});
