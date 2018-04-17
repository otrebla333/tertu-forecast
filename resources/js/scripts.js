function show_notification(){
	var notification = document.querySelector('#toast-notification');
	notification.MaterialSnackbar.showSnackbar(
	  {
		message: 'UNEXPECTED TERTU APPEARED! EXPECT IT.',
		timeout: 20000
	  }
	);
}

window.onload = show_notification;


var slide = document.getElementById('x-slider');
slide.onchange = function() {
	document.getElementById('x-val').innerHTML = document.getElementById('x-slider').value;
}
