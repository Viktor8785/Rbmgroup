import {header} from './header.js';

const photos = document.querySelectorAll(".photos_picture");
const objectPhotos = document.querySelectorAll(".object-sale_picture");

photos.forEach((photo, index) => {
  photo.addEventListener('click', (ev) => {
    objectPhotos.forEach(objectPhoto => {
      if(objectPhoto.classList.contains('object-sale_picture--active')) {
        objectPhoto.classList.remove('object-sale_picture--active')
      }
    });
    [...objectPhotos][index].classList.add('object-sale_picture--active');
  });
});

header();
