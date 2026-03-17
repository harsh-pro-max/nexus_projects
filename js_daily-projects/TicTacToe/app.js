let turn = 'O';
let total_turn = 0;


let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill("E");
//   0.  1.  2.  3.  4.  5.  6.  7.  8
// ["E","E","E"," E","E","E","E","E","E"]


function checkWinner(){
   
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return [index0,index1,index2];
    }


    return null;

}



// Print sahi se ho rha hai....
const printer = (event)=>{

    const element = event.target;

    // console.log(event.target);
    // agar cell nahi hai to ignore
    if(!element.classList.contains("cell")) return;

    // agar board empty hai tabhi move allow
    if(board_array[element.id] === "E")
    {
        total_turn++;

        if(turn === 'O')
        {
            element.innerHTML = "O";
            board_array[element.id] = "O";

            const winPattern = checkWinner();
            
            // winPlayer.innerText
            
            if(winPattern){

                winPattern.forEach((index)=>{
                    const cell = document.getElementById(index);
                    cell.classList.add("win");
                });

                const winPlayer= document.querySelector(".player1");

                document.getElementById('winningMessage').innerHTML = `Winner is ${winPlayer.innerText}`;
                board.removeEventListener('click',printer);
                return;
            }

            turn = "X";
        }

        else
        {
            element.innerHTML = "X";
            board_array[element.id] = "X";

            const winPattern = checkWinner();

            if(winPattern){

                winPattern.forEach((index)=>{
                    const cell = document.getElementById(index);
                    cell.classList.add("win");
                });

                const winPlayer= document.querySelector(".player1");

                document.getElementById('winningMessage').innerHTML = `Winner is ${winPlayer.innerText}`;
                board.removeEventListener('click',printer);
                return;
            }

            turn = "O";
        }

        // update active player indicator
        updateActivePlayer(turn);

        // draw condition
        if(total_turn === 9)
        {
            document.getElementById('winningMessage').innerHTML = "Match is Draw";
            board.removeEventListener('click',printer);
        }
    }
}




const board = document.querySelector('.board');
board.addEventListener('click',printer);


const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
    value.innerHTML = "";
    value.classList.remove("win");
    });


   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.addEventListener('click',printer);

});


function updateActivePlayer(turn){

    const playerO = document.querySelector('#O');
    const playerX = document.querySelector('#X');

    // pehle dono se grow class hatao
    playerO.classList.remove("growImg");
    playerX.classList.remove("growImg");

    // ab jis player ka turn hai usko grow karo
    if(turn === "O"){
        playerO.classList.add("growImg");
    }
    else{
        playerX.classList.add("growImg");
    }

}


// Homework Project: Rock paper scissor