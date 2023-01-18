import React from "react";
import { Avatar, Button } from "@mui/material";
import "./tweetbox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form className="tweetForm">
        <div className="tweet-input">
          <Avatar
            className="avatar"
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
            alt="profile"
          />
          <input placeholder="Whats Happning" type="text" />
        </div>
        <div className="flex-class">
          <div className="icons">
            <PermMediaIcon className="tweetbox-icon" />
            <GifBoxIcon className="tweetbox-icon" />
            <PollIcon className="tweetbox-icon" />
            <EmojiEmotionsIcon className="tweetbox-icon" />
            <EventNoteIcon className="tweetbox-icon" />
            <LocationOnIcon className="tweetbox-icon" />
          </div>
          <div>
            <Button variant="outlined" className="sidebar-tweet" fullWidth>
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
