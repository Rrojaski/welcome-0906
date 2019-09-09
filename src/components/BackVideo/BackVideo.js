import React, { useEffect, Fragment } from "react";

import styles from "./BackVideo.module.scss";

// Media
import river from "../../media/river.mp4";
import clouds from "../../media/clouds.mp4";
import palms from "../../media/palms.mp4";

const BackVideo = props => {
  useEffect(() => {
    document.getElementById("vid").play();
  });
  return (
    <Fragment>
      <div className={`${styles.BackVideo} ${props.className}`}>
        <div className={`${styles.backvideo__overlay}`} />
        <video
          id="vid"
          className={`${styles.backvideo__video}`}
          autoPlay="true"
          loop
          muted
        >
          <source src={palms} type="video/mp4" />
          <source src={clouds} type="video/mp4" />
          <source src={river} type="video/mp4" />
        </video>
        {props.children}
      </div>
    </Fragment>
  );
};

export default BackVideo;
