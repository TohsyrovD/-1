function initBoard() {
    let board = document.getElementById('board');
    for (let i = 0; i < 9; i++) {
        let boardCell = document.createElement('div');
        boardCell.classList.add('cell');
        board.append(boardCell);
    }
    return board;
}

function checkWinner() {
    let cells = document.querySelectorAll('.cell');
    let row, column, diag, diag1;
    for(let i = 0; i < 3; i++) {
        column = true, diag = true, diag1 = true;
        row = (cells[i * 3 + 0].innerHTML != '');
        for(let j = 0; j < 3 - 1; j++) {
            row = row && (cells[i * 3 + j].innerHTML == cells[i * 3 + j + 1].innerHTML)
        }
        let winner = (row && cells[i * 3 + 0].innerHTML);
        if (winner) {
            return winner;
        }
    }
    return false;
}
function clickHandler(event){
if(event.target.className=='cell'){
    if(event.target.innerHTML !=''){
         alert('Эта клетка занята')
    }else {
        event.target.innerHTML = trun == 0 ? 'x': '0';
        trun = (trun+1)%2;
    }
}
}
window.onload=function(){
          let board=initBoard();
}