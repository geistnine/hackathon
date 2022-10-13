alert("Script.js is running yo!")
// select the video element in our DOM
document.querySelector('video-title-link')
//document.querySelector('thumbnail')
let kat = document.createElement('div');
kat.setAttribute('id', 'follow')
kat.setAttribute('src', )

const videoToChange = document.querySelectorAll('a', 'span');
// change the src attribute to https://www.youtube.com/watch?v=dQw4w9WgXcQ
videoToChange.forEach((link) => {
  link.removeAttribute('href');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  link.removeAttribute('src');
  link.setAttribute('src', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})
// videoToChange.removeAttribute('href')
// videoToChange.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
