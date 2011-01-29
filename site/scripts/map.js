    var address;
    var latlng2;
    var markersArray = [];
    var infowindow;
    var infoMarker;

    function drop(latlng2){
    	var marker = new google.maps.Marker({
	            position: latlng2,
	            map: map,
	            title: "address"
	    });
		markersArray.push(marker);
    }
    
    function info(latlng2){
	    clearOverlays();
    	var infoMarker = new google.maps.Marker({
	            position: latlng2,
	            title: "test"
	    });
	    infoMarker.setMap(map);
	    infowindow = new google.maps.InfoWindow({
        	content: "hi"
	    });
	    infowindow.open(map,infoMarker);
    }
    function hideInfo(){
    	infowindow.hide();
    	showOverlays();
    }
    
    function getAddress(address) {

      	geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var loc = results[0].geometry.location;
        return loc;
       		} else {
        	alert("Geocode was not successful for the following reason: " + status);
    	}
   	 });
    }


    function showAddress(address) {

      	geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        //map.setCenter(results[0].geometry.location);
        //map.setZoom(15);
        //map.fitBounds(results[0].geometry.viewport);

  		drop(results[0].geometry.location);
  
		} else {
        	alert("Geocode was not successful for the following reason: " + status);
    	}
   	 });
    }
    
    function clearOverlays() {
	  if (markersArray) {
	    for (i in markersArray) {
	      markersArray[i].setMap(null);
	    }
	  }
	}
	
	// Shows any overlays currently in the array
	function showOverlays() {
	  if (markersArray) {
	    for (i in markersArray) {
	      markersArray[i].setMap(map);
	    }
	  }
	}
	
	// Deletes all markers in the array by removing references to them
	function deleteOverlays() {
	  if (markersArray) {
	    for (i in markersArray) {
	      markersArray[i].setMap(null);
	    }
	    markersArray.length = 0;
	  }
	}
