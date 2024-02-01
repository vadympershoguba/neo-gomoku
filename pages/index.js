let gameRecord = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

window.onload = () => {
    let counter = 0;
    for(let i = 0; i < 15; i++) {
        let tr = document.createElement('tr');
        for(let j = 0; j < 15; j++) {
            let td = document.createElement('td');
            td.id = counter;
            td.onclick = ()=> {
                td.style.backgroundColor = 'red'
                gameRecord[td.id] = 1;
                checkWin(td.id, 1)
            };
            tr.appendChild(td)
            counter++;
        }
        document.getElementById('board-table').appendChild(tr)
    }
}

function showClose(id) {
    const coordinates = [+id-1, +id+1, +id-14, +id-15, +id-16, +id+14, +id+15, +id+16]
    for (let i = 0; i < coordinates.length; i++) {
        colorCell(coordinates[i])
    }
}

function colorCell(id) {
    const cell = document.getElementById(id)
    if (cell.style.backgroundColor != 'red'){
        cell.style.backgroundColor = 'yellow'
    }
}

class Game {

    constructor () {
        this.board = gameRecord;
        this.activeTurn = 'user';
    }

    over(){

    }
}

function checkWin (id, value) {
    id = +id;
    for (let i = 0; i < gameRecord.length; i++) {
        if (checkHorizontalLeft(id) == value && id % 15 > 3){
            return 1
        }
        if (checkHorizontalRight(id) == value){
            return 1
        } 
        if (checkVerticalUp(id) == value){
            return 1
        } 
        if (checkVerticalDown(id) == value) {
            return 1
        }
    }
    function checkHorizontalLeft() {
        if (id - 3 > 0) {
            for (let j = 1; j < 5; j++){
                if (gameRecord[id-j] != value){
                    return 0;
                }
            }
            return 1
        }
    }
    function checkHorizontalRight() {
        if (id - 3 > 0) {
            for (let j = 1; j < 5; j++){
                if (gameRecord[id+j] != value){
                    return 0;
                }
            }
            return 1;
        }
    }
    function checkVerticalUp() {
        for (let j = 0; j <=60; j+=15) {
            if (gameRecord[id-j] != value){
                return 0
            }
        }
        return 1
    }
    function checkVerticalDown() {
        for (let j = 0; j <=60; j+=15) {
            if (gameRecord[id+j] != value){
                return 0
            }
        }
        return 1
    }
    return 0
}