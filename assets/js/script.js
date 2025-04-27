    const navBtn = document.querySelector('.nav-btn');
    const navContent = document.querySelector('.nav-content');
    const navbar = document.querySelector('.nav-page');

    navBtn.addEventListener('click', () => {
    navContent.classList.toggle('show');
    });


    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        console.log(window.scrollY);
        
      });


      const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

const filterLinks = document.querySelectorAll('.portfolio-list a');
const portfolioItems = document.querySelectorAll('.port-box');

filterLinks.forEach(link => {
  link.addEventListener('click', () => {
    const filterValue = link.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === '.all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filterValue.slice(1))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });

    // Aktiv class dəyişimi üçün (istəsən)
    filterLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

