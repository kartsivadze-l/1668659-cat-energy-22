var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav_nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav_closed')) {
      navMain.classList.remove('main-nav_closed');
      navMain.classList.add('main-nav_opened');
    } else {
      navMain.classList.add('main-nav_closed');
      navMain.classList.remove('main-nav_opened');
    }
  });

  function initMap() {
    var coordinates = {lat: 59.93879709707477, lng: 30.323068855958752},

 map = new google.maps.Map(document.getElementById('map'), {
  center: coordinates
 }),
marker = new google.maps.Marker({
position: coordinates,
map: map,
icon: "../img/map-pin.svg"
 });
}

/*function initMap() {
  var myLatLng = {at: 59.93879709707477, lng: 30.323068855958752};
  var map = new
  google.maps.Map(document.getElementById("map"). {
    map: map,
    position: myLatLng,
    zoom: 4
  });
}*/
