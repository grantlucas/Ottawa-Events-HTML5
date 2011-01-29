$(document).ready(() {
    $.ajax({
        type: "GET",
        url: "../../data/events.xml",
        dataType: "xml",
        success: parseEvents
      });
});

function parseEvents(xml)
{
  $(xml).find("event").each(function() {

      });
}
