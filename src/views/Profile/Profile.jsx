import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import "./Profile.css";
import {
  getProfile,
  getUserPosts,
  updateProfile,
} from "../../services/apiCalls";
import { Post } from "../../components/Post/Post";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    email: "",
    password: "",
    followers: [],
    createdAt: "",
  });
  const [editData, setEditData] = useState({
    email: "",
    password: "",
    followers: [],
    createdAt: "",
  });
  const [editting, setEditting] = useState(false);

  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token;

  const editButtonHandler = () => {
    setEditData({
      name: profileData.email,
      password: profileData.password,
    });
    setEditting(!editting);
  };

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await updateProfile(editData, token)
      if (response.success) {
        const newData = await getProfile(token)
        setProfileData(newData.data)
        setEditting(!editting)
  
      }else{
        console.log(response.error)
      }} catch (err) {
        
      }
  };

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringMyProfile = async () => {
        const response = await getProfile(passport.token);
        setProfileData(response.data);
      };
      bringMyProfile();
    }
  }, []);

  return (
    <div id="container">
      <div id="content">
        <div id="container-left">
          <div className="left-top">
            <img
              src="https://imgs.search.brave.com/guFeeYHxGB1sxa5fjRQz35X6MNFk-_AmM_fj6PNO1X0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/aWNvbi1mcm9udC1z/aWRlXzE4NzI5OS0z/OTU5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              className="img-profile"
              alt="profile picture"
            />
          </div>
          <div className="left-bottom">
            <div className="followers">
              <div>Followers</div>
              <div className="number-followers">
                {profileData.followers.length}
              </div>
            </div>
          </div>
        </div>
        <div id="container-right">
          <div className="right-top">
            {editting ? (
              <div className="">
                <Input
                  name="email"
                  className="post-writing"
                  placeholder={profileData.email}
                  change={editInputHandler}
                />
                <Input
                  type="password"
                  name="password"
                  className="post-writing"
                  placeholder="Password"
                  change={editInputHandler}
                />
              </div>
            ) : (
              <div className="name-profile">{profileData.email}</div>
            )}

            <div className="edit-profile">
              <Input
                name="edit-profile-button"
                type="button"
                className="button-general"
                value={editting ? "Save" : "Edit profile"}
                click={editting ? handleSubmit : editButtonHandler}
              />
            </div>
          </div>
          <div className="right-bottom">
            <div className="post-container">
              <Post fetchPosts={getUserPosts} token={token} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
