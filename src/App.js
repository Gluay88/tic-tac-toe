import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["👻", "👻", "👻", "👻", "👻", "👻", "👻", "👻", "👻"],
      playerTurn: null,
      playerOne: "😜",
      playerTwo: "👽",
      theWinner: null,
      emojiHolder: ["🌗", "💩", "😈", "😺", "💎", "👀", '🐍', "🐣", "🦈", "🔥", "🍕", "🍥", "🎭", "🛸", "💝", "❤️‍🔥", "🆘", "☢", "🇦🇺", "☣"],
      emoji: null
    }
  }

  componentDidMount = () => {
    let currentEmoji = this.state.emojiHolder[Math.floor(Math.random() * this.state.emojiHolder.length)]
    this.setState({
      emoji: currentEmoji,
      squares: this.state.squares.map((value) => {
        return (value = currentEmoji)
      })
    })
  }

  handleGamePlay = (index) => {
    const { squares, playerTurn, theWinner, emoji } = this.state
    if(squares[index] === emoji && playerTurn !== null && theWinner === null){
      squares[index] = playerTurn
      playerTurn === this.state.playerOne ?
       this.playerTwoTurn() : this.playerOneTurn()
    } 
    this.setState({squares: squares})
  }

  // This gets run when ⭕️ makes a move
  playerOneTurn = () => {
    this.setState({
      playerTurn: this.state.playerOne
    })
    this.didWin()
  }

  // This gets run when ❌ makes a move
  playerTwoTurn = () => {
    this.setState({
      playerTurn: this.state.playerTwo
    })
    this.didWin()
  }

  didWin = () => {
    const { squares } = this.state
    const winningLines =
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
        for (let i = 0; i < winningLines.length; i++) {
          const [a, b, c] = winningLines[i]
          if (squares[a] !== this.state.emoji && squares[a] === squares[b] && squares[a] === squares[c]){
            this.setState({theWinner: squares[a]})
            return console.log((`${squares[a]} is the winner`));
          } else if (squares.includes(this.state.emoji) === false){
            this.setState({theWinner: "the cat!"})
          }
        }
  
    }

    restart = () => {
      this.setState({
      playerTurn: null,
      theWinner: null,
      })
      this.componentDidMount()
    }
    
    handleInputOne = (e) => {
      this.setState({playerOne: e.target.value})
    }
    handleInputTwo = (e) => {
      this.setState({playerTwo: e.target.value})
    }


  render(){
    return(
      <>
        <h1>Noughts-and-Crosses</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square 
              value={value}
              index={index}
              key={index}
              handleGamePlay={this.handleGamePlay}
              />
            )
          })}
            </div>


            {/* input section */}

        <div id="piece-select">
        <div className="pieces">
          <p className="players">Player One piece</p>

          {this.state.playerTurn === null ?
            <input
            className="pieceInputs"
            type="text"
            onChange={this.handleInputOne}
            value={this.state.playerOne}
          /> : null}
          </div>
          <div className="pieces">
          <p className="players">Player Two piece</p>

          {this.state.playerTurn === null ?
            <input
            className="pieceInputs"
            type="text"
            onChange={this.handleInputTwo}
            value={this.state.playerTwo}
          /> : null}
          </div>
          </div>      
            {/* end input section */}            

            <div>
               { (this.state.theWinner === null && this.state.playerTurn !== null)?  <h2>It's {this.state.playerTurn}'s turn! </h2> : null}
            </div>

            

          {this.state.playerTurn === null ? 
          (<div id="playerSelect">
          <h1>Who's going first?</h1>

          <button onClick={this.playerOneTurn} className="playerBtn">{this.state.playerOne}</button>
          <button onClick={this.playerTwoTurn} className="playerBtn">{this.state.playerTwo}</button>
          </div>) :
          null
          }

{this.state.theWinner === null ? null : <h1>The winner is {this.state.theWinner}</h1> }
            <button onClick={this.restart} className="restart-btn">Click here to play again</button>
            <p>Warning: You cannot win if you choose the emoji that is on the board.</p>
      </>
    )
  }
}
export default App
