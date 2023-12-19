const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-close');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('fa-close');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// ON SCROLL TRANSITION
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("this");
    }
  });
});

const box = document.querySelectorAll(".animate");
box.forEach((el) => {
  io.observe(el);
});