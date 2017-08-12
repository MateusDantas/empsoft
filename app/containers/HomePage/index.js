import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={cx('page-body')}>
        <div className={cx('page-container')}>

        </div>
      </div>
    );
  }
}

export default HomePage;
