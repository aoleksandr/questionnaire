'use strict';

require('./style.css');

let btn = document.getElementById('btn-one');

let test = 'new';


btn.onclick = function() {
    console.log(test);
};