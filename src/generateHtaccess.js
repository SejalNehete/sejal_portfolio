const fs = require('fs');

const generateHtaccess = () => {
  const htaccessContent = `
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
    # Other rules or configurations...
  `;

  fs.writeFile('./build/.htaccess', htaccessContent, (err) => {
    if (err) {
      console.error('Error generating .htaccess file:', err);
    } else {
      console.log('.htaccess file generated successfully!');
    }
  });
};

generateHtaccess();
