import React, { Fragment } from "react";

import styles from "./Header.module.scss";

const Header = props => {
  return (
    <Fragment>
      <h1
        style={props.style}
        className={`${styles.Header} ${styles[props.size]} ${props.className}`}
      >
        {props.children}
      </h1>
    </Fragment>
  );
};

export default Header;
