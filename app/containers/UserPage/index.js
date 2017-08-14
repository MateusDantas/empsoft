import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

const cx = classNames.bind(styles);

export class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={cx('page-body')}>
        <div className={cx('page-container')}>
          <Row>
            <Col xs={1} md={2} xsOffset={1}>
              <div className={cx('page-services')}>
              </div>
            </Col>
            <Col>
              <Comments />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

class Comments extends React.Component {
  props: Object;
  render() {
    const comments = this.props.users
        .find((user) => user.get('id') === this.props.params.user_id)
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
