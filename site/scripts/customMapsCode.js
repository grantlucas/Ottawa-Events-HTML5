//all custom Google Maps javascript

var allEvents = [];		//holds all events
/*
 	function eventObject = 	{	 
 								this.eventName 	= ""
								this.address 	= ""
								this.category	= ""
								this.address	= ""
								this.long		= 0000
								this.lat 		= 0000
 							}; 
*/


//function to load and parse data

//function to search a region for events
function searchEventRegion(google.maps.Map googleMap, int long1, int lat1, int long2, int lat2 )
{
	eventsWithinRegion = returnEventsWithinRegion( long1, lat1, long2, lat2 );
	
	for ( var i = 0; i < eventsWithinregion.length; i++ )
	{
		addEventMarker( googleMap, allEvents[eventsWithinRegion[i]].long, allEvents[eventsWithinRegion[i]].lat , allEvents[eventsWithinRegion[i]].eventName );
	}
}

//return an array of indices corresponding to events present within region
//long1, lat2 = topLeft corner
//long2, lat2 = bottomRight corner
function returnEventsWithinRegion( int long1, int lat1, int long2, int lat2 )
{
	var eventIndices = [];
	
	//loop through events and add those that are within regional bounds
	for (var i = 0; i < allEvents.length; i++ )
	{
		if ( 	(( allEvents[i].lat => lat1 )&&( allEvents[i].lat <= lat2 )) && 
				(( allEvents[i].long => long1 ) && ( allEvents[i].lat <= long2 )) )
		{
			eventIndices[ eventIndices.length ] = i;	
		}
	}
	
	return eventIndices;
}

//add event marker
function addEventMarker(google.maps.Map googleMap, int long, int lat , string markerTitle )
{
	var marker = new google.maps.Marker({
      position: myLatlng, 
      map: map, 
      title:"Hello World!"
  	});  
}