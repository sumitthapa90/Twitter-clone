import React from "react";
import "./rightsec.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterTweetEmbed,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function RightSec() {
  return (
    <div className="right-sec">
      <div className="rightSec-input">
        <SearchIcon className="seach-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="rightSec-container">
        <h2>What's Happning</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 300 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
        <TwitterHashtagButton tag={"cybersecurity"} />
        <TwitterFollowButton screenName={"saurabhnemade"} />
        <TwitterVideoEmbed id={"560070183650213889"} />
        <TwitterOnAirButton id={"560070183650213889"} />
      </div>
    </div>
  );
}

export default RightSec;
