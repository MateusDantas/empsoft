/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PageWrapper from 'components/PageWrapper';
import Header from 'components/Header';

import 'antd/dist/antd.css';

import { selectUsers } from './selectors';

const ReactElement = React.Element;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  props: Object;
  render(): ReactElement<any> {
    return (
      <PageWrapper>
        <Header />
        {React.cloneElement(this.props.children, { users: this.props.users })}
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
