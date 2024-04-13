import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonItems from './components/ButtonsItems'

import {
  AppContainer,
  ScoreCardContainer,
  RockPaperScissorContainer,
  RockPaperScissorText,
  ScoreContainer,
  ScoreText,
  ScoreCount,
  RockPaperScissorButtonsContainer,
  Buttons,
  ButtonImage,
  RulesButton,
  RulesImage,
  RulesContainer,
  WinOrLossText,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isFinished: false,
    score: 0,
    yourChoiceItem: '',
    randomItem: '',
    matchStatus: null,
  }

  selectedOptions = id => {
    const choiceItem = choicesList.find(each => each.id === id)

    const randomOption = Math.floor(Math.random() * 3)
    const randomChoiceItem = choicesList[randomOption]

    if (
      (id === 'ROCK' && randomChoiceItem.id === 'SCISSORS') ||
      (id === 'PAPER' && randomChoiceItem.id === 'ROCK') ||
      (id === 'SCISSORS' && randomChoiceItem.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        randomItem: randomChoiceItem,
        matchStatus: 'YOU WON',
        isFinished: true,
        yourChoiceItem: choiceItem,
      }))
    } else if (randomChoiceItem.id === id) {
      this.setState(prevState => ({
        score: prevState.score,
        randomItem: randomChoiceItem,
        matchStatus: 'IT IS DRAW',
        isFinished: true,
        yourChoiceItem: choiceItem,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        randomItem: randomChoiceItem,
        matchStatus: 'YOU LOSE',
        isFinished: true,
        yourChoiceItem: choiceItem,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({isFinished: false})
  }

  getGameStatus = () => {
    const {isFinished, randomItem, yourChoiceItem, matchStatus} = this.state

    return isFinished ? (
      <>
        <Buttons type="button">
          <ButtonImage src={yourChoiceItem.imageUrl} alt="your choice" />
        </Buttons>

        <Buttons type="button">
          <ButtonImage src={randomItem.imageUrl} alt="opponent choice" />
        </Buttons>

        <div>
          <WinOrLossText>{matchStatus}</WinOrLossText>
          <RulesButton onClick={this.onPlayAgain}>PLAY AGAIN</RulesButton>
        </div>
      </>
    ) : (
      choicesList.map(each => (
        <ButtonItems
          key={each.id}
          buttonDetails={each}
          selectedOptions={this.selectedOptions}
          isFinished={isFinished}
        />
      ))
    )
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ScoreCardContainer>
          <RockPaperScissorContainer>
            <RockPaperScissorText>ROCK PAPER SCISSORS</RockPaperScissorText>
          </RockPaperScissorContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreCount>{score}</ScoreCount>
          </ScoreContainer>
        </ScoreCardContainer>
        <RockPaperScissorButtonsContainer>
          {this.getGameStatus()}
        </RockPaperScissorButtonsContainer>

        <Popup
          trigger={<RulesButton>Rules</RulesButton>}
          position="top right"
          modal
        >
          {close => (
            <RulesContainer>
              <button className="close-button" onClick={() => close()}>
                <RiCloseLine className="close-icon" />
              </button>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                alt="rules"
              />
            </RulesContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default App
