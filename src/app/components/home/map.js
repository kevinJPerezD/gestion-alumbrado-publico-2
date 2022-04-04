var coord = {lat:21.511971 ,lng: -104.911973};
var autocomplete;
const input = document.getElementById("input_location"); 
var map;
var marker;
var cordenadas;

function iniciarMap(){
    console.log("cargando..");
     map = new google.maps.Map(document.getElementById('map'),{
        zoom: 13,
        center: coord
    });
    iniciarMarkers(map);
    initAutocomplete();
    // getCurrentLocation();
}
function crearMarker(cordenadas){
    marker = new google.maps.Marker({
        position: cordenadas,
        map: map,
        draggable:true
    })
}
function iniciarMarkers(map){
    crearMarker(getCurrentLocation());
      marker = new google.maps.Marker({
        position: coord,
        map: map,
        draggable:true
    })
  
}

function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(input); 
    autocomplete.addListener('place_changed', function(){
        console.log('place changed')
        const place = autocomplete.getPlace();
        console.log(place);
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
    })
}

function getCurrentLocation(){
    const watchId = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;
       console.log(latitude, longitude);
        cordenadas = {latitude, longitude};
        // Show a map centered at latitude / longitude.
      });
      
      return cordenadas;
}