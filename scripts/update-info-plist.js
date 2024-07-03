const fs = require('fs');
const plist = require('plist');

const env = process.env.APP_NAME || 'SwamiNarayan';
const config = {
  SwamiNarayan: {APP_NAME: 'Swaminarayan', APP_ID: 'com.myapp.swaminarayan'},
  MusicApp: {APP_NAME: 'MusicApp', APP_ID: 'com.myapp.musicapp'},
}[env];

const infoPlistPath = '../ios/AllInOneApp/Info.plist'; // Update this path as per your project structure
const infoPlist = plist.parse(fs.readFileSync(infoPlistPath, 'utf8'));

infoPlist.CFBundleDisplayName = config.APP_NAME;
infoPlist.CFBundleIdentifier = config.APP_ID;

fs.writeFileSync(infoPlistPath, plist.build(infoPlist));
