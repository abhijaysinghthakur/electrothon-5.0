fetch('https://spomenici-api.herokuapp.com/kolekcija/toilets')
  .then(response => response.json())
  .then(response => {
    displayLocations(response.data);
  });

const myLocationIcon = document.querySelector('#my_location');
myLocationIcon.onclick = () => {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const pos = {
      lat: coords.latitude,
      lng: coords.longitude
    };
    map.setCenter(pos);
    map.setZoom(18);
    latObj.value = pos.lat;
    lonObj.value = pos.lng;

    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position: pos,
      map
    });
  });
};