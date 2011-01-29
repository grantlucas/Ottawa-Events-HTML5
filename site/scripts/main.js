if (typeof localStorage == 'undefined') {
	localStorage = {
		getItem: function() { return null; },
		setItem: function() {}
	}
}

$(document).ready(function() {
	localStorage.setItem('test','sample');
	if (localStore.getItem('test') == 'sample') $('article').html('Local storage works');
});

