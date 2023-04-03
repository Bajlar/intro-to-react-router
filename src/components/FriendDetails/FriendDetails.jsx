import React from 'react';
import { useLoaderData } from 'react-router-dom';

const friendDetails = () => {
  const friend = useLoaderData();
  // console.log(friend);
  return (
    <div>
      <h2>Hello Friend</h2>
      <h4>name: {friend.name}</h4>
    </div>
  );
};

export default friendDetails;