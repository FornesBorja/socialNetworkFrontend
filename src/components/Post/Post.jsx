import React, { useEffect, useState } from "react";
import { getUserPosts, likePost } from "../../services/apiCalls"; 
import "./Post.css"

export const Post = ({ token , fetchPosts}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(token);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, [token, fetchPosts]);

  const handleLike = async (postId) => {
    try {
      const updatedPost = await likePost(postId, token);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: updatedPost.likes } : post
        )
      );
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.multimedia && (
              <img src={post.multimedia} alt="post multimedia" className="post-image" />
            )}
            <div>
              Likes: {post.likes.length}
              <button
                onClick={() => handleLike(post._id)}
                className="like-button"
              >
                {post.likes.includes(token) ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Oops...It seems like there's no post to show</p>
      )}
    </div>
  );
};
