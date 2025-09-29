
//  that is for the scroll nav bar 
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    navbar.style.top = '-70px'; // hide navbar
  } else {
    // Scrolling up
    navbar.style.top = '13px'; // show navbar
  }
  lastScrollY = currentScrollY;
});


//  for move the crsor 

let main = document.querySelector('.main')
let cursor = document.querySelector('.cursor')
main.addEventListener('mousemove',function(dets){
    cursor.style.left =dets.x+'px'
    cursor.style.top =dets.y+'px'
    console.log('hello')
})