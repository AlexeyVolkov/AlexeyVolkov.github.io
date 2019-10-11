/**
 * Do Not Track
 */
var text__dnt = '?';
if (navigator.doNotTrack) {
    text__dnt = 'On';
} else {
    text__dnt = 'Off';
}
document.getElementById('user_info__dnt').innerText = text__dnt;

/**
 * JavaScript
 */
var text__js = 'On';
document.getElementById('user_info__js').innerText = text__js;

/**
 * Browser Language
 */
var text__lang = '?';
if (navigator.language) {
    text__lang = navigator.language;
}
document.getElementById('user_info__lang').innerText = text__lang;

/**
 * Operation System
 */
var text__os = '?';
// https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
if (navigator.platform) {
    text__os = navigator.platform;
}
document.getElementById('user_info__os').innerText = text__os;