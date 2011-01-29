if (typeof localStorage == 'undefined') {
	localStorage = {
		getItem: function() { return null; },
		setItem: function() {}
	}
}

function refreshEventList() {
  if (typeof Events == 'undefined') return;
  var eventList = $('#eventList');
  var html = [];
  $.each(Events, function(evtId, evt) {
    html.push('<li onclick="eventClicked($(this))"  data-id="')
    html.push(evtId);
    html.push('">');
    html.push(evt.title_english);
    html.push('</li>');
  });
  eventList.html(html.join(''));
}

function eventClicked(eventElem) {
  try {
    var evt = Events[eventElem.data('id')];
    var loc = null;
    for (var i in evt.locations) { loc = evt.locations[i]; break; }
    var addy = loc.address_english || loc.intersection_english;
    getAddress(addy);
  } catch(e) {}
}

function refreshCategoryList() {
  if (typeof Categories == 'undefined') return;
  var filterList  = $('#categoryFilters ul');
  var html = [];
  $.each(Categories, function(index, category) {
    html.push('<li><input onchange="categoryFilterChanged($(this))" type="checkbox"');
    if (category.active) html.push(' checked="checked"');
    html.push(' data-id="')
    html.push(category.id);
    html.push('" />');
    html.push(category.label);
    html.push('</li>');
  });
  filterList.html(html.join(''));
}

function categoryFilterChanged(filterElem) {
  var category = Categories[filterElem.data('id')];
  category.active = $(filterElem).is(':checked')
  storeUserCategories();
}

function check_all_categories() {
  $.each(Categories, function(index, category) {
    category.active = true;
  });
  refreshCategoryList();
  storeUserCategories();
}

function clear_all_categories() {
  $.each(Categories, function(index, category) {
    category.active = false;
  });
  refreshCategoryList();
  storeUserCategories();
}

$(document).ready(function() {
	//localStorage.setItem('test','sample');
	//if (localStorage.getItem('test') == 'sample') $('article').html('Local storage works');

  // load the event list
  refreshEventList();

  // load and activate the category filters
  $('.check_all_categories').click(function(e) { check_all_categories(); e.preventDefault(); });
  $('.clear_all_categories').click(function(e) { clear_all_categories(); e.preventDefault(); });
  refreshCategoryList();
});

