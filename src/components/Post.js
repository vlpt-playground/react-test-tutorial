import React from 'react';

const Post = ({title, body, onLoad}) => {

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onLoad}>LoadMe</button>
    </div>
  );
};

Post.defaultProps = {
  title: 'hello',
  body: 'world'
};

export default Post;