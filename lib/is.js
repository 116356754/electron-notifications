'use strict'


// Constructor
function IsApi () {}

// Checks if we are in renderer process
IsApi.prototype.renderer = function () {
  return process.type === 'renderer'
}

// Checks if we are in main process
IsApi.prototype.main = function () {
  return process.type === 'browser'
}

// Checks if we are under Mac OS
IsApi.prototype.osx = IsApi.prototype.macOS = function () {
  return process.platform === 'darwin'
}

// Checks if we are under Windows OS
IsApi.prototype.windows = function () {
  return process.platform === 'win32'
}

// exports
module.exports = new IsApi()
