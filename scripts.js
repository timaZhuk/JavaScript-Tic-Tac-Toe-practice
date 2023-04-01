const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS =[

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6],
    

]


// we select all <div class="cell" data-cell></div>
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById("board");
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('data-winning-message-text')
const winningMessageElement = document.getElementById('winningMessage')
let circleTurn=false; //if this variable True than O's turn if it is equal False then X's turn

startGame()

function startGame(){
    circleTurn = false;
    cellElements.forEach(cell =>{
        cell.addEventListener('click', handleClick,{once:true})
    });//forEachLoop
    setBoardHoverClass()    
}//startGame

//when we are clicking on cell we add class "x" or "circle" which depending on our step or turn
function handleClick(e){
    
    const cell = e.target // is a reference to the object onto which the event was dispatched.
    const currentClass = circleTurn ? CIRCLE_CLASS:X_CLASS;
    //create function
    //place mark
    placeMark(cell, currentClass)
    if(checWin(currentClass)){
        //console.log("Winner")
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHoverClass()
    }
    //Check for win
    // Check for draw
    
    // //Switch Turns
    // swapTurns();
    // setBoardHoverClass(); //it will give hint (by hovering X or O on board) who's  next turn
}

function endGame(draw){
    if(draw){
        winningMessageElement.innerText = 'Draw'
    }
    else{
        let message = circleTurn ? "O":"X"
        winningMessageTextElement.innerText = `${message} Wins!`;
    }
        winningMessageElement.classList.add('show') // add class=show in <div class="winning-message" id="winningMessage">
}
function isDraw(){
    [...cellElements].every(cell =>{
        return cell.classList.contains(X_CLASS)||cell.classList.contains(CIRCLE_CLASS)
    })
}
function placeMark(cell, currentClass){
    cell.classList.add(currentClass) // classList() adding class="x" or class="circle"
}

function swapTurns(){
    circleTurn = !circleTurn
}
function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS);

    }
}

function checWin(currentClass){
    return WINNING_COMBINATIONS.some(combination =>{ //some() returns True or False
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass) // for example if cellElement[0] contains [0,1,2] all "x"
        })
    })//some
}

/**
 * 
 * The some() method tests whether at least one element 
 * in the array passes the test implemented by the provided function. 
 
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
 */