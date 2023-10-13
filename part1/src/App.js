import React, { useState } from 'react'

const Button = (props) => {
  const buttonName = props.buttonName
  const buttonAction = props.buttonAction
  return (
    <button value={'asd'} onClick={buttonAction}>
      {buttonName}
    </button>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const getAll = () => {
    return good + neutral + bad
  }

  const getScore = () => {
    return good - bad
  }

  const getAverage = () => {
    const res = getScore() / getAll()
    return isNaN(res) ? 0 : res
  }

  const getPositive = () => {
    const res = good / getAll()
    return (isNaN(res) ? 0 : res) * 100
  }
  return (
    <React.Fragment>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {getAll()}</div>
      <div>average {getAverage()}</div>
      <div>positive {getPositive()} %</div>
    </React.Fragment>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const shouldShowFeedback = () => {
    return good + neutral + bad > 0
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button buttonName={'good'} buttonAction={() => setGood(good + 1)} />
      <Button buttonName={'neutral'} buttonAction={() => setNeutral(neutral + 1)} />
      <Button buttonName={'bad'} buttonAction={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      {shouldShowFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} /> : <div>No feedback given</div>}
    </div>
  )
}

export default App
