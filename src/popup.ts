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

chrome.storage.local.set({key: value}, function() {
  console.log('Value is set to ' + value);
  console.log('Value.v is set to ' + value.v);
});

chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
  console.log('Value.v currently is ' + result.key.v);
  console.log('Value.f currently is ' + result.key.f);
  result.key.f()
});
//END HACK TEST


export default app;
