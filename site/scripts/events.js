//global events array
events = new Array();

$(document).ready(function() {
    //load the events xml file
    $.ajax({
        type: "GET",
        url: "data/events.xml",
        dataType: "xml",
        success: parseEvents
      });
});

function parseEvents(xml)
{
  var currentDate = new Date();

  $(xml).find("event").each(function() {
      eventDetails = {};

      //check to see if the event is still on
      var endDate = $(this).find("end_date").text();
      var jsEndDate = new Date(endDate.substr(0,4), parseInt(endDate.substr(4,2)) - 1 ,endDate.substr(6,2));

      var startDate = $(this).find("start_date").text();
      var jsStartDate = new Date(startDate.substr(0,4), parseInt(startDate.substr(5,2)) - 1 ,startDate.substr(7,2));

      if(currentDate < jsEndDate && currentDate > jsStartDate)
      {
        eventDetails["create_time_stamp"] = $(this).find("create_time_stamp").text();
        eventDetails["modify_time_stamp"] = $(this).find("modify_time_stamp").text();
        eventDetails["start_date"] = $(this).find("start_date").text();
        eventDetails["end_date"] = $(this).find("end_date").text();
        eventDetails["title_english"] = $(this).find("title_english").text();
        eventDetails["title_french"] = $(this).find("title_french").text();
        eventDetails["summary_english"] = $(this).find("summary_english").text();
        eventDetails["summary_french"] = $(this).find("summary_french").text();
        eventDetails["owning_organization_name_english"] = $(this).find("owning_organization_name_english").text();
        eventDetails["owning_organization_name_french"] = $(this).find("owning_organization_name_french").text();
        eventDetails["organizer_name_english"] = $(this).find("organizer_name_english").text();
        eventDetails["organizer_name_french"] = $(this).find("organizer_name_french").text();
        eventDetails["contact_name"] = $(this).find("contact_name").text();
        eventDetails["contact_email"] = $(this).find("contact_email").text();
        eventDetails["contact_phone"] = $(this).find("contact_phone").text();
        eventDetails["event_times_english"] = $(this).find("event_times_english").text();
        eventDetails["event_times_french"] = $(this).find("event_times_french").text();
        eventDetails["website_url_english"] = $(this).find("website_url_english").text();
        eventDetails["website_url_french"] = $(this).find("website_url_french").text();
        eventDetails["info_url_english"] = $(this).find("info_url_english").text();
        eventDetails["info_url_french"] = $(this).find("info_url_french").text();
        eventDetails["info_local_phone"] = $(this).find("info_local_phone").text();
        eventDetails["info_toll_phone"] = $(this).find("info_toll_phone").text();
        eventDetails["info_tty_phone"] = $(this).find("info_tty_phone").text();

        //parse city sectors
        var citySectors = $(this).find("city_sector");
        var citySectorsDetails = {};

        citySectors.each(function(){
            citySectorsDetails[$(this).attr("id")] = {};
            citySectorsDetails[$(this).attr("id")]["title_english"] = $(this).find("title_english").text();
            citySectorsDetails[$(this).attr("id")]["title_french"] = $(this).find("title_french").text();

            });

        eventDetails["city_sectors"] = citySectorsDetails;

        //parse locations
        var locations = $(this).find("location");
        var locationsDetails = {};

        locations.each(function(){
            locationsDetails[$(this).attr("id")] = {};
            locationsDetails[$(this).attr("id")]["name_english"] = $(this).find("name_english").text();
            locationsDetails[$(this).attr("id")]["name_french"] = $(this).find("name_french").text();
            locationsDetails[$(this).attr("id")]["address_english"] = $(this).find("address_english").text();
            locationsDetails[$(this).attr("id")]["address_french"] = $(this).find("address_french").text();
            locationsDetails[$(this).attr("id")]["city"] = $(this).find("city").text();
            locationsDetails[$(this).attr("id")]["province"] = $(this).find("province").text();
            locationsDetails[$(this).attr("id")]["postal_code"] = $(this).find("postal_code").text();
            locationsDetails[$(this).attr("id")]["intersection_english"] = $(this).find("intersection_english").text();
            locationsDetails[$(this).attr("id")]["intersection_french"] = $(this).find("intersection_french").text();

            });

        eventDetails["locations"] = locationsDetails;

        //parse categories
        var categories = $(this).find("category");
        var categoriesDetails = {};

        categories.each(function(){
            categoriesDetails[$(this).attr("id")] = {};
            categoriesDetails[$(this).attr("id")]["title_english"] = $(this).find("title_english").text();
            categoriesDetails[$(this).attr("id")]["title_french"] = $(this).find("title_french").text();

            });

        eventDetails["categories"] = categoriesDetails;

        //Add the details to the main array
        events[$(this).attr("id")] = eventDetails;
      }
      });

  
  //loop through events
  var newarr = {};
  for (var i in events) {
    if (events[i] != 'undefined')
      newarr[i] = events[i];
  }
  events = json_encode(newarr);
  doneParseEvents();
}

function doneParseEvents() {
  // body...
  console.log("Done parsing events!");
}
