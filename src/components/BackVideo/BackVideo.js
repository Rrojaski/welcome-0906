import React, { Fragment } from "react";

import styles from "./BackVideo.module.scss";

// Media
import river from "../../media/river.mp4";
import clouds from "../../media/clouds.mp4";
import palms from '../../media/palms.mp4';

const BackVideo = props => {
  return (
    <Fragment>
      <div className={`${styles.BackVideo} ${props.className}`}>
        <div className={`${styles.backvideo__overlay}`} />
        <video className={`${styles.backvideo__video}`} autoplay='true' loop>
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
