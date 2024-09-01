import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Following from "../Following/Following";
import AllPost from "../AllPost/AllPost";
import "./Feed.css";
import { Input } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/apiCalls";

export const Feed = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token;

  const [activeTab, setActiveTab] = useState("following");

  const handleTabChange = (tab) => setActiveTab(tab);

  const [posts, setPosts] = useState({
    title: "",
    content: "",
    multimedia: "",
    author:passport.tokenData.id
  });
  function handleChange(e) {
    setPosts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const handleSubmit = async () => {
    const success = await createPost(posts, token);
    if (success) {
      setPosts({
        title: "",
        content: "",
        multimedia: "",
      });
    }
  };
  const navigate = useNavigate();

  return (
    <div id="container">
      <div id="content">
        <div id="container-left">
          <div className="left-top">
            <img
              src="https://imgs.search.brave.com/guFeeYHxGB1sxa5fjRQz35X6MNFk-_AmM_fj6PNO1X0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/aWNvbi1mcm9udC1z/aWRlXzE4NzI5OS0z/OTU5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              className="img-profile"
              alt="profile picture"
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="left-bottom"></div>
        </div>
        <div id="container-right">
          <div className="app"></div>
          <div className="right-top">
            <div className="write-posts">
              <Input
                name="title"
                className="post-writing"
                value={posts.title}
                placeholder="Post title"
                change={handleChange}
              />
              <Input
                name="content"
                className="post-writing"
                value={posts.content}
                placeholder="Post content"
                change={handleChange}
              />
            </div>
            <div className="posts">
              <Input
                name="posts-button"
                type="button"
                className="button-general"
                value="Post this"
                click={handleSubmit}
              />
            </div>
          </div>
          <div className="right-bottom">
            <TopBar activeTab={activeTab} onTabChange={handleTabChange} />
            {activeTab === "allPost" && <AllPost />}
            {activeTab === "following" && <Following />}
          </div>
        </div>
      </div>
    </div>
  );
};
