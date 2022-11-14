import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Partners from '../routes/partners';

const App = () => (
  <div id="app">
    <Router>
      <Route path="/" component={Home} />
      <Route path="/partners/" component={Partners} />
    </Router>
  </div>
);

export default App;
