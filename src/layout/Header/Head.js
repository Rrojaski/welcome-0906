import React, { Fragment } from "react";
import styles from "./Head.module.scss";
// Components
import Navi from "../../components/Navi/Navi";
import { Row, Col } from "../../components/Grid/Grid";
import Paragraph from "../../components/Paragraph/Paragraph";

const Head = props => {
  return (
    <Fragment>
      <div className={`${styles.Head}`}>
        <div className={`${styles.head__box}`}>
          <Row>
            <div className={`${styles.head__left}`}>
              <Paragraph size="md">
                <a
                  href="tel:904-271-5715"
                  className={`${styles["u-reset-anchor"]}`}
                >
                  <span>Call</span> +1 904 - 271 - 5715
                </a>
              </Paragraph>
            </div>
            <div className={`${styles.head__right}`}>
              <Paragraph size="md">
                <a
                  href="mailto:rrojaski@gmail.com"
                  className={`${styles["u-reset-anchor"]}`}
                >
                  <span>Email</span> rrojaski@gmail.com
                </a>
              </Paragraph>
            </div>
          </Row>
        </div>
        <Row>
          <Col className="header__item__left" size="col-2-of-3">
            &nbsp;
          </Col>
          <Col className="header__item__right" size="col-1-of-3">
            <Navi />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Head;
