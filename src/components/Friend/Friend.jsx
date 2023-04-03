import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
  // console.log(friend);
  const {id, name, phone, username, website, email, company, address} = friend;
  return (
    <div className='friend'>
      {/* <h3>Id: {id}</h3> */}
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Phone No: {phone}</p>
      {/* <p>Website: {website}</p>
      <p>Email: {email}</p>
      <p>Company: {company.name}</p>
      <p>Address: {address.city}</p> */}
      <Link to={`/friend/${id}`}>show me details</Link>
    </div>
  );
};

export default Friend;