import React from "react";
import { Input } from "../../components/Input/Input";

export const Profile = () => {
  return (
    <div id="container">
      <div id="content">
        <div id="container-left">
          <div className="left-top">
            <img src="https://imgs.search.brave.com/guFeeYHxGB1sxa5fjRQz35X6MNFk-_AmM_fj6PNO1X0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/aWNvbi1mcm9udC1z/aWRlXzE4NzI5OS0z/OTU5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
          </div>
          <div className="left-bottom">
            <div className="following"></div>
            <div className="followers"></div>
          </div>
        </div>
        <div id="container-right">
          <div className="right-top">
            <Input
              name="edit-profile-button"
              type="button"
              className="button-general"
              value="Edit profile"
            />
          </div>
          <div className="right-bottom">
            <div className="post-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
