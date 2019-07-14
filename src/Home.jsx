import React from 'react';

const Home = props => (
  <>
  <div className='App'>
    <h3>👋 Want to submit an issue to whatever/something? </h3>
    <p>If you have a bug or an idea, read the <a rel="noopener noreferrer" href="https://github.com/facebook/react/blob/master/CONTRIBUTING.md" target="_blank">contributing guidelines</a> before opening an issue.</p>
    <p>Issues labeled good first issue can be good first contributions.</p>
    <button id="gotoissues" type='button' onClick={props.getIssues}>Go to Issues</button>
  </div>
</>
)

export default Home;