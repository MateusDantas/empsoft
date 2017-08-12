import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

const cx = classNames.bind(styles);

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={cx('page-body')}>
        <div className={cx('page-container')}>
          <Row>
            <Col xs={1} md={2} xsOffset={1}>
              <span>Filtrar por Serviço</span>
              <div className={cx('page-services')}>
                <span className={cx('service')}>Encanador</span>
                <span className={cx('service')}>Jardineiro</span>
                <span className={cx('service')}>Pedreiro</span>
                <span className={cx('service')}>Eletricista</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
