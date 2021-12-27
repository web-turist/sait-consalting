/*jshint esversion: 6*/
const btn = document.querySelectorAll('.btn-push'),
      modal = document.querySelector('.form'),
      close = document.querySelector('.overlay');

btn.forEach(function(el) {
    el.addEventListener('click', () => {
        modal.classList.add('active');
        close.classList.add('active');
    });
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
    close.classList.remove('active');
});
