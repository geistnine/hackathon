const luni = new Lunicode();
let test = luni.tools.creepify.encode('some text please god please work')
console.log(test);

alert("Script.js is running yo!")

const toZalgo = document.querySelectorAll('p');
toZalgo.forEach((text) =>{
  text.innerHTML = luni.tools.creepify.encode(text.textContent);
})

// select the video element in our DOM
document.querySelector('video-title-link')
//document.querySelector('thumbnail')
// const katContainer = document.createElement('div');
// katContainer.setAttribute('id', 'follow');
// let kat = document.createElement('img');
// kat.setAttribute('id', 'follow')
// kat.setAttribute('style', 'height: 30px; width:30px; top: 0px; left: 0px;');
//kat.setAttribute('src', 'https://lh3.googleusercontent.com/ic6wdtox8a4PEu_BwtqRv7Qh3PPHxbfEAN_oWeD3LMqrHvHAjx1wWSYMNhMFJIuSfzuMBKXN08z4ypgZUwj-ZQ5KZ1e56Zf76qEkLabwI2K1X_SeRKR1ooDZSsX28ZFWAxbE05RROKUKQiOBmPVb1BqBuV6g5Shqre5IIj3GMHwO5W4jYe_u-YYuKPTYY5Gl_O4ut7k3eceKPOu-k6RSK27wAF2fJ-MTcqyTBvMfrH2RSGiGXOf78Hm_S_VhWM_veXo3EzpIq3SxkAJH_zLwrI0nTruqWZapGt7JjGPTQeJn4ZjCKE9XDio_JEygw6ha1uP6vskUUjG3nvbvbvS2fJ8cDauZ84rWwG7BPqAagrGuk6xgrCOd53kwPT_AeAQE434wlrnYH0wCuxNUi39OPnD3uQCcL1_xHtDn8k92PipYrfAb6TRkqGpuoef5FVJJqKpjdAftnttko4gkp4VAu3Dt01nEGAw-HefXxtJVt6R7g231l67JNve8xuARYrtaI1-9L8KrQJby81slbujj8CDajyvHosFxpmSd_fDXKKuAZT7jRHwd92aIQGzTPuNegUmZTTs6fnakyV-sz9rvhJ0HimEC5USeg2TEabgF9r2O7w9ha9SG2B5xopd2vAy5fy-1IsrpgN7eqNZndLhkcM37UAARMmTHK_bs0dsvK6jTHHCiqtGi-IDY9nQe51yfotmb0E4I5dFtrDfRi9CRME3MaRbQ9MvkdibHsQj5bpcVpMIwyXb3zTT1eFLBwHsId5CHnUqpLwRt8TXe1opRlbcSr2967DSfTqDjK5IAkF3sVr1XHSjq372vaNGuDZWVh7weMOomvq7CSAHc4O-PU_2sWvJSck_kPHEjJxoMgrvIELtUxVVzNOZE0bNLRbDlR3RzzwFxmQJMwtMTQUxfcPXG7xr_4RvtXhZ289cjeh6d9N2mKJn4dUaH-3So1nTkkhF10qv_OpB8Px5A7TPseIi0k8YdMuzCp4zJ4bW78wWD0RH9jw=w80-h73-no?authuser=0')
// document.querySelector('body').appendChild(katContainer);
// katContainer.appendChild(kat);
// $(document).mousemove(function(e) {
//   $("#follow").css({
//     left: e.pageX,
//     top: e.pageY
//   });
// });
//kat/Screen Shot 2022-10-12 at 6.46.27 PM
//https://lh3.googleusercontent.com/ic6wdtox8a4PEu_BwtqRv7Qh3PPHxbfEAN_oWeD3LMqrHvHAjx1wWSYMNhMFJIuSfzuMBKXN08z4ypgZUwj-ZQ5KZ1e56Zf76qEkLabwI2K1X_SeRKR1ooDZSsX28ZFWAxbE05RROKUKQiOBmPVb1BqBuV6g5Shqre5IIj3GMHwO5W4jYe_u-YYuKPTYY5Gl_O4ut7k3eceKPOu-k6RSK27wAF2fJ-MTcqyTBvMfrH2RSGiGXOf78Hm_S_VhWM_veXo3EzpIq3SxkAJH_zLwrI0nTruqWZapGt7JjGPTQeJn4ZjCKE9XDio_JEygw6ha1uP6vskUUjG3nvbvbvS2fJ8cDauZ84rWwG7BPqAagrGuk6xgrCOd53kwPT_AeAQE434wlrnYH0wCuxNUi39OPnD3uQCcL1_xHtDn8k92PipYrfAb6TRkqGpuoef5FVJJqKpjdAftnttko4gkp4VAu3Dt01nEGAw-HefXxtJVt6R7g231l67JNve8xuARYrtaI1-9L8KrQJby81slbujj8CDajyvHosFxpmSd_fDXKKuAZT7jRHwd92aIQGzTPuNegUmZTTs6fnakyV-sz9rvhJ0HimEC5USeg2TEabgF9r2O7w9ha9SG2B5xopd2vAy5fy-1IsrpgN7eqNZndLhkcM37UAARMmTHK_bs0dsvK6jTHHCiqtGi-IDY9nQe51yfotmb0E4I5dFtrDfRi9CRME3MaRbQ9MvkdibHsQj5bpcVpMIwyXb3zTT1eFLBwHsId5CHnUqpLwRt8TXe1opRlbcSr2967DSfTqDjK5IAkF3sVr1XHSjq372vaNGuDZWVh7weMOomvq7CSAHc4O-PU_2sWvJSck_kPHEjJxoMgrvIELtUxVVzNOZE0bNLRbDlR3RzzwFxmQJMwtMTQUxfcPXG7xr_4RvtXhZ289cjeh6d9N2mKJn4dUaH-3So1nTkkhF10qv_OpB8Px5A7TPseIi0k8YdMuzCp4zJ4bW78wWD0RH9jw=w80-h73-no?authuser=0
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
