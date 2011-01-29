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
  $(xml).find("event").each(function() {
      eventDetails = new Array();

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
      var citySectorsDetails = new Array();

      citySectors.each(function(){
          citySectorsDetails[$(this).attr("id")] = new Array();
          citySectorsDetails[$(this).attr("id")]["title_english"] = $(this).find("title_english").text();
          citySectorsDetails[$(this).attr("id")]["title_french"] = $(this).find("title_french").text();

          });

      eventDetails["city_sectors"] = citySectorsDetails;

      //parse locations
      var locations = $(this).find("location");
      var locationsDetails = new Array();

      locations.each(function(){
          locationsDetails[$(this).attr("id")] = new Array();
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
      var categoriesDetails = new Array();

      categories.each(function(){
          categoriesDetails[$(this).attr("id")] = new Array();
          categoriesDetails[$(this).attr("id")]["title_english"] = $(this).find("title_english").text();
          categoriesDetails[$(this).attr("id")]["title_french"] = $(this).find("title_french").text();

          });

      eventDetails["categories"] = categoriesDetails;

      //Add the details to the main array
      events[$(this).attr("id")] = eventDetails;
      });

  console.log(dump(events));
}

/**
 *  * Function : dump()
 *   * Arguments: The data - array,hash(associative array),object
 *    *    The level - OPTIONAL
 *     * Returns  : The textual representation of the array.
 *      * This function was inspired by the print_r function of PHP.
 *       * This will accept some data as the argument and return a
 *        * text that will be a more readable version of the
 *         * array/hash/object that is given.
 *          * Docs: http://www.openjs.com/scripts/others/dump_function_php_print_r.php
 *           */
function dump(arr,level) {
  var dumped_text = "";
  if(!level) level = 0;

  //The padding given at the beginning of the line.
    var level_padding = "";
  for(var j=0;j<level+1;j++) level_padding += "    ";

  if(typeof(arr) == 'object') { //Array/Hashes/Objects 
    for(var item in arr) {
      var value = arr[item];

      if(typeof(value) == 'object') { //If it is an array,
        dumped_text += level_padding + "'" + item + "' ...\n";
        dumped_text += dump(value,level+1);
      } else {
        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
      }
    }
  } else { //Stings/Chars/Numbers etc.
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
  }
  return dumped_text;
}
        

