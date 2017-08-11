/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PageWrapper from 'components/PageWrapper';

const ReactElement = React.Element;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  props: Object;
  render(): ReactElement<any> {
    return (
      <PageWrapper>
        {React.cloneElement(this.props.children, {})}
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
