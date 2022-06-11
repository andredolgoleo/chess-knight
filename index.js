'use strict'
// beginning matrix
let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]; // end of matrix

// drawing field
function draw() {
    let out = '';
    let m = 0;
    for (let i = 0; i < chess.length; i++) {
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) {
            if (m % 2 == 0) {
                out += `<div class ="chess-block" data-x="${k}" data-y="${i}"></div>`;
            }
            else {
                out += `<div class ="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
            }
            m++
        }
        m++
    }
    document.querySelector('#field').innerHTML = out;
    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.onclick = horse;
    })
}

draw();
// end drawing field

// knight ways how to go

function horse() {
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.classList.remove('green');
        element.classList.remove('active');
    });
    let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x + ' ' + y);
    this.classList.add('green')
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector(`[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector(`[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active');
    }
    if (+x + 2 < 8 && +y + 2 < 8) {
        document.querySelector(`[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active');
    }
    if (+x + 1 < 8 && +y - 2 >= 0) {
        document.querySelector(`[data-x="${+x + 1}"][data-y="${+y - 2 }"]`).classList.add('active');
    } // right side


    if (+x - 2 >= 0 && +y - 1 >= 0) {
        document.querySelector(`[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector(`[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y - 2 >= 0) {
        document.querySelector(`[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active');
    }
    if (+x - 2 >= 0 && +y + 2 < 8) {
        document.querySelector(`[data-x="${+x - 2}"][data-y="${+y + 1 }"]`).classList.add('active');
    } // left side
}
// end knight ways to go

