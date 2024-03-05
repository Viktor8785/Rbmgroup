import {header} from './header.js';
import { getObjects } from "./load-objects.js";
import {initMap, createMarkerList, deleteMarkerList, setLocation, CENTER, ZOOM} from './map.js';
import {RENT, SALE, BSALE} from './deals.js';

const photos = document.querySelectorAll(".photos_picture");
const objectPhotos = document.querySelectorAll(".object-sale_picture");

initMap().then(map => {
  const object = getObjects(RENT, 1, 1);
  const location = {
    center: [object.data[0].lon, object.data[0].lat],
    zoom: ZOOM
  }
  setLocation(location);
  deleteMarkerList(map);
  createMarkerList(object.data, map);
});

photos.forEach((photo, index) => {
  photo.addEventListener('click', (ev) => {
    objectPhotos.forEach(objectPhoto => {
      if(objectPhoto.classList.contains('object-sale_picture--active')) {
        objectPhoto.classList.remove('object-sale_picture--active');
      }
    });
    [...objectPhotos][index].classList.add('object-sale_picture--active');
  });
});

// let img = new Image();
// let watermark = new Image();
// let canvas = document.getElementById("picture");
// let ctx = canvas.getContext("2d");
// watermark.src = "../img/watermark/watermark.png";



// function loadImage(index) {
//   img.src = object.imagesPath[index];
//   img.onload = mark;
// }

// function mark () {
//     canvas.width = 1118;
//     canvas.height = 530;
//     ctx.drawImage(img, 0, 0, 1118, 530);
//     const wx = Math.floor(1118/2 - 200/2);
//     const wy = Math.floor(530/2 - 200/2);
//     ctx.drawImage(watermark, wx, wy, 200, 200);
// }

// async function onLoad() {
//   await new Promise(resolve => {
//     watermark.onload = resolve;
//   });
//   loadImage(0);
//   photos.forEach((photo, index) => {
//     photo.addEventListener('click', (ev) => {
//       loadImage(index);
//     });
//   });
// }

// onLoad();

header();
