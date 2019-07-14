import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const IssueShow = props => {
  let issue = props.foundIssues.find((issue) => {
    return issue.id === parseInt(props.match.params.id);
  });
  return (
    <>
    <ReactMarkdown source={props.markdownContent} />
      <div className='issuedisplay'>
        <h1>{props.foundIssues.title}</h1>
        <p># {props.foundIssues.number}</p>
        <p>✳️OPEN</p>
      </div>
      <hr></hr>
    </>
  )
}

export default IssueShow;