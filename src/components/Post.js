import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";

function Post({
  displayName,
  username,
  varified,
  text,
  image,
  avatar,
  timestamp,
}) {
  return (
    <div className="post">
      <div className="avatar">
        <Avatar
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
          alt="3"
        />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-text">
            <h3>
              Sumit
              <span className="post-special">
                <CheckCircleIcon className="verified" /> @sumit
              </span>
            </h3>
          </div>
          <div className="post-desc">
            <p>hello My name is sumit thapa </p>
          </div>
          <img className="img-se" src={image} alt="1" />

          <div className="post-footer">
            <ChatIcon />
            <RepeatIcon />
            <FavoriteIcon />
            <DownloadIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
