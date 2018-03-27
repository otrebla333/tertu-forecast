window.addEventListener('load', function () {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var button = document.getElementById('notbtn');

  button.addEventListener('click', function () {
    // If the user agreed to get notified
    // Let's try to send ten notifications
    if (window.Notification && Notification.permission === "granted") {
		// var img = '/to-do-notifications/img/icon-128.png';
		var text = 'HEY! Your task "' + title + '" is now overdue.';
		var n = new Notification('To do list', { body: text, icon: img });
    }

    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // If the user said okay
        if (status === "granted") {
			// var img = '/to-do-notifications/img/icon-128.png';
			var text = 'HEY! Your task "' + title + '" is now overdue.';
			var n = new Notification('To do list', { body: text, icon: img });
        }

        // Otherwise, we can fallback to a regular modal alert
        else {
          alert("Hi! regular");
        }
      });
    }

    // If the user refuses to get notified
    else {
      // We can fallback to a regular modal alert
      alert("Hi! regular 2");
    }
  });
});