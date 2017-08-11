import React from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import styles from './styles.css';
import messages from './messages';

const cx = classNames.bind(styles);

export default function NotFound() {
  return (
    <div>
      <div className={cx('not-found-main')}>
        <div className={cx('not-found-body')}>
          <div className={cx('overlay')}>
            <div className={cx('not-found-text')}>404</div>
            <div className={cx('not-found-warning')}>
              <FormattedMessage {...messages.notFound} />
            </div>
            <div className={cx('not-found-msg')}>
              <FormattedMessage {...messages.notFoundText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
