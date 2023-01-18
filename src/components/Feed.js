import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-head">
        <div>
          <h2>Home</h2>
        </div>
      </div>
      <TweetBox />
      <Post
        displayName="ram"
        username="ramu"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://media.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif"
      />

      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://media.istockphoto.com/photos/table-filled-with-large-variety-of-food-picture-id1155240369"
      />
      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://media.giphy.com/media/DsdVe5jhHWNC8/giphy.gif"
      />
      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://th.bing.com/th/id/R.7af50c605c253277149e5cfeb2a04fe7?rik=rKrhtjHjkg1Gyw&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2017%2f09%2f05%2fbeautiful-natural-wallpaper.jpg&ehk=F2RJ8Cy0Zs8BdEWU10r0kOge%2f8Nw2mcQ%2fbkgHBa%2fMnc%3d&risl=&pid=ImgRaw&r=0"
      />
      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://th.bing.com/th/id/R.d79c76630d5eead832d6a188f38fb388?rik=t%2bIE2AkUYzfSOQ&riu=http%3a%2f%2fwww.lakehouserecoverycenter.com%2fwp-content%2fuploads%2f2015%2f01%2fQuote-Hardest-Climb.jpg&ehk=cvA2xlu7LZ1sMSe5Uf8HTOtnK8uxuqQTE5xl%2bqDyg%2bE%3d&risl=&pid=ImgRaw&r=0"
      />
      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif"
      />
      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://media.giphy.com/media/CtoJMGuws3mqQ/giphy.gif"
        text="yo yo hunny singh"
        image="https://lh3.googleusercontent.com/-uKuJ8lfMZ1I/YL8WuuJqstI/AAAAAAAAd2w/jmqJ_tt0f2UG3bHwRLeHZXwu1bqRvSyYwCLcBGAsYHQ/s1600/1623135927205376-15.png"
      />

      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://2.bp.blogspot.com/-jCizpBQO804/WyXlIky72rI/AAAAAAAAB3o/XQNU5jvVmYYMeHOZq3DsMD6rjqAR7_YkwCEwYBhgL/s1600/fitness%2Bmotivation%2Bquotes.jpg"
      />

      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://i.pinimg.com/originals/4d/bc/46/4dbc46798d788d122f747f404940627a.jpg"
      />

      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg"
      />

      <Post
        displayName="kabir"
        username="cabs"
        varified={true}
        avatar="https://parts.subaru.com/images/parts/subaru/vehicleaccessories/fullsize/PaddleboardCarrier_SOA567P010_19ASC.jpg"
        text="yo yo hunny singh"
        image="https://pbs.twimg.com/media/FVdkr20XEAE_cGZ.jpg"
      />
    </div>
  );
}

export default Feed;
