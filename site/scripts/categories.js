Categories = {
  '1': {id:'1', label:'Dance', active:true},
  '2': {id:'2', label:'Festival/Fair', active:true},
  '3': {id:'3', label:'Film/New Media', active:true},
  '4': {id:'4', label:'Gallery', active:true},
  '5': {id:'5', label:'Heritage and Traditions', active:true},
  '6': {id:'6', label:'Literary', active:true},
  '7': {id:'7', label:'Museum', active:true},
  '8': {id:'8', label:'Music', active:true},
  '9': {id:'9', label:'Performance/Theatre', active:true},
  '10': {id:'10', label:'Seasonal Celebration', active:true},
  '11': {id:'11', label:'Special Event', active:true},
  '12': {id:'12', label:'Sport and Outdoor', active:true},
  '13': {id:'13', label:'Tour', active:true},
  '14': {id:'14', label:'Other', active:true},
};

function storeUserCategories() {
  var ids = [];
  $.each(Categories, function(categoryId, category) {
    if (category.active) {
      ids.push(categoryId);
    }
  });
  localStorage.setItem('categories', ids.join(','));
}

function fetchUserCategories() {
  var userPrefs = localStorage.getItem('categories') || '';
  $.each(Categories, function(categoryId, category) {
    category.active = false;
  });
  $.each(userPrefs.split(','), function(index, categoryId) {
    if (categoryId != '') Categories[categoryId].active = true;
  });
}

$(document).ready(function() {
  fetchUserCategories();
});

