import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Page from './containers/Page'
import './style/main.css'
import configureStore from './store/configureStore'

const store = configureStore()

const Index = () => (
  <Provider store={store}>
    <Page id={1}/>
  </Provider>
)

export default Index
