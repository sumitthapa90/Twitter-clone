import React from "react";
import "./sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import Person2Icon from "@mui/icons-material/Person2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="logo" />
      <SidebarOption active Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={ExploreIcon} title="Explore" />
      <SidebarOption Icon={CircleNotificationsIcon} title="Notification" />
      <SidebarOption Icon={MessageIcon} title="Message" />
      <SidebarOption Icon={BookmarkIcon} title="Bookmark" />
      <SidebarOption Icon={ListIcon} title="Lists" />
      <SidebarOption Icon={Person2Icon} title="Profile" />
      <SidebarOption Icon={MoreHorizIcon} title="More" />

      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>

      <div className="login-option">
        <div className="login-details"></div>
      </div>
    </div>
  );
}

export default Sidebar;
