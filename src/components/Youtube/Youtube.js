import React, { Fragment, Component } from 'react';
import styles from './Youtube.module.scss';



class Youtube extends Component {
  constructor(props) {
    super(props);

  }
  render(props) {
    return (
      <Fragment>
        <div id='youtube' className={`${styles.Youtube}`}>
          <a href='./#back-video' onClick={props.toggle} className={`${styles.youtube__close}`}>X</a>
          <iframe className={`${styles.youtube__video}`} src="https://www.youtube.com/embed/ZZ5LpwO-An4?&loop=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Fragment>
    )
  }
}


export default Youtube;