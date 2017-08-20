import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames/bind';
import { browserHistory } from 'react-router';
import UserAvatar from 'react-user-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

const cx = classNames.bind(styles);

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props: Object) {
    super(props);
  }
  state: Object;
  props: Object;
  render() {
    const curruser = this.props.users
        .find((user) => user.get('id').toString() === this.props.user_id)
        .toJS();
    return (
      <div className={cx('page-body')}>
          {curruser.name}
      </div>
    );
  }
}
