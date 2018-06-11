import React from 'react';
import { Router, browserHistory } from 'react-router';

import './stubs/COURSES';

const rootRoute = {
  childRoutes: [ {
    path: '/huge_apps',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
};

class Root extends React.Component {

  render() {
    return (
      <div>
        <Router
          history={browserHistory}
          routes={rootRoute}
        />
      </div>
    );
  }
}

export default Root
