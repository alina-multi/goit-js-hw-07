const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('#gallery');

const createImageEl = images => `<li> <img src=${images.url} alt='${images.alt}' width = "500" ></li>`;
 
const createGallery = images.map(createImageEl).join('');

galleryEl.insertAdjacentHTML('afterbegin', createGallery);

galleryEl.style.listStyleType = 'none';
galleryEl.style.margin = 'auto';
galleryEl.style.width = '550px';

const containerImageEl = document.querySelectorAll('li');
containerImageEl.forEach(element => {
  element.style.marginBottom = '25px';
  element.style.border = '2px solid lightblue';
  return;
});

const imageEl = document.querySelectorAll('img');
imageEl.forEach(element => {
  element.style.display = 'block';
  element.style.margin = '25px';
  element.style.border = '3px solid lightblue';
  return;
});
