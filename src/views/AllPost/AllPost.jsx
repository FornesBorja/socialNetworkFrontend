import React from 'react';
import { getAllPosts } from '../../services/apiCalls';
import { Post } from '../../components/Post/Post';

const AllPost = () => {
  return (
    <div className="view">
      <Post fetchPosts={getAllPosts}/>
    </div>
  );
};

export default AllPost;
