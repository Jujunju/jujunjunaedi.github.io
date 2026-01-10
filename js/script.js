const menu = document.querySelector('.menu');
const listItem = document.querySelector('.list-item');
const closeIcon = document.querySelector('.close');
const nav = document.querySelector('.navigasi');

window.addEventListener('scroll', function() {
    scrollposition = window.scrollY;

    if(scrollposition >= 60) {
        nav.classList.add('bg');
    } else if(scrollposition <= 60) {
        nav.classList.remove('bg');
    }
})

menu.addEventListener('click', function() {
    listItem.classList.toggle("show");
})
closeIcon.addEventListener('click', function() {
    listItem.classList.toggle('show')
})