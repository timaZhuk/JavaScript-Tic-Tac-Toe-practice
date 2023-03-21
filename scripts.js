const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

// we select all <div class="cell" data-cell></div>
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn = false //if this variable True than O's turn if it is equal False then X's turn


cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick,{once:true})
});//forEachLoop
//when we are clicking on cell we add class x or circle which depending on our step or turn
function handleClick(e){
    //place mark
    const cell = e.target
    const currentClass = circleTurn?CIRCLE_CLASS:X_CLASS;
    //create function
    placeMark(cell, currentClass)
    //Check for win
    // Check for draw
    
    //Switch Turns
    swapTurns();
    setBoardHoverClass(); //it will give hit (by hovering X or O on board) who's next turn
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass) //classList() adding class="x" or class="circle"
}

function swapTurns(){
    circleTurn = !circleTurn
}