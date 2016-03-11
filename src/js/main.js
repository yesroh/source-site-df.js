'use strict';

document.getElementById('btn-goabout').addEventListener('click', function() {
  var top = document.getElementById('sec-about').offsetTop;
  window.scroll(0, top);
});

document.getElementById('btn-goevents').addEventListener('click', function() {
  var top = document.getElementById('sec-events').offsetTop;
  window.scroll(0, top);
});

document.getElementById('btn-goadmins').addEventListener('click', function() {
  var top = document.getElementById('sec-admins').offsetTop;
  window.scroll(0, top);
});

document.getElementById('btn-gotop').addEventListener('click', function() {
  window.scroll(0, 0);
});
