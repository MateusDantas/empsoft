import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles.css';
import UserAvatar from 'react-user-avatar';
import Modal from 'react-awesome-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Icon from 'assets/iconehomem.png';
import 'react-datepicker/dist/react-datepicker.css';

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
  constructor(props: Object) {
    super(props);
    this.state = {
      visible : false,
      firstStartDate: moment(),
      secondStartDate: moment()
    }
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeSecond = this.handleChangeSecond.bind(this);
  }

  handleChangeFirst(date) {
    this.setState({
      firstStartDate: date
    });
  }

  handleChangeSecond(date) {
    this.setState({
      secondStartDate: date
    });
  }

  openModal() {
    this.setState({
      visible : true
    });
  }
 
  closeModal() {
    this.setState({
      visible : false
    });
  }
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
          <button className={cx('btn btn-primary')} onClick={() => this.openModal()}>Contratar</button>
          <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
              <div>
                  <h1>Oferta</h1>
                  <p>Início</p>
                  <div className={cx('page-body-modal')}>
                    <div className={cx('page-container-modal')}>
                      <Row>
                        <Col xs={12} md={12}>
                          <DatePicker
                              selected={this.state.firstStartDate}
                              onChange={this.handleChangeFirst}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <p>Fim</p>
                  <div className={cx('page-body-modal')}>
                    <div className={cx('page-container')}>
                      <Row>
                        <Col xs={12} md={12}>
                          <DatePicker
                              selected={this.state.secondStartDate}
                              onChange={this.handleChangeSecond}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <p>Pagamento</p>
                  R$ <input type="number" step="0.01" style={{border: '1px solid #0c0c0c'}}/>
                  <br/><br/>
                  <button className="btn btn-primary">Enviar Oferta</button>
              </div>
          </Modal>
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
      <div className={cx('page-body')}>
          <Row>
              <Col xs={2} md={3} xsOffset={1}>
                  <div className={cx('user-profile')}>
                      <MainPanel info={usernow} />
                  </div>
              </Col>
              <Comments {...this.props} />
          </Row>
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
            <p className={cx('comentarios-text')}> Comentários: </p>
            <Scrollbars style={{ width: '100%', height: '80vh' }}>
                {comments.map((comment) => (
                    <div className={cx('profile-box')}>
                        <div className={cx('profile-box-info')}>
                            <div className={cx('profile-info')}>
                                <UserAvatar size="48" name={comment.name} src={Icon}/>
                                <div className={cx('profile-about')}>
                                    <div className={cx('profile-name')}>{comment.name}</div>
                                    <div className={cx('profile-comment-text')}>{comment.text}</div>
                                </div>
                            </div>
                            <StarRatingComponent
                                name="app5"
                                starColor="#FFFFFF"
                                emptyStarColor="#FFFFFF"
                                value={comment.rating}
                                editing={false}
                                renderStarIcon={(index, value) => <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />}
                                renderStarIconHalf={() => <span className="fa fa-star-half-o" />}
                            />
                        </div>
                    </div>
                ))}
            </Scrollbars>
        </Col>
    );
  }
}

export default UserPage;
