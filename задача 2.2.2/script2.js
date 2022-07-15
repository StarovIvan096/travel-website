'use strict';

const y = document.getElementById('y'),
button = document.getElementById('button'),
boxOutputData = document.getElementById('data'),
showData = document.getElementById('showData');

const operation = ()=> {

    const a = (+y.value) <= 2,
        s = (+y.value) <= 0,
        d = Math.pow(+x.value, 2) + Math.pow((+y.value - 1.5), 2) <= 6.28,
        c = (+y.value) >= 0.5 * Math.pow(+x.value, 2);

        if(a){
            if(c){
                showData.textContent = '1 область';
            } else if(d && s){
                showData.textContent = '2 область';
            } else{
                showData.textContent = 'точка не принадлежит ни одной из областей';
            }
        } else {
            showData.textContent = 'точка выше оси y=2';
        }
};

button.addEventListener('click', operation);