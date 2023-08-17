const readMoreLink = document.getElementById('read-more-link');
const hiddenText = document.querySelector('.hidden-text');

readMoreLink.addEventListener('click', (event) => {
event.preventDefault(); 

    if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'block'; 
        readMoreLink.textContent = 'Read Less';
  } else {
      hiddenText.style.display = 'none'; 
        readMoreLink.textContent = 'Read More';
    }
});

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
 header.classList.toggle("sticky",window.scrollY>100)
})
