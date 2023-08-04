// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {totalcount: 0, headscount: 0, tailscount: 0, isEven: true}

  onFlickCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevTotal => ({totalcount: prevTotal.totalcount + 1}))

    if (tossResult === 0) {
      this.setState({isEven: true})
      this.setState(prevTotal => ({headscount: prevTotal.headscount + 1}))
    } else {
      this.setState({isEven: false})
      this.setState(prevTotal => ({tailscount: prevTotal.tailscount + 1}))
    }
  }

  render() {
    const {totalcount, tailscount, headscount, isEven} = this.state
    return (
      <div className="bg-color">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>
            {isEven ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                className="heads-img"
                alt=" toss result"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                className="heads-img"
                alt=" toss result"
              />
            )}
          </div>
          <div>
            <button className="btn" type="button" onClick={this.onFlickCoin}>
              Toss Coin
            </button>
          </div>
          <div className="results-values">
            <p className="count">Total:{totalcount}</p>
            <p className="count">Heads:{headscount}</p>
            <p>Tails:{tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
