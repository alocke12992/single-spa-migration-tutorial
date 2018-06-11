import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
import './stubs/COURSES'

const rootRoute = {
  component: 'div',
  childRoutes: [{
  path: 'huge_apps',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  }]
}

render(
  <Router history={ browserHistory } routes = { rootRoute } />,
  document.getElementById('example')
)