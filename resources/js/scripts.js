function show_notification(){
	var notification = document.querySelector('#toast-notification');
	notification.MaterialSnackbar.showSnackbar(
	  {
		message: 'UPDATE: location for this week changed to Las Cadenas',
		timeout: 13000
	  }
	);
}

//window.onload = show_notification;


var slide = document.getElementById('x-slider');
slide.onchange = function() {
	document.getElementById('x-val').innerHTML = document.getElementById('x-slider').value;
}
