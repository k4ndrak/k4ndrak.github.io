
var glider = document.querySelector('.slides');

// console.log($glider);

window.addEventListener('load', function(){
    new Glider(glider, {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: {
            prev: ".prev",
            next: ".next"
        },
    })
  });