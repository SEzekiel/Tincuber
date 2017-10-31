      var map;

      document.addEventListener("deviceready", onesig, false);
      
function onesig() {
  window.plugins.OneSignal.startInit("2ab5c021-1c7a-44ba-a5da-580070dfdbef").endInit();
}
      function initialize() {
        var point = {lat: 5.759840, lng: -0.220485};
        var mapOptions = {
          center: point,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        //updateMarker();
      }


// onSuccess Geolocation
//
function onSuccess(position) {
    updateMarker(position.coords.latitude, position.coords.longitude);
    logic(position.coords.latitude, position.coords.longitude);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

window.setInterval(function(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}, 1000); 


function updateMarker(latitude, longitude) {
  var point = {lat: latitude, lng: longitude};
  var marker = new google.maps.Marker({
          position: point,
          map: map
        });
}























function sendNotification() {
	var request = new XMLHttpRequest();
	request.onreadystatechange=function () {
		if (this.readyState == 4 && this.status == 200) {
				//document.getElementById('ubers').innerHTML = this.responseText;
		}
	};
	request.open("GET","functions.php?views=views", true);
	request.send();

}




//<script src="https://maps.google.com/maps/api/js?sensor=false"></script>
function logic(latitude, longitude) {
  var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
    origins: ['5.710928,-0.245317'],
    destinations: ['5.759840,-0.220485'],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
      if (response.rows[0].elements[0].distance.text <= 5) {

      } else {

      }
      //alert(response.originAddresses[0] + ' --> ' + response.destinationAddresses[0] + ' ==> ' + response.rows[0].elements[0].distance.text);
    }
  });
}