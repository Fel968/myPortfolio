
// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//         navbar.style.backgroundColor = '#000'; // Change background color to black
//     } else {
//         navbar.style.backgroundColor = 'transparent';
//     }
// });

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');   
        navbar.style.backgroundColor = '#000'; // Change background color to black
    } else {
        navbar.classList.remove('fixed');
        navbar.style.backgroundColor = 'transparent';
}
});

