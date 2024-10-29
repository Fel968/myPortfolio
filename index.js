window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navItems = document.querySelectorAll('.nav_items'); // Select all nav items
    var logo = document.querySelector('.logo'); // Select the logo element

    if (window.scrollY > 0) {
        navbar.classList.add('fixed');   
        navbar.style.backgroundColor = '#fff'; // Change background color to #FFEDDB
        navbar.style.color = '#000'; // Change text color to black

        // Update each nav item’s color to black
        navItems.forEach(function(item) {
            item.style.color = '#000';
        });

        // Change logo color to black
        logo.style.color = '#000';
    } else {
        navbar.classList.remove('fixed');
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#fff'; // Reset text color to white

        // Reset each nav item’s color to white
        navItems.forEach(function(item) {
            item.style.color = '#fff';
        });

        // Reset logo color to white
        logo.style.color = '#fff';
    }
});
