import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    // <div>
    //   <a href="/">Home</a>
    //   <a href="/about">About</a>
    //   <a href="/contact">Contact</a>
    // </div>
    <nav>
      {/* two method working '' / "" / {} */}
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to={"/contact"}>Contact</ActiveLink>
    </nav>
  );
};

export default Header;