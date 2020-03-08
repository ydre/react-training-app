import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Sam"  
            timeAgo="Today at 5:00PM" 
            comment="blab" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Paul"
            timeAgo="Today at 4:00PM" 
            comment="dsfdsf" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Bob" 
            timeAgo="Yesterday at 7:00PM" 
            comment="yeyyt" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
};



ReactDOM.render(<App />, document.getElementById('root'));
