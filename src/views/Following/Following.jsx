import React from 'react';
import { getFollowingPosts } from '../../services/apiCalls';
import { Post } from '../../components/Post/Post';

const Following = () => {
  return (
    <div className="view">
      <Post fetchPosts={getFollowingPosts}/>
    </div>
  );
};

export default Following;
