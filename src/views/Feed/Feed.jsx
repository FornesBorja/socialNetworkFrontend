import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Following from "../Following/Following";
import AllPost from "../allPost/allPost";
import "./Feed.css"


export const Feed = () => {
  const [activeTab, setActiveTab] = useState("following");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="app">
      <TopBar  activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'allPost' && <AllPost />}
      {activeTab === 'following' && <Following />}
    </div>
  );
};
