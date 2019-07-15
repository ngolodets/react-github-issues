import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => (
  <>
  <div className='App'>
    <h3>👋 Want to submit an issue to whatever/something? </h3>
    <p>If you have a bug or an idea, read the <a rel="noopener noreferrer" href="https://github.com/facebook/react/blob/master/CONTRIBUTING.md" target="_blank">contributing guidelines</a> before opening an issue.</p>
    <p>Issues labeled good first issue can be good first contributions.</p>
    <Link to="/issues"><button id="gotoissues">Go to Issues</button></Link>
  </div>
</>
)

export default Home;