## elnotifier

A node module for sending notifications in electron applications.

![screenshot](assets/screenshot.png)

##install
    npm install elnotifier --save

## Quick Usage

	const notifier = require('elnotifier')

	// Just title and content
	notifier.notify('Notification', {
        message: 'Event begins in 10 minutes3'
	});


## Introduction

When you create a new notification, your notification is queued, since we only
display one at a time. You get a [BrowserWindow](browserwindow) instance back
from the call.


### Clicked

When the notification was clicked, but not dragged. This usually does the
default action, or closes the notification.

	const notification = notifier.notify('Calendar')
	
	notification.on('clicked', () => {
	  notification.close()
	})
