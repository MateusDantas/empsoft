import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles.css';
import UserAvatar from 'react-user-avatar';

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
      <Row>
        <Col xs={2} md={3} xsOffset={1}>
          <div className={cx('user-profile')}>
            <MainPanel info={usernow} />
          </div>
        </Col>
        <Col xs={2} md={3} xsOffset={1}>
          <Details {...this.props}/>
        </Col>
        <Col xs={2} md={3} xsOffset={1}>
          <Comments {...this.props}/>
        </Col>
      </Row>
    );
  }
}

class Details extends React.Component {
  props: Object;
  render() {
    const currUserName = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id)
        .get('name');
    const currUserRating = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id)
        .get('rating');
    const description = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id)
        .get('bio');
    return (
      <ul>
        <div className={cx('details-box-title')}> Detalhes: </div>
        <div className={cx('details-box')}>
          <div className={cx('details-box-name')}>
            <UserAvatar size="35" name={currUserName} />
            {currUserName}
          </div>
          <div className={cx('details-box-info')}>
            {description}
          </div>
          <StarRatingComponent
            name="app5"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={currUserRating}
            editing={false}
            renderStarIcon={(index, value) => <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />}
            renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
          />
        </div>
      </ul>
    );
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
        <div className={cx('comment-box-title')}> Comentários: </div>
        <Scrollbars style={{ width: '100%', height: '80vh' }}>
          { comments.map((comment) => (
            <div className={cx('comment-box')}>
              <li key={comment.id}>
                <div className={cx('comment-box-info')}>
                  <UserAvatar size="35" name={comment.name} />
                  <div className={cx('comment-name')}>{comment.name} Diz: {comment.text}</div>
                  <StarRatingComponent
                    name="app5"
                    starColor="#ffb400"
                    emptyStarColor="#ffb400"
                    value={comment.rating}
                    editing={false}
                    renderStarIcon={(index, value) => <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />}
                    renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                  />
                </div>
              </li>
            </div>
          ))}
        </Scrollbars>
      </ul>
    );
  }
}

export default UserPage;
