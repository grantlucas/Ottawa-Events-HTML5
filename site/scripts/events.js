$(document).ready(function() {
    //load the events xml file
    $.ajax({
        type: "GET",
        url: "../data/events.xml",
        dataType: "xml",
        success: parseEvents
      });
});

function parseEvents(xml)
{
  var events = new Array();
  $(xml).find("event").each(function() {
      eventDetails = new Array();

      eventDetails["create_time_stamp"] = $(this).find("create_time_stamp").text();

      //parse event locaitons
      var eventLocation = $(this).find("locations");
        eventLocation.each(function(){
          });

      /*console.log($(this).attr("id"));
      console.log(eventDetails["create_time_stamp"]);*/
      //store the event details array into the events array
      events[$(this).attr("id")] = eventDetails;
      //console.log(eventDetails);
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
        

