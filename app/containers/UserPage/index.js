import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col, FormGroup, ControlLabel, InputGroup, FormControl } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles.css';
import UserAvatar from 'react-user-avatar';
import Modal from 'react-awesome-modal';
import DatePicker from 'react-bootstrap-date-picker';
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
          <button className="btn btn-primary" onClick={() => this.openModal()}>Contratar</button>
          <Modal visible={this.state.visible} width="600" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className={cx('modal-body')}>
              <h1>Oferta</h1>
              <FormGroup>
                <ControlLabel>Escolha a data inicial</ControlLabel>
                <DatePicker
                  value={this.state.firstStartDate.toISOString()}
                  onChange={this.handleChangeFirst}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Escolha a data final</ControlLabel>
                <DatePicker
                  value={this.state.secondStartDate.toISOString()}
                  onChange={this.handleChangeSecond}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Escolha o seu orçamento máximo</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>R$</InputGroup.Addon>
                  <FormControl type="text" />
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Especifique o serviço desejado</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
              <button className="btn btn-primary" onClick={() => this.closeModal()}>Enviar Oferta</button>
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
