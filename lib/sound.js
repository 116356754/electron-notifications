module.exports = {
  play
};

var path = require('path');

/* Cache of Audio elements, for instant playback */
var cache = {};

var sounds = {
  DONE: {
    url: 'file://' + path.join(__dirname,'assets', 'done.wav'),
    volume: 0.2
  }
};

function preload () {
  for (var name in sounds) {
    if (!cache[name]) {
      var sound = sounds[name];
      var audio = cache[name] = new window.Audio();
      audio.volume = sound.volume;
      audio.src = sound.url;
    }
  }
}

function play (name) {
  name = name || 'DONE';
  var audio = cache[name];
  if (!audio) {
    var sound = sounds[name];
    if (!sound) {
      throw new Error('Invalid sound name')
    }
    audio = cache[name] = new window.Audio();
    audio.volume = sound.volume;
    audio.src = sound.url;
  }
  audio.currentTime = 0;
  audio.play()
}
