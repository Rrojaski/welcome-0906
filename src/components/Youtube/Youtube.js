import React, { Fragment, Component } from "react";
import styles from "./Youtube.module.scss";

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let iframe = document.querySelector("iframe");

    iframe.src = 'https://www.youtube.com/embed/ZZ5LpwO-An4?';
  }

  render(props) {
    return (
      <Fragment>
        <div id="youtube" className={`${styles.Youtube}`}>
          <a
            href="./#back-video"
            onClick={this.handleClick}
            className={`${styles.youtube__close}`}
          >
            X
          </a>
          <iframe
            id="video"
            className={`${styles.youtube__video}`}
            src="https://www.youtube.com/embed/ZZ5LpwO-An4?&autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Fragment>
    );
  }
}

export default Youtube;
