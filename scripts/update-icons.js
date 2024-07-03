const fs = require('fs');
const path = require('path');

const env = process.env.APP_NAME || 'SwamiNarayan';
console.log('env: ', env);
const config = {
  SwamiNarayan: {iconDir: 'main'},
  MusicApp: {iconDir: 'music'},
}[env];

const copyFiles = (srcDir, destDir) => {
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      if (!fs.existsSync(destFile)) {
        fs.mkdirSync(destFile);
      }
      copyFiles(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
};

// Copy Android icons
const androidSrcDir = path.join(__dirname, `../icons/${config.iconDir}/android`);
const androidDestDir = path.join(__dirname, '../android/app/src/main/res');
copyFiles(androidSrcDir, androidDestDir);

// Copy iOS icons
// const iosSrcDir = path.join(__dirname, `../icons/${config.iconDir}/ios/AppIcon.appiconset`);
// const iosDestDir = path.join(__dirname, '../ios/YourApp/Images.xcassets/AppIcon.appiconset');
// copyFiles(iosSrcDir, iosDestDir);

console.log(`Icons for ${env} environment copied successfully.`);
