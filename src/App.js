import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [player, setPlayer] = useState('X')
const [winner, setWinner] = useState('')

const [boardArray, setBoardArray] = useState([...Array(9)])

useEffect(() => {
checkWinner()

}, [boardArray])

function handleClick(i){
const newBoard = [...boardArray]
newBoard[i] = player
setBoardArray(newBoard)
setPlayer(player === 'X' ? 'O': 'X')
}


function handleReset(){
setBoardArray([...Array(9)])
setPlayer('X')
setWinner('')

}

function checkWinner(){
// horizontal row winner check
  for (let i = 0; i < boardArray.length; i++){
     if(boardArray[i] !== undefined && boardArray[i] === boardArray[i+1] && boardArray[i+1] === boardArray[i+2]){
        setWinner(boardArray[i])
       return;
     }
     
     // vertical row winner check
       if(boardArray[i] !== undefined && boardArray[i] === boardArray[i+3] && boardArray[i+3] === boardArray[i+6]){
        setWinner(boardArray[i])
                  return;
     } 
   }
   
   
// diagonal  winner check
     if(boardArray[0] && boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]){
             setWinner(boardArray[0])
          return;

     }
     
    if(boardArray[2] && boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]){
                 setWinner(boardArray[2])
          return;

     }
  
   
}

  return (
    <div className="App">
    <center><h1 style={{fontFamily: 'cursive', fontSize: 'xxx-large'}}>Let's Play !</h1></center>
     <div className='box'>
     {boardArray.map((item, index) => {
     return(
     <>
       {index % 3 === 0 ? <br /> : ''}
         <button className='BoardButton' onClick={() => !item && !winner && handleClick(index)}>
         {item}
         </button>
     </>)
     })}

     </div>
        <br/>
        
        <button className='ResetButton' onClick={() => handleReset()}> Reset</button>
         <br/>
      { winner ? <center><h1 style={{ fontFamily: 'cursive', fontSize: 'xxx-large' }}>{winner} is Winner</h1></center>: ''}
      
    </div>
    
  );
}

export default App;
