'use strict';

const x = document.getElementById('x'),
    y = document.getElementById('y'),
    boxOutputData = document.getElementById('data'),
    showData = document.getElementById('showData');


const button = document.getElementById('button');
const operation = ()=> {

    const a = ((-3)*(+x.value) + 7*(+y.value) >= 0 ),
        c = Math.pow(+x.value, 2) + Math.pow(+y.value, 2) <= 9,
        d = Math.pow(+x.value - 5, 2) + Math.pow(+y.value, 2) <= 9,
        regX = (5 - Math.sqrt(9 - Math.pow(+y.value, 2))) <= x.value || x.value <= Math.sqrt(9 - Math.pow(+y.value, 2)),
        regY = -Math.sqrt(11)/2 <= +y.value || Math.sqrt(11)/2 >= +y.value;

        if(regX && regY){
            if(a && c){
                showData.textContent = `Точка с координатами (${x.value}:${y.value}) принадлжежит I области`;
            } else if(a && d){
                showData.textContent = `Точка с координатами (${x.value}:${y.value}) принадлжежит II области`;
            } else {
                showData.textContent = `Точка с координатами (${x.value}:${y.value}) не принадлжежит ни одной области`;
            }
        } else {
            showData.textContent = `Точка с координатами (${x.value}:${y.value}) не принадлжежит ни одной области`;
        }

button.addEventListener('click', operation);