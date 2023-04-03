import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
  // console.log(post);
  const {id, title, body} = post;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  }

  return (
    <div className='post'>
      <h4>Id: {id}</h4>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
      <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  );
};

export default Post;