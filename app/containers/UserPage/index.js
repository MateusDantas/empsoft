import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

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
        </div>
        
        <div className={cx('bottom')}>
          <h4>Descrição</h4>
          <p>{info.bio}</p>
          <button className="btn btn-primary">Contratar</button>
        </div>
      </div>
    );
  }
}


class UserPage extends React.Component {
  render() {
    const usernow = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id).toJS();
    return (
      <div className={cx('user-profile')}>
        <MainPanel info={usernow} />
      </div>
    )
  }
}

class Comments extends React.Component {
  props: Object;
  render() {
    const comments = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id)
        .get('comments')
        .sortBy((comment) => -comment.get('id'))
        .toJS();
    return (
      <ul>
        { comments.map((comment) => (
          <li key={comment.id}> {comment.text} </li>
        ))}
      </ul>
    );
  }
}

export default UserPage;