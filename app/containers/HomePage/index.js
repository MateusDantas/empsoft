import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames/bind';
import { browserHistory } from 'react-router';
import UserAvatar from 'react-user-avatar';
import StarRatingComponent from 'react-star-rating-component';
import { Row, Col } from 'react-bootstrap';

import styles from './styles.css';

const cx = classNames.bind(styles);

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props: Object) {
    super(props);
    this.state = {
      service: 'All',
    };
  }
  state: Object;
  props: Object;
  render() {
    const users = this.props.users
      .filter((item) => this.state.service === 'All' || item.get('service') === this.state.service)
      .sortBy((item) => -item.get('rating'))
      .toJS();
    return (
      <div className={cx('page-body')}>
        <div className={cx('page-container')}>
          <Row>
            <Col xs={1} md={2} xsOffset={1}>
              <span>Filtrar por Serviço</span>
              <div className={cx('page-services')}>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Encanador',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Encanador') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Encanador',
                      });
                    }
                  }}
                >
                  Encanador
                </span>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Eletricista',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Eletricista') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Eletricista',
                      });
                    }
                  }}
                >
                  Eletricista
                </span>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Jardineiro',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Jardineiro') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Jardineiro',
                      });
                    }
                  }}
                >
                  Jardineiro
                </span>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Pedreiro',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Pedreiro') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Pedreiro',
                      });
                    }
                  }}
                >
                  Pedreiro
                </span>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Diarista',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Diarista') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Diarista',
                      });
                    }
                  }}
                >
                  Diarista
                </span>
                <span
                  className={cx({
                    service: true,
                    selected: this.state.service === 'Marceneiro',
                  })}
                  onClick={() => {
                    if (this.state.service === 'Marceneiro') {
                      this.setState({
                        service: 'All',
                      });
                    } else {
                      this.setState({
                        service: 'Marceneiro',
                      });
                    }
                  }}
                >
                  Marceneiro
                </span>
              </div>
            </Col>
            <Col xs={8} md={8} className={cx('profile-container')}>
              <Scrollbars style={{ width: '100%', height: '80vh' }}>
                {users.map((user) => (
                  <div className={cx('profile-box')} onClick={() => browserHistory.push(`/user/${user.id}`)}>
                    <div className={cx('profile-box-info')}>
                      <div className={cx('profile-info')}>
                        <UserAvatar size="48" name={user.name} />
                        <div className={cx('profile-about')}>
                          <div className={cx('profile-name')}>{user.name}</div>
                          <div className={cx('profile-service')}>{user.service}</div>
                        </div>
                      </div>
                      <StarRatingComponent
                        name="app5"
                        starColor="#ffb400"
                        emptyStarColor="#ffb400"
                        value={user.rating}
                        editing={false}
                        renderStarIcon={(index, value) => <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />}
                        renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                      />
                    </div>
                    <div className={cx('profile-more-info')}>
                      <div>
                        <span>
                          <i className="fa fa-flash" aria-hidden="true" /> {user.lastJobs} trabalhos no ultimo mes
                        </span>
                        <span>
                          <i className="fa fa-globe" aria-hidden="true" /> {user.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Scrollbars>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
