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
              <Link to={"/issues/" + issue.number} style={{textDecoration: 'none',
                                      color: 'black'}} 
                                      ><h3 key={i}> {issue.title} </h3> </Link>
              <p key={i}> Issue ID: {issue.number} </p>
              <div style={{float: 'right'}}>
                <img id="comments" style={{height: '30px',
                                            width: '30px'}}
                              src="https://www.wpclipart.com/blanks/callouts/color_bubbles_light/speech_bubble_cloud_blue_left.png" />
                <p style={{display: 'inline'}}>{issue.comments}</p>
              </div>
              <p class='showopen' >✳️{issue.state}</p>
              <p style={{display: 'inline'}} key={i}> {issue.user.login} opened this issue {moment(issue.created_at).fromNow()}</p>
            </div>
          )}
        
        <Route path='/issues/:id' component={Issues} />
      </>
    )
  }
}

export default Issues;