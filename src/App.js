import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTurn: null,
      xArray : []
    
    }
  }

  handleGamePlay = (index) => {
    const { squares, playerTurn } = this.state
    if(squares[index] === 0 && playerTurn !== null){
      squares[index] = playerTurn
      playerTurn === "❌" ? this.oTurn() : this.xTurn()
    } 
    this.setState({squares: squares})
    // this.xTurn(index)
  }

  xTurn = () => {
    this.setState({
      playerTurn: "❌"
    })
    this.xIndex(this.state.squares)
  }

  oTurn = () => {
    this.setState({
      playerTurn: "⭕️"
    })
  }

  didWin = () => {
    let winningLines =
     [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      let xMoves = this.state.squares.filter((value, index) => {
        return (index)
      })
    }

   
    xIndex = (array) => {
      let newArray = []
      
      for(let i=0; i<array.length; i++){
        if(array[i] === "❌" ) {
          newArray.push(i)
        }   
      }
      this.setState({xArray : newArray})
     
    }


    oIndex = (array) => {
      let newArray = []
      
      for(let i=0; i<array.length; i++){
        if(array[i] === "⭕️" ) {
          newArray.push(i)
        }
        
      }
      this.setState({oArray : newArray})
     
    }


    
  //   for(let winnerLine in newArray ) {
      
  //     newArray[winnerLine].filter((lines) => {
  //     if(
  //       squares[lines[0]] === "" || 
  //       squares[lines[1]] === "" || 
  //       squares[lines[2]] === "" 
  //     )
  //     {
  //       //do this -- nothing -- maybe??
  //     } 
  //     else if (
  //       squares[lines[0]] === squares[lines[1]] &&
  //       squares[lines[1]] === squares[lines[2]]
  //     ) {
  //       // match.. winner wins??
  //     }
  //   })

  //  }

  
  
  render(){
    return(
      <>
        <h1>Noughts-and-Crosses</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              value=<Square 
              value={value}
              index={index}
              key={index}
              handleGamePlay={this.handleGamePlay}
              />
            )
          })}

          <h1>xMoves{this.state.xArray}</h1>

        </div>
          {this.state.playerTurn === null ? 
          (<div id="playerSelect">
          <h1>Who's going first?</h1>
          <button onClick={this.xTurn}>X</button>
          <button onClick={this.oTurn}>0</button>
          </div>) :
          null
          }
      </>
    )
  }
}
export default App
