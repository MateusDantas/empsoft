import React from 'react';
import { Badge, Icon, Popconfirm, message } from 'antd';
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
        <div className={cx('header-profile')}>
          <Popconfirm
            placement="bottom"
            title={'Mateus Dantas está a procura de um serviço de pedreiro começando dia 25 de agosto e terminando 25 de setembro por 800 reais. Você deseja aceitar?'}
            onConfirm={() => message.info('Click on Yes.')} okText="Sim" cancelText="Não"
          >
            <Badge dot><Icon type="notification" /></Badge>
          </Popconfirm>
          <UserAvatar onClick={() => browserHistory.push('/profile/8')} size="48" name="Mateus Dantas" />
        </div>
      </div>
    );
  }
}

export default Header;
