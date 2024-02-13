const X=document.querySelector(".X");
const Y=document.querySelector(".O");
var player1=""
var player2="";
const start=document.querySelector(".start");
const button=document.querySelector(".button")
var board=[];
const grid=document.querySelector(".tic-tac")
const chance=document.querySelector(".chance")
const over=document.querySelector(".over")
var flag=false;
var turn=false;

var count=0;


button.addEventListener("click",(e)=>{
    if(e.target.classList.contains('X')){
        if(player1===""){
            player1="X";
        }
            player2="0"
            maketheBoard(board);
            start.style.display='none'
            flag=true;
            turn=true;


    }
    else if(e.target.classList.contains('O')){
        if(player1===""){
            player1="0";
        }
            player2="X"
            maketheBoard(board);
            start.style.display='none'
            flag=true
            turn=false;
            
            
           
    }
    
   
    
})

function maketheBoard(board){
    for(var i = 0; i < 3; i++) {
        board.push([]);
        for(var j = 0; j < 3; j++) {
            board[i][j]='_';
        }
    }
}
function print(board){
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            console.log(board[i][j])
        }
console.log();
        
    }
}
over.addEventListener("click",()=>{
location.reload();

})

function checkCount(count){
    if(count===9){
        console.log("over")
        over.style.display="flex";
        chance.innerHTML = `<h1>Its a Tie</h1>`;
    }
}
function check_the_move(row,col,sym){
    row = Number(row);
    col = Number(col);
    if(board[row][col]==="_"){
        count++;
        checkCount(count);
        board[row][col]=sym;
        return true;
    }
    return false;
}


function didWin(sym){
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(board[i][0]===sym && board[i][0]===board[i][1] && board[i][1]===board[i][2]){// horizontal
                return true;
            }
            else if(board[0][i]===sym && board[0][i]===board[1][i] && board[1][i]==board[2][i]){// vertical
                return true;
            }
        }
    }
        if(board[0][0] === sym && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            return true;
        }
        else if(board[0][2] === sym && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
            return true;
        }
            return false;

    
}

grid.addEventListener("click", (e) => {
            if(flag) {
                var row = e.target.dataset.row;
                var col = e.target.dataset.col;       
                var sym;
                console.log(row+" "+col)
                if(turn) {
                    sym = 'X';
                } else {
                    sym = 'O';
                }
                chance.innerHTML = `<h2>player ${turn?'0':'X'} make a move</h3>`;
               
                if(check_the_move(row, col, sym) === false) {
                    console.log("Invalid move");
                    chance.innerHTML = `<h2>made a wrong move</h3>`;
                    return;
                }
                e.target.innerText = sym;
                if(didWin(sym)){ 
                    chance.innerHTML = `<h1>I ${sym} won</h1>`;
                    console.log("YES");
                    over.style.display="flex";
                }
               
               
                turn = !turn;
                
            }
        });











