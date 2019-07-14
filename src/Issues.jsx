import React from 'react';
import {Route, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const Issue = ({match}) => <p>{match.params.id}</p>

class Issues extends React.Component {
  render() {
    //const {url} = this.props.match
    return (
      <>
        <ReactMarkdown source={this.props.markdownContent} />
        <div className='App'>
          <h3>👋 Want to submit an issue to whatever/something? </h3>
          <p>If you have a bug or an idea, read the <a href="https://github.com/facebook/react/blob/master/CONTRIBUTING.md" target="_blank">contributing guidelines</a> before opening an issue.</p>
          <p>Issues labeled good first issue can be good first contributions.</p>
        </div>
        <div className='box'>
          <h3 id='issuesbox'>⚠️ 100 Open Issues</h3>
        </div>
          {this.props.issues.map((issue, i) => 
        <div className='issuedisplay'>
            <div>
            <h3 key={i}> {issue.title} </h3>
            <p key={i}> Issue ID: {issue.number} </p>
            <button type='button' id='open' onClick={(e) => this.props.showIssue(e, i)}>✳️OPEN</button>
            <p style={{display: 'inline'}} key={i}> {issue.user.login} opened this issue {moment(issue.created_at).fromNow()}</p>
            </div>
        </div>
          )}
        <Route path='/issues/:id' component={Issue} />
      </>
    )
  }
}

export default Issues;