import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

import users from '../../mock.js';

const cx = classNames.bind(styles);

class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        }; 
    
    if (!image) return null;
    
    return (
     <div className={cx('avatar')} style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    
    return (
     <div>
        <div className={cx('top')}>
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <h3>de {info.location}</h3>
          
          <hr />
            <p>{info.age} anos</p>
        </div>
        
        <div className={cx('bottom')}>
          <h4>Descrição</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}


class UserPage extends React.Component {
  render() {
    const idUser = this.props.params.idUser % 3 != 0 ? this.props.params.idUser % 3 : 3;
    const user = users[idUser];
    return (
      <div className={cx('user-profile')}>
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

export default UserPage;