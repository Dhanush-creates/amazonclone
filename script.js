// const imgs = document.querySelectorAll('.header-slider ul img');
// const prev_btn = document.querySelector('.control_prev');
// const next_btn = document.querySelector('.control_next');

// let n = 0;


// function changeSlide() {
//   for (let i=0; i<imgs.length; i++) {
//     imgs[i].style.display = 'none';
//   }
//   imgs[n].style.display = 'block';
// }
// changeSlide();

// prev_btn.addeventListener('click',(e) =>{
//   if(n>0){
//     n--;
//   }
//   else
//   {
//     n= imgs.length-1;
//   }
//   changeSlide();
// })

// next_btn.addeventListener('click',(e) =>{
//   if(n<imgs.length-1){
//     n++;
//   }
//   else
//   {
//     n= 0;
//   }
//   changeSlide();
// })
// const scrollContainer = document.querySelectorAll('.products');
// for(const item of scrollContainer) {
//   item.addEventListener('wheel',(evt)=>{
//     evt.preventDefault();
//     item.scrollLeft +=evt.deltaY;

//   });
// }


const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent anchor default behavior
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}

