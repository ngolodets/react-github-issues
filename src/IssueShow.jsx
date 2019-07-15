import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const IssueShow = props => {
  // let issue = props.foundIssues.find((issue) => {
  //   return issue.id === parseInt(props.match.params.id);
  // });
  return (
    <>
    <ReactMarkdown source={props.markdownContent} />
      
      <div className='issuedisplay'>
        <h1>{props.foundIssues.title}</h1>
        <p id='tag'># {props.foundIssues.number}</p>
        <p id='showopen'style={{display: 'inline'}}>✳️OPEN</p>
        <p id='anothertag' style={{display: 'inline'}}> {props.user} opened this issue {moment(props.foundIssues.created_at).fromNow()}</p>
      </div>
      <hr></hr>
      <div className='header'>
      <p id='moretags'> {props.user} opened this issue {moment(props.foundIssues.created_at).fromNow()}</p>
      </div>
      <div className='description'>
        <p>{props.foundIssues.body}</p>
      </div>
    </>
  )
}

export default IssueShow;