const fs = require('fs');
const images = fs.readdirSync('./images');
const gallery = images
    .map(image => `<img src="${image}" width="200" height="200">`)
    .join("\n");

const readmePath = './README.md';
const startMarker = '*';
const endMarker = '&';

const currentContent = fs.readFileSync(readmePath, 'utf8');

const newGalleryHTML = gallery 

const updatedContent = currentContent.replace(
    new RegExp(`${startMarker}[\\s\\S]*${endMarker}`),
    `${startMarker}\n${newGalleryHTML}\n${endMarker}`
);