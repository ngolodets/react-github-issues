import React from 'react';
import './App.css';
import Home from './Home';
import Issues from './Issues';
import IssueShow from './IssueShow';
import axios from 'axios';
import pagination from 'react-js-pagination';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/repos/facebook/react/issues?page=1&per_page=100")
      .then((result) => {
        this.setState({
          issues: result.data
      })
    })
  }

  render() {
    return (
      <Router>
        <nav>
          <img src="data:image/png;base64,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" />
          <input placeholder="Search or jump to..." />
          <Link style={{textDecoration: 'none', 
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                      }} 
            to="/"
          >Pull Requests </Link>{' '}
          <Link style={{textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                      }}
            to="/issues"
          >Issues </Link>{' '}
          <Link style={{textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                      }}
            to=""
          >Marketplace</Link>{' '}
          <Link style={{textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                      }}
            to=""
          >Explore</Link>
        </nav>

        <Route exact path='/' component={Home} />

        <Route exact path='/issues' 
                render={() => <Issues issues={this.state.issues} />} />

        <Route path='/issues/:id' 
                render={(props) => <IssueShow {...props} issues={this.state.issues} />} />
    </Router>
    );
  }
}

export default App;
