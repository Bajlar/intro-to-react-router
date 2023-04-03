import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
  const post = useLoaderData();
  // console.log(post);
  const {body, title, id, userId} = post;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className='post-details'>
      <h3>Details about your post of: {id}</h3>
      <h5>{title}</h5>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;