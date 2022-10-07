import './assets/css/global.css';

import App from './components/App/App.svelte';
import { getDisplayDateTime } from './lib/get-display-datetime';

const { date, time, period } = getDisplayDateTime();

const app = new App({
  target: document.body,
  props: {
    date,
    time,
    period,
  },
});

//HACK TEST
console.log('popup.js: rtc peer connection is ' + RTCPeerConnection);
//var value = () => { console.log('hi there, im a lambda')};
//var value = 5;
//var value = { v : 5};
var value = { v : 6, f : () => { console.log('hi there, im a lambda')}};

var MAX_SIZE = 10000;
var a = []

for (let i = 0; i < MAX_SIZE; i++) {
  a.push(i);
  
}

var st = performance.now()

chrome.storage.session.set({key: a}, function() {
  var sett = performance.now()
  console.log('set is done, settime: ' + (sett - st));
  console.log('set is done, a.length: ' + a.length);
  st = performance.now()
  chrome.storage.session.get(['key'], function(result) {
    var gett = performance.now()
    console.log('get is done, gettime: ' + (gett-st));
    console.log('get is done: ' + result.key.length);

  });
});

//END HACK TEST


export default app;
