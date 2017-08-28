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
          <div className={cx('header-options')}>
            <div className={cx('header-title')}>Serviços de qualidade na palma da sua mão</div>
            <div className={cx('header-options-menu')}>
              <span className={cx('header-item')} onClick={() => browserHistory.push('/')} >
                Início
              </span>
              <span className={cx('header-item-text')} onClick={() => browserHistory.push('/profile/8')} >
                |       Seja bem-vindo Neymar Jr
              </span>
            </div>
          </div>
        </div>
        <div className={cx('header-profile')}>
          <Popconfirm
            placement="bottom"
            title={'Mateus Dantas está a procura de um serviço de pedreiro começando dia 25 de agosto e terminando 25 de setembro por 800 reais. Você deseja aceitar?'}
            onConfirm={() => message.info('Click on Yes.')} okText="Sim" cancelText="Não"
          >
            <Badge dot><Icon type="notification" /></Badge>
          </Popconfirm>
          <UserAvatar onClick={() => browserHistory.push('/profile/8')} size="48" name="Neymar Jr" />
        </div>
      </div>
    );
  }
}

export default Header;
