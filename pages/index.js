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
                checkWin()
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

function checkWin () {
    for (let i = 0; i < gameRecord.length; i++) {
        if (checkHorizontalLeft(gameRecord[i]) == 1){
            alert(123)
            break
        }
    }
    function checkHorizontalLeft(id) {
        console.log(id)
        if (id - 3 > 0) {
            for (let j = 1; j < 5; j++){
                if (gameRecord[id-j] != 1){
                    return 0;
                }
                else {
                    return 1;
                }
            }
        }
    }
}