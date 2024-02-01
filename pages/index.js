window.onload = () => {
    for(let i = 0; i < 15; i++) {
        let tr = document.createElement('tr');
        for(let j = 0; j < 15; j++) {
            let td = document.createElement('td');
            td.id = `${i}:${j}`
            tr.appendChild(td)
        }
        document.getElementById('board-table').appendChild(tr)
    }
}