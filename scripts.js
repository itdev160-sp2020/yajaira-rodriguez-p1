var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Meet our Fleet:';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var mprice = 1150,
    kprice = 2850,
    lprice = 1900,
    mpriceEl = document.getElementById('mprice'),
    kpriceEl = document.getElementById('kprice'),
    lpriceEl = document.getElementById('lprice'),
    weekpricem = mprice * 6,
    weekpricek = kprice * 6,
    weekpricel = lprice * 6,
    weekpricemEl = document.getElementById('weekpricem'),
    weekpricekEl = document.getElementById('weekpricek'),
    weekpricelEl = document.getElementById('weekpricel'),
    monthpricem = mprice * 28,
    monthpricek = kprice * 28,
    monthpricel = lprice * 28;
    monthpricemEl = document.getElementById('monthpricem'),
    monthpricekEl = document.getElementById('monthpricek'),
    monthpricelEl = document.getElementById('monthpricel'),


mpriceEl.textContent = mprice.toFixed(2);
kpriceEl.textContent = kprice.toFixed(2);
lpriceEl.textContent = lprice.toFixed(2);
weekpricemEl.textContent = weekpricem.toFixed(2);
weekpricekEl.textContent = weekpricek.toFixed(2);
weekpricelEl.textContent = weekpricel.toFixed(2);
monthpricemEl.textContent = monthpricem.toFixed(2);
monthpricekEl.textContent = monthpricek.toFixed(2);
monthpricelEl.textContent = monthpricel.toFixed(2);
