import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames/bind';

import UserAvatar from 'react-user-avatar';

import Logo from 'assets/logo.png';

import styles from './styles.css';

const ReactElement = React.Element;
const cx = classNames.bind(styles);

class Header extends React.Component { // eslint-disable-line
  render(): ReactElement<any> {
    return (
      <div className={cx('page-header', 'header')}>
        <div className={cx('header-items')}>
          <img src={Logo} className={cx('page-logo')} alt={'logo'} onClick={() => browserHistory.push('/')} />
          <span className={cx('header-item')} onClick={() => browserHistory.push('/')} >
            Contratar <i className={cx('fa', 'fa-sort-desc', 'header-icon')} aria-hidden="true" />
          </span>
        </div>
        <div className={cx('header-profile')} onClick={() => browserHistory.push('/profile/999')}>
          <UserAvatar size="48" name="Mateus Dantas" />
        </div>
      </div>
    );
  }
}

export default Header;
