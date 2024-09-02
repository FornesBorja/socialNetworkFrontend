import React from 'react';
import { getFollowingPosts } from '../../services/apiCalls';
import { Post } from '../../components/Post/Post';

const Following = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  let token, role;
  if (passport) {
    token = passport.token;
    role = passport.tokenData?.role;
  }
  return (
    <div className="view">
      <Post token={token} fetchPosts={getFollowingPosts}/>
    </div>
  );
};

export default Following;
