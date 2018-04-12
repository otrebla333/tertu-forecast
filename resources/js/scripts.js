function show_notification(){
	var notification = document.querySelector('#toast-notification');
	notification.MaterialSnackbar.showSnackbar(
	  {
		message: 'Location for this week pending confirmation...',
		timeout: 3500
	  }
	);
}

window.onload = show_notification;
