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
## Options

	const notification = notifier.notify('Calendar', //标题
	{
		message: 'Event begins in 10 minutes',//内容
		icon: 'http://cl.ly/J49B/3951818241085781941.png',//左侧图标
		buttons: ['close', 'cancel'],//右侧垂直按钮
		audio:__dirname+'/error.wav',//提示音
		duration:10000//自动关闭的时间
	})


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
###buttonClicked
When any one of the buttons are clicked, it'll trigger a buttonClicked event, and pass the text that was clicked to the handler.

    notification.on('buttonClicked', (text) => {
		alert(text)//按钮的名称文本
	})
