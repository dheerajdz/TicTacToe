import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const[state,setState] = useState(Array(9).fill(null))
    const[isXTurn,setisXTurn] = useState(true)


    const checkWinner=()=>{
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ];

        for(let logic of winner){
            const[a,b,c] = logic
            if(state[a]!=null && state[a] == state[b] && state[a] === state[c])
                return state[a]
        }
        return false;

    }



    const iswinner = checkWinner()
   



    const handleClick=(index)=>{
        if(state[index]!=null){
            return;
        }
        const copyState = [...state]
        copyState[index] = isXTurn ? "X":"O"
        setState(copyState)
        setisXTurn(!isXTurn)

        console.log(state);
        
        
        
    }

    const handlebutton = ()=>{
        setState(Array(9).fill(null))

    }

    

    return (
        <div className='Board  '>
            { iswinner ? <>
            {iswinner} won the game
            <button onClick={handlebutton}>Play Again</button>
            </>: 
            <>
            <div className='row'>
                <Square 
                onClick={()=>handleClick(0)}
                value={state[0]}/>
                <Square value={state[1]} onClick={()=>handleClick(1)}/>
                <Square value={state[2]} onClick={()=>handleClick(2)}/>

            </div>
            <div className='row'>
                <Square value={state[3]}onClick={()=>handleClick(3)}/>
                <Square value={state[4]}onClick={()=>handleClick(4)}/>
                <Square value={state[5]}onClick={()=>handleClick(5)}/>
            

            </div>
            <div className='row'>
                <Square value={state[6]}onClick={()=>handleClick(6)}/>
                <Square value={state[7]}onClick={()=>handleClick(7)}/>
                <Square value={state[8]}onClick={()=>handleClick(8)}/>

            </div>
            </>
            }

        </div>
        
    )
}

export default Board
