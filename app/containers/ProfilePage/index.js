import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames/bind';
import { browserHistory } from 'react-router';
import UserAvatar from 'react-user-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';
import UserPage from "../UserPage/index";

const cx = classNames.bind(styles);

export default class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props: Object) {
    super(props);
  }
  props: Object;
  render() {
    const curruser = this.props.users
        .find((user) => user.get('id').toString() === this.props.params.user_id)
        .toJS();
    return (
      <div className={cx('page-body')}>
        <Row>
          <Col xs={2} md={3} xsOffset={1}>
            <div className={cx('user-avatar')}>
              <MainPanel info={curruser} />
            </div>
          </Col>
          <Comments {...this.props} />
        </Row>
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
                        width={90}
                        height={90}
                    />
                    <h2>{info.name}</h2>
                    <h3>de {info.location}</h3>
                    <hr />
                </div>

                <div className={cx('bottom')}>
                    <h4>Descrição</h4>
                    <p>{info.bio}</p>
                </div>
            </div>
        );
    }
}

class Avatar extends React.Component {
    render() {
        var image = this.props.image,
            style = {
                width: this.props.width || 50,
                height: this.props.height || 50,
            };
        if (!image) return null;
        return (
            <div className={cx('avatar')} style={style}>
                <img src={this.props.image} />
            </div>
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
            <Col xs={8} md={8} className={cx('profile-container')}>
                Sobre seus serviços:
                <Scrollbars style={{ width: '100%', height: '80vh' }}>
                    {comments.map((comment) => (
                        <div className={cx('profile-box')}>
                            <div className={cx('profile-box-info')}>
                                <div className={cx('profile-info')}>
                                    <UserAvatar size="48" name={comment.name} />
                                    <div className={cx('profile-about')}>
                                        <div className={cx('profile-name')}>{comment.name}</div>
                                        <div className={cx('profile-comment-text')}>{comment.text}</div>
                                    </div>
                                </div>
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
                        </div>
                    ))}
                </Scrollbars>
            </Col>
        );
    }
}
