const fs = require('fs');
const path = require('path');

// Skip path adjustments on Vercel deployment since files are served at the root domain level
if (process.env.VERCEL === '1') {
  console.log('Post-build: Running on Vercel. Skipping absolute-to-relative path conversion.');
  process.exit(0);
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const outDir = path.join(__dirname, 'out');

if (fs.existsSync(outDir)) {
  console.log('Post-build: Converting absolute paths to relative paths in HTML and JS/CSS files...');
  
  walkDir(outDir, (filePath) => {
    if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Determine relative path depth to root
      const relativePathToRoot = path.relative(path.dirname(filePath), outDir);
      const prefix = relativePathToRoot ? relativePathToRoot.replace(/\\/g, '/') + '/' : './';
      
      // Replace absolute paths starting with /_next/ or other assets with relative prefix
      // Format: /_next/... -> relative_prefix_here_next/...
      // Also handles main level assets like /logo-main.png, /favicon.ico, /manifest.webmanifest, etc.
      let updatedContent = content
        .replace(/(href|src|href|content|url)="\/_next\//g, `$1="${prefix}_next/`)
        .replace(/(href|src|href|content|url)='\/_next\//g, `$1='${prefix}_next/`)
        .replace(/(href|src)="\/logo-main\.png"/g, `$1="${prefix}logo-main.png"`)
        .replace(/(href|src)="\/segecha_hero_truck\.jpg"/g, `$1="${prefix}segecha_hero_truck.jpg"`)
        .replace(/(href|src)="\/segecha_fleet_dispatch\.jpg"/g, `$1="${prefix}segecha_fleet_dispatch.jpg"`)
        .replace(/(href|src)="\/segecha_warehouse_ops\.jpg"/g, `$1="${prefix}segecha_warehouse_ops.jpg"`)
        .replace(/(href|src)="\/segecha_east_africa_map\.jpg"/g, `$1="${prefix}segecha_east_africa_map.jpg"`)
        .replace(/(href|src)="\/favicon-round\.png"/g, `$1="${prefix}favicon-round.png"`)
        .replace(/(href|src)="\/favicon\.ico"/g, `$1="${prefix}favicon.ico"`)
        .replace(/(href|src)="\/manifest\.webmanifest"/g, `$1="${prefix}manifest.webmanifest"`);

      // Specifically check for dynamic link transitions inside JS chunks as well if needed
      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated paths in: ${path.relative(outDir, filePath)}`);
      }
    }
  });
  console.log('Post-build: Absolute paths successfully converted to relative!');
} else {
  console.error('Error: "out" directory not found. Run "npm run build" first.');
}
