import React, { Fragment } from "react";

import styles from "./Navi.module.scss";
import '../../icon-font.css';


// Media
import portfolio2 from '../../media/portfolio2.PNG';
import anime from '../../media/anime.png';
import heMan from '../../media/he-man.jpg';

const Navi = props => {


  return (
    <Fragment>
      <nav
        style={props.style}
        className={`${styles.Navi} ${props.className}`}
      >
        <ul className={`${styles.navi__list}`}>
          <li className={`${styles.navi__item}`}>
            <a target='_blank' href='https://www.romanrojas.me' className='u-reset-anchor'>
              <i className="feature-box__icon icon-basic-star"></i>
            </a>
            <input className={`${styles.navi__checkbox} ${'u-checkbox-hide'} ${styles.navi__checkbox__portfolio}`} id='portfolio' name='portfolio' type='checkbox' />
            <label for='portfolio' className={`${styles.navi__title}`}>
              portfolio
              <i className={`${styles.navi__arrow}`}>▼</i>
            </label>
            <div className={`${styles.navi__content} ${styles.navi__content__portfolio}`}>
              <a target="_blank" href='https://www.romanrojas.me/' className={`${styles.navi__img} ${styles.navi__img__portfolio2} ${'u-reset-anchor'}`}><img src={portfolio2} /></a>
            </div>
          </li>

          <li className={`${styles.navi__item}`}>
            <a target='_blank' href='https://www.anime-shop-online.com' className='u-reset-anchor'>
              <i className="feature-box__icon icon-basic-book"></i>
            </a>
            <input className={`${styles.navi__checkbox} ${'u-checkbox-hide'} ${styles.navi__checkbox__work}`} id='book' name='book' type='checkbox' />
            <label for='book' className={`${styles.navi__title}`}>
              work
              <i className={`${styles.navi__arrow}`}>▼</i>
            </label>
            <div className={`${styles.navi__content} ${styles.navi__content__work}`}>
              <a target="_blank" href='https://www.anime-shop-online.com' className={`${styles.navi__img} ${styles.navi__img__anime} ${'u-reset-anchor'}`}><img src={anime} /></a>
            </div>
          </li>

          <li className={`${styles.navi__item}`}>
            <a target='_blank' href='https://www.romanrojas.me' className='u-reset-anchor'>
              <i className="feature-box__icon icon-basic-heart"></i>
            </a>
            <input className={`${styles.navi__checkbox} ${'u-checkbox-hide'} ${styles.navi__checkbox__cool}`} id='heart' name='heart' type='checkbox' />
            <label for='heart' className={`${styles.navi__title}`}>
              cool stuff
              <i className={`${styles.navi__arrow}`}>▼</i>
            </label>
            <div className={`${styles.navi__content} ${styles.navi__content__cool}`}>
              <a href='./#youtube' className={`${styles.navi__img} ${styles.navi__img__heMan} ${'u-reset-anchor'}`}><img src={heMan} /></a>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment >
  );
};

export default Navi;
