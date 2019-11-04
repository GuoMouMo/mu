import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from 'page/redux/actions/home';
import './home.scss';
import Button from './component/common1';

class Home extends Component {
  constructor() {
      super();
      this.state = {
          value: '',
      };
  }

  onChange = () => {
    console.log(123);
  };

  render() {
    const { children } = this.props;

    return(
      <div className="home">
        hellow world
        <Button content="跳转" />
        <button onClick={this.props.actions.add}>+</button>
        <input
          value={this.props.pageStore.value}
          onChange={(e) => {
              this.onChange(e);
              this.props.actions.valueChange(e.target.value);
          }}/>
        {this.props.pageStore.home}
        {children}
      </div>
    )
  }
}

export default connect(
    state => ({ pageStore: state.home }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Home);
