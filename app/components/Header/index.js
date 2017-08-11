import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const ReactElement = React.Element;
const cx = classNames.bind(styles);

class Header extends React.Component { // eslint-disable-line
  render(): ReactElement<any> {
    return (
      <div className={cx('page-header')}></div>
    );
  }
}

export default Header;
