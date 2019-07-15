import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const IssueShow = props => {
  let issue = props.issues.find((issue) => {
    return issue.number === parseInt(props.match.params.id);
  });
  return (
    <>
      <div className='issuedisplay'>
        <h1>{issue.title}</h1>
        <p id='tag'># {issue.number}</p>
        <p class='showopen'style={{display: 'inline'}}>✳️{issue.state}</p>
        <p id='anothertag' style={{display: 'inline'}}> {issue.user.login} opened this issue {moment(issue.created_at).fromNow()}</p>
      </div>
      <hr></hr>
      <div className='header'>
        <p id='moretags'> {issue.user.login} opened this issue {moment(issue.created_at).fromNow()}</p>
      </div>
      <div className='description'>
        <img style={{borderRadius: '50%',
                      height: '50px',
                      width: "50px"
                      }} src={issue.user.avatar_url} />
        <ReactMarkdown source={issue.body} />
      </div>
    </>
  )
}

export default IssueShow;