window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_navigation_text'),
    hamburger = document.querySelector('.burger'),
    header = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        header.classList.toggle('header_active');
        if (header.classList.contains('header_active')) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        } else
        {
            header.style.backgroundColor = 'rgba(39, 52, 86, 1.0)';
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
            header.classList.toggle('header_active');
            if (header.classList.contains('header_active')) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
            } else
            {
                header.style.backgroundColor = 'rgba(39, 52, 86, 1.0)';
            }
        })
    })
})

function changeHeader () {
    var promoElement = document.querySelector(".promo");
    var navElement = document.querySelector("header");
    if (!navElement.classList.contains('header_active')) {
        this.scrollY > promoElement.offsetHeight ? navElement.style.backgroundColor = 'rgba(39, 52, 86, 1.0)' : navElement.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
  }
  
window.addEventListener("scroll", changeHeader , false);