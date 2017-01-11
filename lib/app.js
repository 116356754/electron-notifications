const Notification = require('../notification')

const { ipcRenderer } = require('electron')

ipcRenderer.on('setup', (event, title, options) => {
  new Notification(title, options);
})

var audio  = new window.Audio();
audio.src ='./done.wav';
//    url: 'file://' + path.join(__dirname,'assets', 'done.wav'),
audio.currentTime = 0;
audio.play();