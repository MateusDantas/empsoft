import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles.css';
import UserAvatar from 'react-user-avatar';

const cx = classNames.bind(styles);

export class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  props: Object;
  render() {
    return (
      <div className={cx('page-body')}>
        <div className={cx('page-container')}>
          <Row>
            <Col xs={2} md={3} xsOffset={1}>
              <div className={cx('page-services')}>
              </div>
            </Col>
            <Col xs={2} md={3} className={cx('description-container')}>
              <Details {...this.props} />
            </Col>
            <Col xs={2} md={3} className={cx('comment-container')}>
              <Comments {...this.props} />
            </Col>
          </Row>
        </div>
      </div>
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
        .get('detailedDescription');
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
