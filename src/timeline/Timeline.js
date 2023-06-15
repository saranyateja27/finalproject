import React, { useState } from "react";
import Post from "./Post/Post";
// import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "rkive",
      postImage:
        "https://st1.latestly.com/wp-content/uploads/2022/04/rkive-1-784x441.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "jin",
      postImage:
        "https://assets.teenvogue.com/photos/5cf6984e79c81707270bcfde/1:1/w_2093,h_2093,c_limit/tout.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "agustd",
      postImage:
        "https://rollingstoneindia.com/wp-content/uploads/2023/04/NBA-Ambassador-SUGA-attends-the-game-between-the-Washington-Wizards-and-Golden-State-Warriors-on-September-30-2022-in-Saitama-Japan-2.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "uarmyhope",
      postImage:
        "https://1409791524.rsc.cdn77.org/data/images/full/597100/welcome-to-my-hopeworld-bts-j-hope-shares-vacation-activities-on-instagram.jpg",
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "jm",
      postImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/09/Jimin-23.png",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "thv",
      postImage:
        "https://www.allkpop.com/upload/2021/03/content/261406/1616781978-img-20210326-190443.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "jungkook.97",
      postImage:
        "https://www.billboard.com/wp-content/uploads/2022/06/01-Jungkook-bts-billboard-1548.jpg",
      likes: 54,
      timestamp: "2d",
    },
    
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        {/* <Suggestions /> */}
      </div>
    </div>
  );
}

export default Timeline;