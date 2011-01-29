Categories = {
  '1': {id:'1', label:'Category 1', active:true},
  '2': {id:'2', label:'Category 2', active:true},
  '3': {id:'3', label:'Category 3', active:true},
  '4': {id:'4', label:'Category 4', active:true},
  '5': {id:'5', label:'Category 5', active:true},
  '6': {id:'6', label:'Category 6', active:true},
  '7': {id:'7', label:'Category 7', active:true},
  '8': {id:'8', label:'Category 8', active:true},
  '9': {id:'9', label:'Category 9', active:true},
  '10': {id:'10', label:'Category 10', active:true},
  '11': {id:'11', label:'Category 11', active:true},
  '12': {id:'12', label:'Category 12', active:true},
  '13': {id:'13', label:'Category 13', active:true},
  '14': {id:'14', label:'Category 14', active:true}
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

