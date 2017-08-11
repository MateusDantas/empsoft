import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const ReactElement = React.Element;
const cx = classNames.bind(styles);

function PageWrapper(props: React.PropTypes): ReactElement<any> {
  return (
    <div className={cx('page-wrapper')}>
      {props.children}
    </div>
  );
}

export default PageWrapper;
