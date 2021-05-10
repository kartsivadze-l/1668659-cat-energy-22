var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

function initMap() {
var pos = {lat: 59.93879709707477, lng: 30.323068855958752};
var opt = {
center: pos,
zoom: 17,
};

var myMap = new google.maps.Map(document.getElementById('map'), opt);


var marker = new google.maps.Marker({
position: pos,
map: myMap,
icon: '../img/map-pin.svg'
});
}
