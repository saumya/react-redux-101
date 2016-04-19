/**
 * Application Entry
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter.react'
import counter from './reducers'

const store = createStore(counter)
const appDomNode = document.getElementById('react-app')

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    appDomNode
  )
}

render()
store.subscribe(render)
