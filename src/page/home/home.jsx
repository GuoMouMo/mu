import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from 'page/redux/actions/home';
import './home.scss';
import Button from './component/common1';

class Home extends Component {
    render() {
        return(
            <div className="home">
                hellow world
                <Button content="跳转" />
                <button onClick={this.props.actions.add}>+</button>
                {this.props.pageStore.home}
            </div>
        )
    }
}

export default connect(
    state => ({ pageStore: state.home }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Home);
