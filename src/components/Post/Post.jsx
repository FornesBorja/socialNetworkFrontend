import React, { useEffect, useState } from "react";
import { getUserPosts } from "../../services/apiCalls"; 
import "./Post.css"

export const Post = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const userPosts = await getUserPosts(token);
        setPosts(userPosts);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.multimedia && <img src={post.multimedia} alt="post multimedia" className="post-image"/>}
            <div>Likes: {post.likes.length}</div>
          </div>
        ))
      ) : (
        <p>Oops...It seems like you haven't posted anything</p>
      )}
    </div>
  );
};
